import { createContext, useContext, useState } from "react";

const FoodContext = createContext();

export function FoodProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (food) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === food.id);

      if (existing) {
        return prev.map((item) =>
          item.id === food.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...food, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, qty) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (food) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === food.id);

      if (exists) {
        return prev.filter((item) => item.id !== food.id);
      }

      return [...prev, food];
    });
  };

  const totalQty = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <FoodContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        updateQty,
        removeFromCart,
        toggleFavorite,
        totalQty,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export const useFood = () => useContext(FoodContext);
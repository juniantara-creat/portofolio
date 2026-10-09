import { useState } from "react";
import { Link } from "react-router-dom";
import { useFood } from "../context/FoodContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { totalQty, favorites } = useFood();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-red-950 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold"
        >
          🌺 BaliRasa
        </Link>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">

          <Link
            to="/"
            className="transition hover:text-orange-300"
          >
            Beranda
          </Link>

          <Link
            to="/foods"
            className="transition hover:text-orange-300"
          >
            Kuliner
          </Link>

          <Link
            to="/favorites"
            className="transition hover:text-orange-300"
          >
            ❤️ Favorit
            {favorites.length > 0 && (
              <span className="ml-1 rounded-full bg-orange-500 px-2 py-0.5 text-xs">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="transition hover:text-orange-300"
          >
            🛒 Keranjang
            {totalQty > 0 && (
              <span className="ml-1 rounded-full bg-orange-500 px-2 py-0.5 text-xs">
                {totalQty}
              </span>
            )}
          </Link>

        </div>

        {/* Tombol Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
          aria-label="Buka menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="border-t border-red-900 bg-red-950 px-6 pb-5 md:hidden">

          <div className="flex flex-col gap-2 pt-3">

            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 hover:bg-red-900"
            >
              🏠 Beranda
            </Link>

            <Link
              to="/foods"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 hover:bg-red-900"
            >
              🍛 Kuliner
            </Link>

            <Link
              to="/favorites"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 hover:bg-red-900"
            >
              ❤️ Favorit

              {favorites.length > 0 && (
                <span className="ml-2 rounded-full bg-orange-500 px-2 py-0.5 text-xs">
                  {favorites.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 hover:bg-red-900"
            >
              🛒 Keranjang

              {totalQty > 0 && (
                <span className="ml-2 rounded-full bg-orange-500 px-2 py-0.5 text-xs">
                  {totalQty}
                </span>
              )}
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
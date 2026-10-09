import { Link } from "react-router-dom";
import { useFood } from "../context/FoodContext";

function FoodCard({ food }) {
  const { addToCart, toggleFavorite, favorites } = useFood();

  const isFavorite = favorites.some((item) => item.id === food.id);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* Gambar */}
      <div className="relative">
        <img
          src={food.image}
          alt={food.name}
          className="h-52 w-full object-cover"
        />

        {/* Tombol Favorit */}
        <button
          onClick={() => toggleFavorite(food)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow"
          title="Tambah ke favorit"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Informasi makanan */}
      <div className="p-5">
        <p className="text-sm font-semibold text-orange-600">
          {food.category}
        </p>

        <h2 className="mt-1 text-xl font-bold text-gray-800">
          {food.name}
        </h2>

        <div className="mt-2 flex items-center gap-1 text-sm">
          <span>⭐</span>
          <span className="font-semibold text-gray-700">
            {food.rating}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {food.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-orange-600">
            Rp {food.price.toLocaleString("id-ID")}
          </p>

          <button
            onClick={() => addToCart(food)}
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            + Keranjang
          </button>
        </div>

        <Link
          to={`/food/${food.id}`}
          className="mt-3 block text-center text-sm font-semibold text-red-800 hover:text-orange-600"
        >
          Lihat Detail →
        </Link>
      </div>
    </div>
  );
}

export default FoodCard;
import { Link, useParams } from "react-router-dom";
import { useFood } from "../context/FoodContext";
import foods from "../utils/data";
import Rating from "../components/Rating";

function FoodDetail() {
  const { id } = useParams();
  const { addToCart, toggleFavorite, favorites } = useFood();

  const food = foods.find((item) => item.id === Number(id));

  if (!food) {
    return (
      <div className="min-h-screen bg-orange-50 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 text-center shadow">
          <h1 className="text-2xl font-bold text-gray-800">
            Makanan Tidak Ditemukan
          </h1>

          <Link
            to="/foods"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white"
          >
            Kembali ke Kuliner
          </Link>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.some((item) => item.id === food.id);

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Tombol kembali */}
        <Link
          to="/foods"
          className="mb-6 inline-block font-semibold text-red-900 hover:text-orange-600"
        >
          ← Kembali ke Kuliner
        </Link>

        {/* Detail makanan */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-lg md:grid-cols-2">

          {/* Gambar */}
          <div className="relative">
            <img
              src={food.image}
              alt={food.name}
              className="h-full min-h-87.5 w-full object-cover"
            />

            {/* Favorit */}
            <button
              onClick={() => toggleFavorite(food)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow"
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>

          {/* Informasi */}
          <div className="p-8 md:p-10">

            <p className="font-semibold text-orange-600">
              🌺 {food.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-800">
              {food.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xl">⭐</span>

              <span className="font-semibold text-gray-700">
                {food.rating}
              </span>

              <span className="text-gray-400">
                / 5.0
              </span>
            </div>

            {/* Deskripsi */}
            <p className="mt-6 leading-relaxed text-gray-600">
              {food.description}
            </p>

            {/* Harga */}
            <div className="mt-8 border-t pt-6">
              <p className="text-sm text-gray-500">
                Harga
              </p>

              <p className="mt-1 text-3xl font-bold text-orange-600">
                Rp {food.price.toLocaleString("id-ID")}
              </p>
            </div>

            {/* Keranjang */}
            <button
              onClick={() => addToCart(food)}
              className="mt-8 w-full rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              🛒 Tambahkan ke Keranjang
            </button>

          </div>
        </div>

        {/* Rating & Review */}
        <Rating />

      </div>
    </div>
  );
}

export default FoodDetail;
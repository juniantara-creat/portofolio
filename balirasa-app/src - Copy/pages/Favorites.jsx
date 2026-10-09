import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { useFood } from "../context/FoodContext";

function Favorites() {
  const { favorites } = useFood();

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="font-semibold text-orange-600">
            ❤️ BaliRasa
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-800">
            Kuliner Favorit
          </h1>

          <p className="mt-3 text-gray-600">
            Kumpulan makanan khas Bali yang kamu sukai.
          </p>
        </div>

        {/* Jika kosong */}
        {favorites.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <div className="text-6xl">🤍</div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              Belum Ada Favorit
            </h2>

            <p className="mt-2 text-gray-500">
              Yuk, pilih makanan khas Bali yang kamu sukai!
            </p>

            <Link
              to="/foods"
              className="mt-6 inline-block rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Jelajahi Kuliner
            </Link>
          </div>
        ) : (
          /* Jika ada favorit */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Favorites;
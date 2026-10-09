import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import foods from "../utils/data";
import logoBali from "../assets/bali-rasa.jpg";

function Home() {
  const popularFoods = foods.slice(0, 3);

  return (
    <div className="bg-orange-50">

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

          {/* Text */}
          <div>
            <p className="mb-4 font-semibold text-orange-600">
              🌺 Cita Rasa Pulau Dewata
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-800 md:text-6xl">
              Jelajahi
              <span className="block text-orange-600">
                Kuliner Khas Bali
              </span>
            </h1>

            <p className="mt-5 max-w-xl leading-relaxed text-gray-600">
              Temukan berbagai makanan khas Bali dengan cita rasa autentik,
              mulai dari Ayam Betutu, Sate Lilit, Nasi Jinggo hingga
              berbagai kuliner tradisional lainnya.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/foods"
                className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white shadow-md transition hover:bg-orange-600"
              >
                Jelajahi Kuliner →
              </Link>

              <Link
                to="/favorites"
                className="rounded-xl border-2 border-red-950 px-6 py-3 font-bold text-red-950 transition hover:bg-red-950 hover:text-white"
              >
                ❤️ Favorit Saya
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-orange-200 shadow-xl md:h-96 md:w-96">
              <div className="text-center">
                <img
                  src={logoBali}
                  alt="Logo BaliRasa"
                  className="mx-auto h-72 w-72 rounded-full mt-17 object-cover shadow-md md:h-96 md:w-96"
                />
                <p className="mt-4 text-2xl font-bold text-red-950">
                  BaliRasa
                </p>
                <p className="text-sm text-gray-600">
                  Authentic Balinese Taste
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Kategori */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="font-semibold text-orange-600">
              Jelajahi
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-800">
              Kategori Kuliner
            </h2>

            <p className="mt-3 text-gray-500">
              Pilih kategori makanan khas Bali yang ingin kamu jelajahi.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl">🍗</div>
              <h3 className="mt-3 font-bold text-gray-800">
                Makanan Utama
              </h3>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl">🍢</div>
              <h3 className="mt-3 font-bold text-gray-800">
                Sate
              </h3>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl">🍚</div>
              <h3 className="mt-3 font-bold text-gray-800">
                Nasi
              </h3>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl">🥗</div>
              <h3 className="mt-3 font-bold text-gray-800">
                Tradisional
              </h3>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-4xl">🥤</div>
              <h3 className="mt-3 font-bold text-gray-800">
                Minuman
              </h3>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-4xl">🌶️</div>
              <h3 className="mt-3 font-bold text-gray-800">
                Sambal
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* Kuliner Populer */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-semibold text-orange-600">
                ⭐ Pilihan Terbaik
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                Kuliner Populer
              </h2>

              <p className="mt-2 text-gray-500">
                Beberapa makanan yang wajib kamu coba.
              </p>
            </div>

            <Link
              to="/foods"
              className="font-semibold text-red-950 hover:text-orange-600"
            >
              Lihat Semua →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-950 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">

          <div className="text-5xl">🌺</div>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Siap Menjelajahi Cita Rasa Bali?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-orange-100">
            Temukan makanan tradisional Bali favoritmu dan simpan ke
            daftar favorit atau keranjang.
          </p>

          <Link
            to="/foods"
            className="mt-8 inline-block rounded-xl bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Mulai Menjelajah
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;
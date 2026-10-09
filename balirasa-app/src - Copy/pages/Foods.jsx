import { useState } from "react";
import FoodCard from "../components/FoodCard";
import foods from "../utils/data";

function Foods() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  // Mengambil kategori yang tersedia
  const categories = [
    "Semua",
    ...new Set(foods.map((food) => food.category)),
  ];

  // Filter makanan
  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "Semua" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="font-semibold text-orange-600">
            🌺 Jelajahi Kuliner Bali
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-800">
            Makanan Khas Bali
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Temukan berbagai makanan tradisional Bali yang kaya akan cita rasa.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-10 rounded-2xl bg-white p-5 shadow-md">

          {/* Search */}
          <div>
            <label
              htmlFor="search"
              className="mb-2 block font-semibold text-gray-700"
            >
              🔎 Cari Makanan
            </label>

            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Contoh: Ayam Betutu..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Category */}
          <div className="mt-5">
            <p className="mb-3 font-semibold text-gray-700">
              🏷️ Kategori
            </p>

            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category === item
                      ? "bg-orange-500 text-white"
                      : "bg-orange-50 text-orange-700 hover:bg-orange-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hasil */}
        <div className="mb-5 flex items-center justify-between">
          <p className="font-semibold text-gray-700">
            Menampilkan {filteredFoods.length} makanan
          </p>

          {(search || category !== "Semua") && (
            <button
              onClick={() => {
                setSearch("");
                setCategory("Semua");
              }}
              className="text-sm font-semibold text-red-800 hover:text-orange-600"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Daftar makanan */}
        {filteredFoods.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <div className="text-6xl">🍽️</div>

            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              Makanan Tidak Ditemukan
            </h2>

            <p className="mt-2 text-gray-500">
              Coba gunakan kata kunci atau kategori yang berbeda.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Foods;
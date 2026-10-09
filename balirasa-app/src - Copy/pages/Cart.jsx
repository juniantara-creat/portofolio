import { Link } from "react-router-dom";
import { useFood } from "../context/FoodContext";

function Cart() {
  const {
    cart,
    updateQty,
    removeFromCart,
  } = useFood();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="font-semibold text-orange-600">
            🛒 BaliRasa
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-800">
            Keranjang Kuliner
          </h1>

          <p className="mt-3 text-gray-600">
            Kelola makanan pilihanmu sebelum melakukan pemesanan.
          </p>
        </div>

        {/* Keranjang kosong */}
        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <div className="text-6xl">🛒</div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              Keranjang Masih Kosong
            </h2>

            <p className="mt-2 text-gray-500">
              Yuk, pilih makanan khas Bali favoritmu!
            </p>

            <Link
              to="/foods"
              className="mt-6 inline-block rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Jelajahi Kuliner
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">

            {/* Daftar makanan */}
            <div className="space-y-4 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow sm:flex-row sm:items-center"
                >

                  {/* Gambar */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-full rounded-xl object-cover sm:w-32"
                  />

                  {/* Informasi */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-orange-600">
                      {item.category}
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="mt-1 font-semibold text-orange-600">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>

                  {/* Jumlah */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQty(item.id, item.qty - 1)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 font-bold hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="w-6 text-center font-bold">
                      {item.qty}
                    </span>

                    <button
                      onClick={() =>
                        updateQty(item.id, item.qty + 1)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-bold text-white hover:bg-orange-600"
                    >
                      +
                    </button>
                  </div>

                  {/* Hapus */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="font-semibold text-red-600 hover:text-red-800"
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>

            {/* Ringkasan */}
            <div className="h-fit rounded-2xl bg-white p-6 shadow">
              <h2 className="text-xl font-bold text-gray-800">
                Ringkasan Pesanan
              </h2>

              <div className="mt-5 flex justify-between border-b pb-4">
                <span className="text-gray-600">
                  Total Item
                </span>

                <span className="font-semibold">
                  {cart.reduce(
                    (total, item) => total + item.qty,
                    0
                  )}
                </span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="text-gray-600">
                  Total Harga
                </span>

                <span className="text-xl font-bold text-orange-600">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>

              {/* Tombol Checkout */}
              <Link
                to="/checkout"
                className="mt-6 block w-full rounded-xl bg-red-950 px-5 py-3 text-center font-bold text-white hover:bg-red-900"
              >
                Lanjut Checkout
              </Link>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
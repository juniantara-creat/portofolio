import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFood } from "../context/FoodContext";

function Checkout() {
  const { cart } = useFood();
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [metode, setMetode] = useState("COD");

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const totalQty = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !alamat || !telepon) {
      alert("Silakan lengkapi data pemesanan.");
      return;
    }

    alert(
      `Pesanan berhasil dibuat!\n\nNama: ${nama}\nTotal: Rp ${totalPrice.toLocaleString(
        "id-ID"
      )}\nMetode: ${metode}`
    );

    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-orange-50 px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 text-center shadow">
          <div className="text-6xl">🛒</div>

          <h1 className="mt-5 text-2xl font-bold text-gray-800">
            Keranjang Masih Kosong
          </h1>

          <p className="mt-2 text-gray-500">
            Tambahkan makanan terlebih dahulu sebelum checkout.
          </p>

          <Link
            to="/foods"
            className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
          >
            Jelajahi Kuliner
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="font-semibold text-orange-600">
            🌺 BaliRasa
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-800">
            Checkout
          </h1>

          <p className="mt-3 text-gray-600">
            Lengkapi data untuk menyelesaikan pesananmu.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800">
              Data Pemesan
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">

              {/* Nama */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>

              {/* Telepon */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Nomor Telepon
                </label>

                <input
                  type="tel"
                  value={telepon}
                  onChange={(e) => setTelepon(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>

              {/* Alamat */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Alamat Pengantaran
                </label>

                <textarea
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Masukkan alamat lengkap"
                  rows="4"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>

              {/* Metode */}
              <div>
                <label className="mb-3 block font-semibold text-gray-700">
                  Metode Pembayaran
                </label>

                <div className="space-y-3">

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4 hover:bg-orange-50">
                    <input
                      type="radio"
                      value="COD"
                      checked={metode === "COD"}
                      onChange={(e) => setMetode(e.target.value)}
                    />

                    <span>
                      💵 Cash On Delivery (COD)
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4 hover:bg-orange-50">
                    <input
                      type="radio"
                      value="Transfer Bank"
                      checked={metode === "Transfer Bank"}
                      onChange={(e) => setMetode(e.target.value)}
                    />

                    <span>
                      🏦 Transfer Bank
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4 hover:bg-orange-50">
                    <input
                      type="radio"
                      value="E-Wallet"
                      checked={metode === "E-Wallet"}
                      onChange={(e) => setMetode(e.target.value)}
                    />

                    <span>
                      📱 E-Wallet
                    </span>
                  </label>

                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                ✅ Buat Pesanan
              </button>

            </form>
          </div>

          {/* Ringkasan */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold text-gray-800">
              Ringkasan Pesanan
            </h2>

            <div className="mt-5 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4 border-b pb-4"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {item.qty} × Rp{" "}
                      {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>

                  <p className="font-semibold text-orange-600">
                    Rp{" "}
                    {(item.price * item.qty).toLocaleString("id-ID")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-between border-b pb-4">
              <span className="text-gray-600">
                Total Item
              </span>

              <span className="font-bold">
                {totalQty}
              </span>
            </div>

            <div className="mt-5 flex justify-between">
              <span className="font-semibold text-gray-700">
                Total Pembayaran
              </span>

              <span className="text-xl font-bold text-orange-600">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
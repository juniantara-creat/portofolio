import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || review.trim() === "") {
      alert("Silakan berikan rating dan review terlebih dahulu.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="mt-10 rounded-2xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold text-gray-800">
        ⭐ Berikan Rating & Review
      </h2>

      <p className="mt-2 text-gray-500">
        Bagikan pengalamanmu terhadap makanan ini.
      </p>

      {/* Rating */}
      <div className="mt-6">
        <p className="mb-2 font-semibold text-gray-700">
          Rating
        </p>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="text-3xl transition hover:scale-110"
            >
              {star <= rating ? "⭐" : "☆"}
            </button>
          ))}
        </div>
      </div>

      {/* Review */}
      <form onSubmit={handleSubmit} className="mt-6">
        <label
          htmlFor="review"
          className="font-semibold text-gray-700"
        >
          Review
        </label>

        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Tulis pendapatmu tentang makanan ini..."
          rows="4"
          className="mt-2 w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-orange-500"
        />

        <button
          type="submit"
          className="mt-4 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
        >
          Kirim Review
        </button>
      </form>

      {/* Hasil */}
      {submitted && (
        <div className="mt-6 rounded-xl bg-orange-50 p-5">
          <p className="font-bold text-gray-800">
            Terima kasih atas review kamu! ❤️
          </p>

          <p className="mt-2">
            Rating: {"⭐".repeat(rating)}
          </p>

          <p className="mt-2 text-gray-600">
            "{review}"
          </p>
        </div>
      )}
    </div>
  );
}

export default Rating;
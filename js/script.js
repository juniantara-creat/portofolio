const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
}


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (nama === "" || email === "" || pesan === "") {

            formMessage.textContent = "Semua kolom harus diisi!";

            formMessage.className =
                "mt-4 text-center text-red-600";

            return;
        }

        formMessage.textContent =
            "Pesan berhasil dikirim. Terima kasih, " + nama + "!";

        formMessage.className =
            "mt-4 text-center text-green-600";

        contactForm.reset();

    });

}


function hitungNilai() {

    const nama =
        document.getElementById("studentName").value.trim();

    const tugas =
        Number(document.getElementById("nilaiTugas").value);

    const uts =
        Number(document.getElementById("nilaiUts").value);

    const uas =
        Number(document.getElementById("nilaiUas").value);


    if (nama === "") {

        alert("Nama mahasiswa harus diisi!");

        return;
    }


    if (
        isNaN(tugas) ||
        isNaN(uts) ||
        isNaN(uas) ||
        tugas < 0 ||
        tugas > 100 ||
        uts < 0 ||
        uts > 100 ||
        uas < 0 ||
        uas > 100
    ) {

        alert("Nilai harus berada antara 0 sampai 100!");

        return;
    }


    const nilaiAkhir =
        (tugas * 0.30) +
        (uts * 0.30) +
        (uas * 0.40);


    let grade;

    if (nilaiAkhir >= 85) {
        grade = "A";
    } else if (nilaiAkhir >= 70) {
        grade = "B";
    } else if (nilaiAkhir >= 55) {
        grade = "C";
    } else if (nilaiAkhir >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }


    let status;

    if (nilaiAkhir >= 55) {
        status = "LULUS";
    } else {
        status = "TIDAK LULUS";
    }


    document.getElementById("hasilNama").textContent =
        "Nama: " + nama;

    document.getElementById("hasilAkhir").textContent =
        "Nilai Akhir: " + nilaiAkhir.toFixed(2);

    document.getElementById("hasilGrade").textContent =
        "Grade: " + grade;

    document.getElementById("hasilStatus").textContent =
        "Status: " + status;

    document.getElementById("hasilNilai")
        .classList.remove("hidden");
}
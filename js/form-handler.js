function initializeFormHandler() {
  const form = document.getElementById("contactEmail");
  if (!form) {
    console.log("⛔ Form #contactEmail tidak ditemukan");
    return;
  }

  console.log("📨 Form ditemukan dan listener aktif");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("🚫 Form submit dicegah");

    const formData = new FormData(form);

    fetch("send-email.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(text => {
      if (text.trim() === "success") {
        alert("Pesan berhasil dikirim!");
        form.reset();
      } else {
        alert("Gagal mengirim pesan.\n" + text);
      }
    })
    .catch(error => {
      alert("Terjadi kesalahan koneksi.");
      console.error(error);
    });
  });
}

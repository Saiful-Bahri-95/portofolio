document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactEmail");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

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
});

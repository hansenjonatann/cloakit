document.getElementById("login-btn").addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Ambil data pengguna dari Local Storage
  let storedUserDataJSON = localStorage.getItem("userData");

  if (storedUserDataJSON) {
    let storedUserData = JSON.parse(storedUserDataJSON);

    if (
      email === storedUserData.email &&
      password === storedUserData.password
    ) {
      alert("Login berhasil!");
    } else {
      alert("Username atau password salah.");
    }
  } else {
    alert("Pengguna tidak ditemukan. Silakan daftar terlebih dahulu.");
  }
});

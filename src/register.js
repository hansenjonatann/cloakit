// Simpan data pengguna saat tombol disubmit
document.getElementById("register-btn").addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Buat objek data pengguna
  let userData = {
    email: email,
    password: password,
  };

  // Konversi objek ke dalam bentuk string JSON
  let userDataJSON = JSON.stringify(userData);

  // Simpan data di Local Storage
  localStorage.setItem("userData", userDataJSON);
  window.location.href = "./login.html";

  alert("Data pengguna telah disimpan di Local Storage");
});

// Ambil data pengguna saat halaman dimuat
window.addEventListener("load", function () {
  let userDataJSON = localStorage.getItem("userData");

  if (userDataJSON) {
    let userData = JSON.parse(userDataJSON);
    document.getElementById("email").value = userData.email;
    document.getElementById("password").value = userData.password;
  }
});

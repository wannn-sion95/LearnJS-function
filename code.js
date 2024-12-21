function inputNama() {
  // Mengecek apakah input nama kosong
  if (document.myform.nama.value == "") {
    // Menampilkan pesan peringatan jika input nama kosong
    alert("Siapa cewek yang lo suka Wannn? Lu harus tulis!");
    return; // Menghentikan fungsi jika input nama kosong
  }

  // Mengambil nilai dari input nama dan mengamankannya
  var lovevalue = escape(document.myform.nama.value);

  // Menampilkan pesan di halaman web dengan nama yang diambil
  document.getElementById("result").innerHTML =
    "<br><br>Wann menyukai seorang wanita bernama: " + lovevalue;
}

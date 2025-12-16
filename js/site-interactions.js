$(function () {
  const layanan = [
    "Kentang digoreng fresh setelah dipesan",
    "Tersedia pembayaran di tempat (COD)",
    "Garansi rasa dan kualitas"
  ];

  const $layananList = $("#layanan-list");
  if ($layananList.length) {
    layanan.forEach((item) => {
      const $li = $('<li class="list-group-item d-flex align-items-center">');
      $li.append('<i class="bi bi-check-circle text-success me-2"></i>');
      $li.append(`<span>${item}</span>`);
      $layananList.append($li);
    });
  }

  const ratingValue = 4.8;
  const totalStars = 5;
  const $ratingText = $("#hasil-rating");
  if ($ratingText.length) {
    $ratingText.text(`${ratingValue.toFixed(1)} / ${totalStars}`);
  }

  const $produkInput = $("#produkInput");
  const $previewProduk = $("#previewProduk");
  const $daftarProduk = $("#daftarProduk");
  const $themePreview = $("#themePreview");

  $produkInput.on("keyup", function () {
    $previewProduk.text($(this).val());
  });

  $("#tambahBtn").on("click", function (e) {
    const namaProduk = $produkInput.val().trim();
    e.preventDefault();
    if (!namaProduk) return;

    const $item = $('<li class="list-group-item d-flex justify-content-between align-items-center">');
    $item.text(namaProduk);
    $item.append('<span class="badge text-bg-light text-dark">Wishlist</span>');

    $item.on("mouseenter", () => $item.addClass("shadow-sm"));
    $item.on("mouseleave", () => $item.removeClass("shadow-sm"));
    $item.on("dblclick", () => $item.fadeOut(200, () => $item.remove()));

    $daftarProduk.append($item.hide());
    $item.slideDown(180);
    $produkInput.val("");
    $previewProduk.text("");
  });

  $("#temaSelect").on("change", function () {
    const warna = $(this).val();
    $("body").css("background-color", warna);
    $themePreview.css("background-color", warna).text(`Tema diubah ke ${warna}`);
  });

  $(".gallery-figure").on("mouseenter", function () {
    $(this).addClass("shadow-lg");
  }).on("mouseleave", function () {
    $(this).removeClass("shadow-lg");
  });

  const $toastContainer = $('<div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1060"></div>');
  if (!$(".toast-container").length) {
    $("body").append($toastContainer);
  }

  $("#btnAmbilPromo").on("click", function () {
    const $toast = $('<div class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">\
      <div class="d-flex">\
        <div class="toast-body">Kode promo PAKETKRIUK15 siap digunakan!</div>\
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>\
      </div>\
    </div>');
    $(".toast-container").append($toast);
    const toast = new bootstrap.Toast($toast[0], { delay: 2500 });
    toast.show();
  });

  const $formPemesanan = $("#formPemesanan");
  if ($formPemesanan.length) {
    $formPemesanan.on("submit", function (e) {
      e.preventDefault();
      const nama = $("#namaProduk").val().trim();
      const jumlah = Number($("#jumlah").val());
      const catatan = $("#catatan").val().trim();
      if (!nama || !jumlah || jumlah <= 0) {
        alert("Nama produk dan jumlah harus diisi dengan benar.");
        return;
      }
      const summary = `${jumlah} x ${nama}${catatan ? " — " + catatan : ""}`;
      $("#orderSummary").text(summary);
      const modalEl = document.getElementById("orderModal");
      if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      }
      this.reset();
      $("#themePreview").text("Preview tema akan muncul di sini.").css("background-color", "transparent");
    });
  }
});

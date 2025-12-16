import { formatPesan } from "./utils.js";

$(function () {
    const $form = $("#formKontak");
    if (!$form.length) return;

    const $errorMsg = $("#errorMsg");
    const fields = {
        nama: $("#nama"),
        email: $("#email"),
        kategori: $("#kategori"),
        pesan: $("#pesan")
    };

    const resetState = () => {
        $errorMsg.addClass("d-none").removeClass("alert alert-success alert-danger").text("");
        Object.values(fields).forEach(($field) => $field.removeClass("is-invalid"));
        $("#errorNama, #errorEmail, #errorKategori, #errorPesan").text("");
    };

    $form.on("submit", (e) => {
        e.preventDefault();
        resetState();

        let valid = true;
        if (!fields.nama.val().trim()) {
            $("#errorNama").text("Nama wajib diisi.");
            fields.nama.addClass("is-invalid");
            valid = false;
        }
        if (!fields.email.val().trim()) {
            $("#errorEmail").text("Email wajib diisi.");
            fields.email.addClass("is-invalid");
            valid = false;
        }
        if (!fields.kategori.val()) {
            $("#errorKategori").text("Pilih kategori pesan.");
            fields.kategori.addClass("is-invalid");
            valid = false;
        }
        if (!fields.pesan.val().trim()) {
            $("#errorPesan").text("Pesan tidak boleh kosong.");
            fields.pesan.addClass("is-invalid");
            valid = false;
        }

        if (!valid) {
            $errorMsg.removeClass("d-none").addClass("alert alert-danger").text("Periksa kembali data yang belum lengkap.");
            return;
        }

        const hasil = formatPesan(fields.nama.val(), fields.kategori.val(), fields.pesan.val());
        $errorMsg.removeClass("d-none alert-danger").addClass("alert alert-success").text(hasil);
        $form[0].reset();
    });
});
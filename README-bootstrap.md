# Kentang Goreng Kriuk – Bootstrap Refresh

## Ringkasan
- Semua halaman dimigrasikan ke Bootstrap 5.3 untuk layout, tipografi, dan utilitas.
- Komponen digunakan lintas halaman: Navbar, Carousel, Cards, Alerts/Toast, Table, Accordion, Modal, Badge/Progress.
- jQuery dipakai untuk interaksi cepat di form, promo, wishlist, dan galeri.

## Komponen Bootstrap yang dipakai
- Navbar dengan toggler mobile (semua halaman).
- Carousel hero (index.html) dan alert promo yang bisa ditutup.
- Cards untuk profil, testimoni, galeri, dan konten audio/video.
- Table terformat untuk daftar produk (produk.html).
- Accordion untuk tahapan produksi (tentang.html).
- Modal konfirmasi pesanan (produk.html).
- Toast untuk promo, newsletter, dan notifikasi instan.
- Progress bar & badges untuk highlight performa produk.

## Interaksi jQuery yang ditambahkan
- Promo: tombol `#btnAmbilPromo` memicu toast kode voucher.
- Wishlist produk: `#tambahBtn` menambah item dengan animasi hover/double click untuk hapus; `#produkInput` menampilkan preview live.
- Tema: `#temaSelect` mengganti warna background + preview.
- Form pemesanan: `#formPemesanan` divalidasi lalu menampilkan `#orderModal` dengan ringkasan pesanan.
- Form kontak: validasi berbasis jQuery di `form.js` dengan feedback Bootstrap.
- Newsletter checkbox `#langganan` menampilkan toast status berlangganan.
- Galeri: hover pada `.gallery-figure` menambah efek bayangan.

## Cara mencoba
1. Buka salah satu halaman HTML di browser modern; CDN Bootstrap/jQuery sudah terhubung.
2. Coba tombol promo di beranda, form pemesanan di produk, dan form kontak untuk melihat toast/modal.
3. Gunakan dropdown tema dan wishlist di produk untuk mencoba interaksi jQuery lainnya.

## Manfaat perubahan
- Layout responsif tanpa CSS manual berlebih berkat grid & utilitas Bootstrap.
- Konsistensi komponen (navbar, card, alert) mempercepat pengembangan fitur baru.
- Interaksi jQuery meningkatkan pengalaman pengguna (validasi cepat, notifikasi instan, hover state).
- Kode lebih terstruktur dengan pemisahan skrip interaksi (`js/site-interactions.js`, `js/form.js`, `js/newslatter.js`) dan styling global (`style.css/custom.css`).

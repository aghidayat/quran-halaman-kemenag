# Mushaf Digital React

Mushaf Digital adalah aplikasi web progresif (PWA) yang dirancang untuk memberikan pengalaman membaca Al-Qur'an secara digital dengan nuansa layaknya memegang mushaf fisik. Aplikasi ini fokus pada kenyamanan visual dan tata letak yang menyerupai standar cetakan kitab suci, memberikan pengalaman spiritual yang lebih mendalam saat bertadarus.

## Branding & Konsep
Aplikasi ini mengusung konsep **"Digital Mushaf"**. Fokus utama kami adalah:
*   **Tata Letak Fisik**: Menampilkan halaman secara berdampingan (*dual-page spread*) layaknya membuka buku fisik.
*   **Aura Klasik-Modern**: Menggunakan latar belakang kertas *cream* (khas mushaf) dipadukan dengan antarmuka yang bersih dan intuitif.
*   **Kenyamanan Membaca**: Tipografi yang disesuaikan agar enak dipandang dalam durasi yang lama.

## Fitur Utama

- **Tampilan Spread (Dual-Page)**: Navigasi halaman yang menyerupai mushaf fisik, dengan arah baca kanan-ke-kiri (RTL).
- **Muratal per Surah**: Dengarkan lantunan ayat suci dari Mishary Rashid Alafasy langsung dari aplikasi dengan dukungan audio yang terus berjalan meski Anda berpindah halaman.
- **Navigasi Surah Cepat**: Pencarian surah yang mudah dengan modal *live search* (nama Arab & Latin).
- **Lanjut Membaca**: Fitur *bookmark* otomatis yang menyimpan posisi bacaan terakhir Anda di *local storage*.
- **Offline Ready**: Dibangun sebagai PWA, sehingga dapat diakses tanpa koneksi internet setelah pemuatan pertama.
- **Ringan & Cepat**: Dibangun dengan React JS dan Tailwind CSS untuk performa yang optimal.

## Teknologi

- **Framework**: React JS
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel

## Cara Memulai

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/).

### Instalasi
1. Clone repository ini:
   ```bash
   git clone https://github.com/aghidayat/quran-halaman-kemenag.git
   cd quran-halaman-kemenag
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan aplikasi di mode development:
   ```bash
   npm run dev
   ```

### Deployment
Untuk melakukan pembaruan versi dan deployment otomatis:
```bash
npm run deploy
```
Perintah ini akan menaikkan versi project, melakukan build, dan memicu deployment di Vercel secara otomatis.

## Kontribusi
Kami sangat terbuka untuk kontribusi dalam pengembangan Mushaf Digital ini. Silakan buat *pull request* untuk fitur atau perbaikan bug yang Anda temukan.

---
*Dikembangkan dengan semangat tadarus.*

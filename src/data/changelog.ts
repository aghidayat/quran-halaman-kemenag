export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "0.0.4",
    date: "2026-05-13",
    changes: [
      "Perbaikan bug: Audio tetap berjalan saat pindah surah",
      "Penambahan teks label 'Play'/'Stop' pada tombol kontrol audio"
    ]
  },
  {
    version: "0.0.3",
    date: "2026-05-13",
    changes: [
      "Penambahan fitur Muratal (audio) per Surah",
      "Integrasi API Al-Quran Cloud untuk streaming audio",
      "Indikator loading dan visual feedback playback di header",
      "Penghentian otomatis audio saat berpindah surah"
    ]
  },
  {
    version: "0.0.2",
    date: "2026-05-13",
    changes: [
      "Migrasi ke React JS dengan Tailwind CSS",
      "Implementasi Dual-Page Paging (RTL)",
      "Fitur pencarian Surah dan input nomor halaman",
      "PWA support dan offline mode",
      "Penambahan script auto-deploy ke Vercel",
      "Penambahan fitur Changelog"
    ]
  },
  {
    version: "0.0.1",
    date: "2026-05-12",
    changes: [
      "Inisialisasi project",
      "Setup struktur folder dan aset"
    ]
  }
];

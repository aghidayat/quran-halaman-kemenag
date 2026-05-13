import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Bookmark, Search, BookOpen } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { version } from '../package.json';
import { CHANGELOG } from './data/changelog';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NUM_IMAGES = 604;
const BASE_URL = '/images/QK_';

const SURAHS = [
  { id: 1, name: "Al-Fatihah", nameAr: "الفاتحة", page: 1 },
  { id: 2, name: "Al-Baqarah", nameAr: "البقرة", page: 2 },
  { id: 3, name: "Ali 'Imran", nameAr: "آل عمران", page: 50 },
  { id: 4, name: "An-Nisa'", nameAr: "النساء", page: 77 },
  { id: 5, name: "Al-Ma'idah", nameAr: "المائدة", page: 106 },
  { id: 6, name: "Al-An'am", nameAr: "الأنعام", page: 128 },
  { id: 7, name: "Al-A'raf", nameAr: "الأعراف", page: 151 },
  { id: 8, name: "Al-Anfal", nameAr: "الأنفال", page: 177 },
  { id: 9, name: "At-Tawbah", nameAr: "التوبة", page: 187 },
  { id: 10, name: "Yunus", nameAr: "يونس", page: 208 },
  { id: 11, name: "Hud", nameAr: "هود", page: 221 },
  { id: 12, name: "Yusuf", nameAr: "يوسف", page: 235 },
  { id: 13, name: "Ar-Ra'd", nameAr: "الرعد", page: 249 },
  { id: 14, name: "Ibrahim", nameAr: "إبراهيم", page: 255 },
  { id: 15, name: "Al-Hijr", nameAr: "الحجر", page: 262 },
  { id: 16, name: "An-Nahl", nameAr: "النحل", page: 267 },
  { id: 17, name: "Al-Isra'", nameAr: "الإسراء", page: 282 },
  { id: 18, name: "Al-Kahf", nameAr: "الكهف", page: 293 },
  { id: 19, name: "Maryam", nameAr: "مريم", page: 305 },
  { id: 20, name: "Ta-Ha", nameAr: "طه", page: 312 },
  { id: 21, name: "Al-Anbiya'", nameAr: "الأنبياء", page: 322 },
  { id: 22, name: "Al-Hajj", nameAr: "الحج", page: 332 },
  { id: 23, name: "Al-Mu'minun", nameAr: "المؤمنون", page: 342 },
  { id: 24, name: "An-Nur", nameAr: "النور", page: 350 },
  { id: 25, name: "Al-Furqan", nameAr: "الفرقان", page: 359 },
  { id: 26, name: "Asy-Syu'ara'", nameAr: "الشعراء", page: 367 },
  { id: 27, name: "An-Naml", nameAr: "النمل", page: 377 },
  { id: 28, name: "Al-Qashash", nameAr: "القصص", page: 385 },
  { id: 29, name: "Al-'Ankabut", nameAr: "العنكبوت", page: 396 },
  { id: 30, name: "Ar-Rum", nameAr: "الروم", page: 404 },
  { id: 31, name: "Luqman", nameAr: "لقمان", page: 411 },
  { id: 32, name: "As-Sajdah", nameAr: "السجدة", page: 415 },
  { id: 33, name: "Al-Ahzab", nameAr: "الأحزاب", page: 418 },
  { id: 34, name: "Saba'", nameAr: "سبإ", page: 428 },
  { id: 35, name: "Fathir", nameAr: "فاطر", page: 434 },
  { id: 36, name: "Ya-Sin", nameAr: "يس", page: 440 },
  { id: 37, name: "Ash-Shaffat", nameAr: "الصافات", page: 446 },
  { id: 38, name: "Shad", nameAr: "ص", page: 453 },
  { id: 39, name: "Az-Zumar", nameAr: "الزمر", page: 458 },
  { id: 40, name: "Ghafir", nameAr: "غافر", page: 467 },
  { id: 41, name: "Fushshilat", nameAr: "فصلت", page: 477 },
  { id: 42, name: "Asy-Syura", nameAr: "الشورى", page: 483 },
  { id: 43, name: "Az-Zukhruf", nameAr: "الزخرف", page: 489 },
  { id: 44, name: "Ad-Dukhan", nameAr: "الدخان", page: 496 },
  { id: 45, name: "Al-Jatsiyah", nameAr: "الجاثية", page: 499 },
  { id: 46, name: "Al-Ahqaf", nameAr: "الأحقاف", page: 502 },
  { id: 47, name: "Muhammad", nameAr: "محمد", page: 507 },
  { id: 48, name: "Al-Fath", nameAr: "الفتح", page: 511 },
  { id: 49, name: "Al-Hujurat", nameAr: "الحجرات", page: 515 },
  { id: 50, name: "Qaf", nameAr: "ق", page: 518 },
  { id: 51, name: "Adz-Dzariyat", nameAr: "الذاريات", page: 520 },
  { id: 52, name: "Ath-Thur", nameAr: "الطور", page: 523 },
  { id: 53, name: "An-Najm", nameAr: "النجم", page: 526 },
  { id: 54, name: "Al-Qamar", nameAr: "القمر", page: 528 },
  { id: 55, name: "Ar-Rahman", nameAr: "الرحمن", page: 531 },
  { id: 56, name: "Al-Waqi'ah", nameAr: "الواقعة", page: 534 },
  { id: 57, name: "Al-Hadid", nameAr: "الحديد", page: 537 },
  { id: 58, name: "Al-Mujadalah", nameAr: "المجادلة", page: 542 },
  { id: 59, name: "Al-Hasyr", nameAr: "الحشر", page: 545 },
  { id: 60, name: "Al-Mumtahanah", nameAr: "الممتحنة", page: 549 },
  { id: 61, name: "Ash-Shaff", nameAr: "الصف", page: 551 },
  { id: 62, name: "Al-Jumu'ah", nameAr: "الجمعة", page: 553 },
  { id: 63, name: "Al-Munafiqun", nameAr: "المنافقون", page: 554 },
  { id: 64, name: "At-Taghabun", nameAr: "التغابن", page: 556 },
  { id: 65, name: "Ath-Thalaq", nameAr: "الطلاق", page: 558 },
  { id: 66, name: "At-Tahrim", nameAr: "التحريم", page: 560 },
  { id: 67, name: "Al-Mulk", nameAr: "الملك", page: 562 },
  { id: 68, name: "Al-Qalam", nameAr: "القلم", page: 564 },
  { id: 69, name: "Al-Haqqah", nameAr: "الحاقة", page: 566 },
  { id: 70, name: "Al-Ma'arij", nameAr: "المعارج", page: 568 },
  { id: 71, name: "Nuh", nameAr: "نوح", page: 570 },
  { id: 72, name: "Al-Jinn", nameAr: "الجن", page: 572 },
  { id: 73, name: "Al-Muzzammil", nameAr: "المزمل", page: 574 },
  { id: 74, name: "Al-Muddatstsir", nameAr: "المدثر", page: 575 },
  { id: 75, name: "Al-Qiyamah", nameAr: "القيامة", page: 577 },
  { id: 76, name: "Al-Insan", nameAr: "الإنسان", page: 578 },
  { id: 77, name: "Al-Mursalat", nameAr: "المرسلات", page: 580 },
  { id: 78, name: "An-Naba'", nameAr: "النبإ", page: 582 },
  { id: 79, name: "An-Nazi'at", nameAr: "النازعات", page: 583 },
  { id: 80, name: "'Abasa", nameAr: "عبس", page: 585 },
  { id: 81, name: "At-Takwir", nameAr: "التكوير", page: 586 },
  { id: 82, name: "Al-Infitar", nameAr: "الانفطار", page: 587 },
  { id: 83, name: "Al-Muthaffifin", nameAr: "المطففين", page: 587 },
  { id: 84, name: "Al-Insyiqaq", nameAr: "الانشقاق", page: 589 },
  { id: 85, name: "Al-Buruj", nameAr: "البروج", page: 590 },
  { id: 86, name: "Ath-Thariq", nameAr: "الطارق", page: 591 },
  { id: 87, name: "Al-A'la", nameAr: "الأعلى", page: 591 },
  { id: 88, name: "Al-Ghasyiyah", nameAr: "الغاشية", page: 592 },
  { id: 89, name: "Al-Fajr", nameAr: "الفجر", page: 593 },
  { id: 90, name: "Al-Balad", nameAr: "البلد", page: 594 },
  { id: 91, name: "Asy-Syams", nameAr: "الشمس", page: 595 },
  { id: 92, name: "Al-Layl", nameAr: "الليل", page: 595 },
  { id: 93, name: "Adh-Dhuha", nameAr: "الضحى", page: 596 },
  { id: 94, name: "Asy-Syarh", nameAr: "الشرح", page: 596 },
  { id: 95, name: "At-Tin", nameAr: "التين", page: 597 },
  { id: 96, name: "Al-'Alaq", nameAr: "العلق", page: 597 },
  { id: 97, name: "Al-Qadr", nameAr: "القدر", page: 598 },
  { id: 98, name: "Al-Bayyinah", nameAr: "البينة", page: 598 },
  { id: 99, name: "Az-Zalzalah", nameAr: "الزلزلة", page: 599 },
  { id: 100, name: "Al-'Adiyat", nameAr: "العاديات", page: 599 },
  { id: 101, name: "Al-Qari'ah", nameAr: "القارعة", page: 600 },
  { id: 102, name: "At-Takatsur", nameAr: "التكاثر", page: 600 },
  { id: 103, name: "Al-'Ashr", nameAr: "العصر", page: 601 },
  { id: 104, name: "Al-Humazah", nameAr: "الهمزة", page: 601 },
  { id: 105, name: "Al-Fil", nameAr: "الفيل", page: 601 },
  { id: 106, name: "Quraisy", nameAr: "قريش", page: 602 },
  { id: 107, name: "Al-Ma'un", nameAr: "الماعون", page: 602 },
  { id: 108, name: "Al-Kautsar", nameAr: "الكوثر", page: 602 },
  { id: 109, name: "Al-Kafirun", nameAr: "الكافرون", page: 603 },
  { id: 110, name: "An-Nashr", nameAr: "النصر", page: 603 },
  { id: 111, name: "Al-Lahab", nameAr: "المسد", page: 603 },
  { id: 112, name: "Al-Ikhlash", nameAr: "الإخلاص", page: 604 },
  { id: 113, name: "Al-Falaq", nameAr: "الفلق", page: 604 },
  { id: 114, name: "An-Nas", nameAr: "الناس", page: 604 },
];

const App = () => {
  // We represent the current state by the right-hand page (always odd)
  // Spread: [Page n+1 (Left), Page n (Right)]
  const [rightPage, setRightPage] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const [lastRead, setLastRead] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('lastRead');
    if (saved) {
      setLastRead(parseInt(saved));
      const page = parseInt(saved);
      // If even, the right page is page-1
      setRightPage(page % 2 === 0 ? page - 1 : page);
    }
  }, []);

  const saveToLastRead = (page: number) => {
    localStorage.setItem('lastRead', page.toString());
    setLastRead(page);
  };

  const getPageUrl = (n: number) => {
    if (n < 1 || n > NUM_IMAGES) return null;
    return `${BASE_URL}${String(n).padStart(3, '0')}.webp`;
  };

  const nextSpread = () => {
    if (rightPage + 2 <= NUM_IMAGES) {
      setRightPage(rightPage + 2);
    }
  };

  const prevSpread = () => {
    if (rightPage - 2 >= 1) {
      setRightPage(rightPage - 2);
    }
  };

  const goToPage = (page: number) => {
    const targetRight = page % 2 === 0 ? page - 1 : page;
    setRightPage(Math.min(Math.max(1, targetRight), NUM_IMAGES));
    setShowSearch(false);
  };

  const currentSpread = useMemo(() => {
    return [rightPage + 1 <= NUM_IMAGES ? rightPage + 1 : null, rightPage];
  }, [rightPage]);

  const [searchQuery, setSearchQuery] = useState('');
  const [inputPage, setInputPage] = useState('');

  const filteredSurahs = useMemo(() => {
    return SURAHS.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.nameAr.includes(searchQuery)
    );
  }, [searchQuery]);

  const handlePageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseInt(inputPage);
    if (!isNaN(p) && p >= 1 && p <= NUM_IMAGES) {
      goToPage(p);
      setInputPage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[#e5e1da] px-4 py-2 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-amber-600 p-1.5 rounded-lg shadow-sm">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold text-[#2c3e50] hidden sm:block">Al-Quran Digital</h1>
          </div>

          <div className="flex-1 max-w-md hidden md:flex items-center gap-2 bg-gray-100/50 border border-gray-200 rounded-full px-3 py-1.5 focus-within:ring-2 focus-within:ring-amber-500/20 focus-within:border-amber-500 transition-all">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari Surah..." 
              className="bg-transparent border-none outline-none text-sm w-full"
              onClick={() => setShowSearch(true)}
              readOnly
            />
          </div>

          <div className="flex items-center gap-3">
            <form onSubmit={handlePageSubmit} className="flex items-center gap-1">
              <input 
                type="number" 
                placeholder="Hal"
                value={inputPage}
                onChange={(e) => setInputPage(e.target.value)}
                className="w-14 sm:w-16 px-2 py-1.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-amber-500 transition-colors"
                min="1"
                max={604}
              />
              <button type="submit" className="p-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-sm">
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
            
            <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block"></div>

            <button 
              onClick={() => setShowSearch(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {lastRead && (
              <button 
                onClick={() => goToPage(lastRead)}
                className="flex items-center gap-1.5 text-xs font-semibold bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full border border-amber-200 hover:bg-amber-100 transition-colors"
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
                <span className="hidden xs:inline">Terakhir: </span>{lastRead}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-4">
          
          {/* Navigation Buttons (Desktop Side) */}
          <button 
            onClick={nextSpread}
            disabled={rightPage + 1 >= NUM_IMAGES}
            className="hidden md:flex items-center justify-center w-12 h-32 rounded-xl hover:bg-black/5 disabled:opacity-0 transition-all group"
            title="Halaman Berikutnya (Kiri)"
          >
            <ChevronLeft className="w-8 h-8 text-gray-400 group-hover:text-amber-600 transition-colors" />
          </button>

          {/* Spread Container */}
          <div className="flex flex-row items-start justify-center flex-1 gap-2 md:gap-6">
            {currentSpread.map((p, idx) => (
              p ? (
                <div 
                  key={p} 
                  className={cn(
                    "relative flex-1 max-w-[500px] transition-all duration-300",
                    "group cursor-pointer"
                  )}
                  onClick={() => saveToLastRead(p)}
                >
                  <div className="quran-image bg-white rounded-lg overflow-hidden relative">
                    <img 
                      src={getPageUrl(p)!} 
                      alt={`Halaman ${p}`}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                    {/* Page Number Label (Integrated Style) */}
                    <div className="absolute bottom-0 left-0 right-0 py-2 bg-gradient-to-t from-black/5 to-transparent text-center">
                       <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em]">HALAMAN {p}</span>
                    </div>
                  </div>
                  
                  {/* Bookmark Indicator */}
                  <div className={cn(
                    "absolute -top-1 right-4 transition-all duration-300",
                    lastRead === p ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                  )}>
                    <div className={cn(
                      "w-6 h-8 flex items-center justify-center rounded-b-md shadow-sm",
                      lastRead === p ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-400"
                    )}>
                      <Bookmark className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
              ) : (
                <div key={`empty-${idx}`} className="flex-1 max-w-[500px] hidden md:block" />
              )
            ))}
          </div>

          <button 
            onClick={prevSpread}
            disabled={rightPage === 1}
            className="hidden md:flex items-center justify-center w-12 h-32 rounded-xl hover:bg-black/5 disabled:opacity-0 transition-all group"
            title="Halaman Sebelumnya (Kanan)"
          >
            <ChevronRight className="w-8 h-8 text-gray-400 group-hover:text-amber-600 transition-colors" />
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="mt-8 flex md:hidden items-center gap-12">
          <button 
            onClick={nextSpread}
            disabled={rightPage + 1 >= NUM_IMAGES}
            className="flex flex-col items-center gap-1 group"
          >
            <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm active:scale-95 transition-transform">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Berikutnya</span>
          </button>
          
          <button 
            onClick={prevSpread}
            disabled={rightPage === 1}
            className="flex flex-col items-center gap-1 group"
          >
            <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm active:scale-95 transition-transform">
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Sebelumnya</span>
          </button>
        </div>
      </main>

      {/* Surah Selector Modal */}
      {showSearch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Cari Surah</h2>
                <button 
                  onClick={() => setShowSearch(false)} 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Search className="w-5 h-5 rotate-45 text-gray-400" /> {/* Simulating a close icon if needed, but let's just use text/simple cross */}
                  <span className="sr-only">Tutup</span>
                  <div className="w-5 h-5 flex items-center justify-center text-xl">×</div>
                </button>
              </div>
              
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Ketik nama surah..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent focus:border-amber-500 focus:bg-white rounded-2xl outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              <div className="grid grid-cols-1 gap-2">
                {filteredSurahs.map(s => (
                  <button
                    key={s.id}
                    onClick={() => {
                      goToPage(s.page);
                      setSearchQuery('');
                    }}
                    className="flex items-center justify-between p-4 hover:bg-amber-50 rounded-2xl transition-all group text-left border border-transparent hover:border-amber-100"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-500 rounded-xl text-xs font-bold group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        {s.id}
                      </span>
                      <div>
                        <div className="font-bold text-gray-800">{s.name}</div>
                        <div className="text-xs text-gray-400 font-medium">Halaman {s.page}</div>
                      </div>
                    </div>
                    <div className="font-arabic text-2xl text-amber-800 group-hover:scale-110 transition-transform">
                      {s.nameAr}
                    </div>
                  </button>
                ))}
                {filteredSurahs.length === 0 && (
                  <div className="py-12 text-center">
                    <div className="text-gray-300 mb-2">
                      <Search className="w-12 h-12 mx-auto opacity-20" />
                    </div>
                    <p className="text-gray-400 font-medium">Surah tidak ditemukan</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Backdrop closer */}
          <div className="absolute inset-0 -z-10" onClick={() => setShowSearch(false)} />
        </div>
      )}

      {/* Changelog Modal */}
      {showChangelog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowChangelog(false)}>
          <div 
            className="bg-white w-full max-w-md rounded-3xl shadow-2xl flex flex-col max-h-[70vh] overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Riwayat Perubahan</h2>
              <button onClick={() => setShowChangelog(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              <div className="space-y-8">
                {CHANGELOG.map((entry, i) => (
                  <div key={entry.version} className="relative pl-6 border-l-2 border-amber-100 last:border-0 pb-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-sm" />
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-bold text-amber-700">v{entry.version}</span>
                      <span className="text-[10px] text-gray-400 font-medium">{entry.date}</span>
                    </div>
                    <ul className="space-y-2">
                      {entry.changes.map((change, j) => (
                        <li key={j} className="text-sm text-gray-600 flex gap-2">
                          <span className="text-amber-400 mt-1">•</span>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Version */}
      <footer className="py-2 text-center">
        <button 
          onClick={() => setShowChangelog(true)}
          className="text-[10px] text-gray-300 font-mono tracking-tighter hover:text-amber-500 transition-colors"
        >
          v{version}
        </button>
      </footer>

      {/* CSS for custom scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e1da;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1cdc4;
        }
      `}} />
    </div>
  );
};

export default App;

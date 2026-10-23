import { Question } from '../types';

// High quality educational SVG Visual Assets for Matematika Kelas 3 SD - Pengukuran Panjang & Berat
const SVG_ICONS = {
  // Tangga Konversi Satuan Panjang (km, hm, dam, m, dm, cm, mm)
  tanggaSatuanPanjang: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 220" width="100%" height="100%">
      <rect width="620" height="220" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="310" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Tangga Satuan Baku Panjang (km s.d. mm)</text>
      
      <!-- Anak Tangga km -> mm -->
      <rect x="25" y="40" width="55" height="26" rx="5" fill="#3b82f6"/>
      <text x="52.5" y="58" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">km</text>
      
      <rect x="75" y="62" width="55" height="26" rx="5" fill="#2563eb"/>
      <text x="102.5" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">hm</text>
      
      <rect x="125" y="84" width="55" height="26" rx="5" fill="#1d4ed8"/>
      <text x="152.5" y="102" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">dam</text>
      
      <rect x="175" y="106" width="60" height="28" rx="6" fill="#10b981" stroke="#047857" stroke-width="2"/>
      <text x="205" y="125" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">m</text>
      
      <rect x="230" y="130" width="55" height="26" rx="5" fill="#0284c7"/>
      <text x="257.5" y="148" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">dm</text>
      
      <rect x="280" y="152" width="60" height="28" rx="6" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
      <text x="310" y="171" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">cm</text>
      
      <rect x="335" y="174" width="55" height="26" rx="5" fill="#64748b"/>
      <text x="362.5" y="192" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">mm</text>
      
      <!-- Penjelasan Aturan Konversi -->
      <g transform="translate(405, 42)">
        <rect width="195" height="158" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
        <text x="97.5" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Kunci Konversi:</text>
        <line x1="15" y1="30" x2="180" y2="30" stroke="#bfdbfe"/>
        
        <text x="15" y="48" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d">⬇ Turun 1 tangga = × 10</text>
        <text x="15" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">⬆ Naik 1 tangga = : 10</text>
        
        <line x1="15" y1="76" x2="180" y2="76" stroke="#bfdbfe"/>
        <text x="15" y="94" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">• 1 m = 100 cm</text>
        <text x="15" y="112" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">• 1 km = 1.000 m</text>
        <text x="15" y="130" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">• 1 cm = 10 mm</text>
        <text x="15" y="148" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e3a8a">• 1 m = 1.000 mm</text>
      </g>
    </svg>
  `)}`,

  // Bagan Ragam Alat Ukur Panjang
  alatUkurPanjang: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 190" width="100%" height="100%">
      <rect width="600" height="190" rx="16" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
      <text x="300" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Macam-Macam Alat Ukur Baku Panjang</text>
      
      <!-- 1. Penggaris / Mistar -->
      <g transform="translate(15, 38)">
        <rect width="135" height="135" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">📏</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">PENGGARIS</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">(MISTAR 30 cm)</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#bbf7d0"/>
        <text x="67.5" y="95" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Mengukur benda</text>
        <text x="67.5" y="110" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">pendek: pensil, buku,</text>
        <text x="67.5" y="125" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">penghapus di kelas</text>
      </g>
      
      <!-- 2. Meteran Pita / Jahit -->
      <g transform="translate(160, 38)">
        <rect width="135" height="135" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🧵📐</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">METERAN PITA</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#1e40af" text-anchor="middle">(METERAN KAIN)</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#bfdbfe"/>
        <text x="67.5" y="95" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">Bahan lentur,</text>
        <text x="67.5" y="110" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">mengukur kain dan</text>
        <text x="67.5" y="125" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">lingkar badan baju</text>
      </g>
      
      <!-- 3. Meteran Rol Saku / Tukang -->
      <g transform="translate(305, 38)">
        <rect width="135" height="135" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🧰🛠️</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">METERAN SAKU</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#a16207" text-anchor="middle">(ROL TUKANG)</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#fef08a"/>
        <text x="67.5" y="95" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">Pita baja gulung,</text>
        <text x="67.5" y="110" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">mengukur pintu, meja,</text>
        <text x="67.5" y="125" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">dan ruangan kelas</text>
      </g>
      
      <!-- 4. Meteran Rol Besar / Tanah -->
      <g transform="translate(450, 38)">
        <rect width="135" height="135" rx="10" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🏟️⛳</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#be185d" text-anchor="middle">METERAN ROL</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#db2777" text-anchor="middle">(METERAN TANAH)</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#fbcfe8"/>
        <text x="67.5" y="95" font-family="sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">Panjang 20 - 50 m,</text>
        <text x="67.5" y="110" font-family="sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">mengukur lapangan,</text>
        <text x="67.5" y="125" font-family="sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">halaman, atau tanah</text>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Pengukuran Pensil dengan Mistar (0 cm s.d. 12 cm)
  penggarisPensil: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 170" width="100%" height="100%">
      <rect width="600" height="170" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="300" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Pengukuran Panjang Pensil Menggunakan Penggaris</text>
      
      <g transform="translate(60, 42)">
        <rect x="0" y="10" width="320" height="22" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
        <line x1="0" y1="17" x2="320" y2="17" stroke="#fbbf24" stroke-width="2"/>
        <line x1="0" y1="25" x2="320" y2="25" stroke="#d97706" stroke-width="1.5"/>
        <polygon points="320,10 360,21 320,32" fill="#fed7aa" stroke="#ca8a04" stroke-width="1"/>
        <polygon points="350,18.5 360,21 350,23.5" fill="#1e293b"/>
        <rect x="-16" y="10" width="16" height="22" rx="3" fill="#f43f5e"/>
        <rect x="-4" y="9" width="6" height="24" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
      </g>

      <line x1="60" y1="36" x2="60" y2="82" stroke="#2563eb" stroke-dasharray="3,3" stroke-width="1.5"/>
      <line x1="420" y1="36" x2="420" y2="82" stroke="#dc2626" stroke-dasharray="3,3" stroke-width="1.5"/>
      <text x="60" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">Pangkal = 0 cm</text>
      <text x="420" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">Ujung = 12 cm</text>

      <rect x="40" y="90" width="520" height="60" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      
      <line x1="60" y1="90" x2="60" y2="114" stroke="#854d0e" stroke-width="2.5"/>
      <text x="60" y="132" font-family="sans-serif" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">0</text>
      <line x1="90" y1="90" x2="90" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="90" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">1</text>
      <line x1="120" y1="90" x2="120" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="120" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">2</text>
      <line x1="150" y1="90" x2="150" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="150" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">3</text>
      <line x1="180" y1="90" x2="180" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="180" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">4</text>
      <line x1="210" y1="90" x2="210" y2="114" stroke="#854d0e" stroke-width="2"/>
      <text x="210" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">5</text>
      <line x1="240" y1="90" x2="240" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="240" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">6</text>
      <line x1="270" y1="90" x2="270" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="270" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">7</text>
      <line x1="300" y1="90" x2="300" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="300" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">8</text>
      <line x1="330" y1="90" x2="330" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="330" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">9</text>
      <line x1="360" y1="90" x2="360" y2="114" stroke="#854d0e" stroke-width="2"/>
      <text x="360" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">10</text>
      <line x1="390" y1="90" x2="390" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="390" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">11</text>
      <line x1="420" y1="90" x2="420" y2="116" stroke="#b91c1c" stroke-width="3"/>
      <text x="420" y="133" font-family="sans-serif" font-size="12" font-weight="extrabold" fill="#b91c1c" text-anchor="middle">12</text>
      <line x1="450" y1="90" x2="450" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="450" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">13</text>
      <line x1="480" y1="90" x2="480" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="480" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">14</text>
      <text x="530" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#854d0e">cm</text>
    </svg>
  `)}`,

  // Ilustrasi Posisi Mata yang Benar saat Membaca Mistar
  posisiMataUkur: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="100%" height="100%">
      <rect width="600" height="200" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="300" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Posisi Mata Saat Membaca Skala Penggaris</text>
      
      <!-- Penggaris di bagian bawah -->
      <g transform="translate(100, 130)">
        <rect width="400" height="40" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <line x1="50" y1="0" x2="50" y2="15" stroke="#854d0e" stroke-width="2"/>
        <text x="50" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">4</text>
        
        <line x1="125" y1="0" x2="125" y2="18" stroke="#854d0e" stroke-width="2"/>
        <text x="125" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">5</text>
        
        <!-- Titik ukur 6 cm yang ditargetkan -->
        <line x1="200" y1="0" x2="200" y2="24" stroke="#dc2626" stroke-width="3"/>
        <text x="200" y="32" font-family="sans-serif" font-size="13" font-weight="extrabold" fill="#dc2626" text-anchor="middle">6</text>
        
        <line x1="275" y1="0" x2="275" y2="18" stroke="#854d0e" stroke-width="2"/>
        <text x="275" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">7</text>
        
        <line x1="350" y1="0" x2="350" y2="15" stroke="#854d0e" stroke-width="2"/>
        <text x="350" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">8</text>
      </g>
      
      <!-- Posisi A (Miring Kiri - SALAH) -->
      <g transform="translate(170, 40)">
        <text x="0" y="20" font-family="sans-serif" font-size="24">👁️</text>
        <line x1="15" y1="28" x2="130" y2="90" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
        <rect x="-35" y="36" width="95" height="20" rx="4" fill="#fee2e2" stroke="#fca5a5"/>
        <text x="12" y="50" font-family="sans-serif" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">A (Miring - SALAH)</text>
      </g>
      
      <!-- Posisi B (Tegak Lurus - BENAR) -->
      <g transform="translate(300, 35)">
        <text x="0" y="20" font-family="sans-serif" font-size="28" text-anchor="middle">👁️</text>
        <line x1="0" y1="28" x2="0" y2="95" stroke="#16a34a" stroke-width="3"/>
        <polygon points="0,95 -5,85 5,85" fill="#16a34a"/>
        <rect x="-70" y="36" width="140" height="22" rx="5" fill="#dcfce7" stroke="#86efac"/>
        <text x="0" y="51" font-family="sans-serif" font-size="10" font-weight="extrabold" fill="#15803d" text-anchor="middle">B (TEGAK LURUS - BENAR)</text>
      </g>
      
      <!-- Posisi C (Miring Kanan - SALAH) -->
      <g transform="translate(430, 40)">
        <text x="0" y="20" font-family="sans-serif" font-size="24">👁️</text>
        <line x1="15" y1="28" x2="-130" y2="90" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
        <rect x="-35" y="36" width="95" height="20" rx="4" fill="#fee2e2" stroke="#fca5a5"/>
        <text x="12" y="50" font-family="sans-serif" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">C (Miring - SALAH)</text>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Jangka Sorong (Mengukur Koin Logam)
  jangkaSorong: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 180" width="100%" height="100%">
      <rect width="540" height="180" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="270" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Jangka Sorong (Sketmat) untuk Benda Kecil dan Bundar</text>
      
      <!-- Batang Utama Jangka Sorong -->
      <g transform="translate(40, 50)">
        <rect x="0" y="10" width="460" height="30" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
        <line x1="0" y1="20" x2="460" y2="20" stroke="#94a3b8"/>
        
        <!-- Rahang Tetap Kiri -->
        <path d="M 0 10 L 0 95 L 25 80 L 25 40 L 0 40 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
        
        <!-- Rahang Geser Kanan -->
        <g transform="translate(90, 0)">
          <path d="M 0 10 L 0 40 L -25 40 L -25 80 L 0 95 L 35 95 L 35 10 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
          <text x="17" y="65" font-family="sans-serif" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Rahang</text>
          <text x="17" y="75" font-family="sans-serif" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Geser</text>
        </g>
        
        <!-- Koin Logam yang Dijepit di antara Dua Rahang (x=25 s.d. x=65 -> diameter 40px) -->
        <ellipse cx="45" cy="65" rx="18" ry="18" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
        <text x="45" y="69" font-family="sans-serif" font-size="9" font-weight="bold" fill="#78350f" text-anchor="middle">KOIN</text>
      </g>
      
      <!-- Keterangan Fungsi Jangka Sorong -->
      <g transform="translate(200, 105)">
        <rect width="300" height="55" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
        <text x="15" y="22" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1d4ed8">• Mengukur tebal uang koin logam &amp; tutup botol</text>
        <text x="15" y="40" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1d4ed8">• Mengukur diameter kelereng / pipa kecil</text>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Penggaris Patah (Mulai dari 3 cm s.d. 8 cm)
  penggarisTidakNol: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 170" width="100%" height="100%">
      <rect width="540" height="170" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="270" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Pengukuran Benda yang Tidak Dimulai dari Angka Nol (0)</text>
      
      <!-- Benda: Penghapus Karet mulai dari x=160 (3 cm) sampai x=360 (8 cm) -->
      <g transform="translate(160, 40)">
        <rect width="200" height="30" rx="6" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <text x="100" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Penghapus Karet</text>
      </g>
      
      <!-- Garis Bantu Pangkal & Ujung -->
      <line x1="160" y1="36" x2="160" y2="85" stroke="#2563eb" stroke-dasharray="3,3" stroke-width="2"/>
      <line x1="360" y1="36" x2="360" y2="85" stroke="#dc2626" stroke-dasharray="3,3" stroke-width="2"/>
      <text x="160" y="34" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">Pangkal = 3 cm</text>
      <text x="360" y="34" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">Ujung = 8 cm</text>
      
      <!-- Penggaris Mistar (40 px per cm, mulai x=40 = 0 cm s.d. x=480 = 11 cm) -->
      <g transform="translate(40, 90)">
        <rect width="460" height="55" rx="5" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        
        <!-- 0 s.d. 10 cm -->
        <line x1="40" y1="0" x2="40" y2="14" stroke="#854d0e" stroke-width="1.5"/><text x="40" y="30" font-family="sans-serif" font-size="10" fill="#854d0e" text-anchor="middle">1</text>
        <line x1="80" y1="0" x2="80" y2="14" stroke="#854d0e" stroke-width="1.5"/><text x="80" y="30" font-family="sans-serif" font-size="10" fill="#854d0e" text-anchor="middle">2</text>
        
        <!-- 3 cm (Pangkal) -->
        <line x1="120" y1="0" x2="120" y2="20" stroke="#2563eb" stroke-width="3"/><text x="120" y="32" font-family="sans-serif" font-size="12" font-weight="extrabold" fill="#2563eb" text-anchor="middle">3</text>
        <line x1="160" y1="0" x2="160" y2="14" stroke="#854d0e" stroke-width="1.5"/><text x="160" y="30" font-family="sans-serif" font-size="10" fill="#854d0e" text-anchor="middle">4</text>
        <line x1="200" y1="0" x2="200" y2="14" stroke="#854d0e" stroke-width="1.5"/><text x="200" y="30" font-family="sans-serif" font-size="10" fill="#854d0e" text-anchor="middle">5</text>
        <line x1="240" y1="0" x2="240" y2="14" stroke="#854d0e" stroke-width="1.5"/><text x="240" y="30" font-family="sans-serif" font-size="10" fill="#854d0e" text-anchor="middle">6</text>
        <line x1="280" y1="0" x2="280" y2="14" stroke="#854d0e" stroke-width="1.5"/><text x="280" y="30" font-family="sans-serif" font-size="10" fill="#854d0e" text-anchor="middle">7</text>
        
        <!-- 8 cm (Ujung) -->
        <line x1="320" y1="0" x2="320" y2="20" stroke="#dc2626" stroke-width="3"/><text x="320" y="32" font-family="sans-serif" font-size="12" font-weight="extrabold" fill="#dc2626" text-anchor="middle">8</text>
        <line x1="360" y1="0" x2="360" y2="14" stroke="#854d0e" stroke-width="1.5"/><text x="360" y="30" font-family="sans-serif" font-size="10" fill="#854d0e" text-anchor="middle">9</text>
        <line x1="400" y1="0" x2="400" y2="14" stroke="#854d0e" stroke-width="1.5"/><text x="400" y="30" font-family="sans-serif" font-size="10" fill="#854d0e" text-anchor="middle">10</text>
        
        <text x="435" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e">cm</text>
      </g>
    </svg>
  `)}`,

  // Tangga Konversi Satuan Berat (kg, hg/ons, dag, g, dg, cg, mg)
  tanggaSatuanBerat: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 220" width="100%" height="100%">
      <rect width="620" height="220" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="310" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Tangga Satuan Baku Berat (Massa: kg, ons, gram)</text>
      
      <rect x="25" y="40" width="60" height="28" rx="6" fill="#10b981" stroke="#047857" stroke-width="2"/>
      <text x="55" y="59" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">kg</text>
      
      <rect x="80" y="66" width="65" height="28" rx="6" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
      <text x="112.5" y="85" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">hg (ons)</text>
      
      <rect x="140" y="90" width="55" height="26" rx="5" fill="#0284c7"/>
      <text x="167.5" y="108" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">dag</text>
      
      <rect x="195" y="114" width="60" height="28" rx="6" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <text x="225" y="133" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">g (gram)</text>
      
      <rect x="250" y="138" width="55" height="26" rx="5" fill="#64748b"/>
      <text x="277.5" y="156" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">dg</text>
      
      <rect x="300" y="160" width="55" height="26" rx="5" fill="#64748b"/>
      <text x="327.5" y="178" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">cg</text>
      
      <rect x="350" y="180" width="55" height="26" rx="5" fill="#475569"/>
      <text x="377.5" y="198" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">mg</text>
      
      <g transform="translate(415, 40)">
        <rect width="185" height="162" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
        <text x="92.5" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">Kunci Konversi Berat:</text>
        <line x1="12" y1="30" x2="173" y2="30" stroke="#bbf7d0"/>
        
        <text x="14" y="48" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d">⬇ Turun 1 = × 10</text>
        <text x="14" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">⬆ Naik 1 = : 10</text>
        
        <line x1="12" y1="76" x2="173" y2="76" stroke="#bbf7d0"/>
        <text x="14" y="94" font-family="sans-serif" font-size="10" font-weight="bold" fill="#14532d">• 1 kg = 1.000 g</text>
        <text x="14" y="112" font-family="sans-serif" font-size="10" font-weight="bold" fill="#14532d">• 1 kg = 10 ons</text>
        <text x="14" y="130" font-family="sans-serif" font-size="10" font-weight="bold" fill="#14532d">• 1 ons = 100 g</text>
        <text x="14" y="148" font-family="sans-serif" font-size="9" font-weight="bold" fill="#166534">• 1 kuintal = 100 kg</text>
      </g>
    </svg>
  `)}`,

  // Macam-Macam Alat Ukur Berat (Timbangan)
  alatUkurBerat: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 190" width="100%" height="100%">
      <rect width="600" height="190" rx="16" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
      <text x="300" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Macam-Macam Alat Ukur Baku Berat (Timbangan)</text>
      
      <!-- 1. Timbangan Badan -->
      <g transform="translate(15, 38)">
        <rect width="135" height="135" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🧍⚖️</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">TIMBANGAN BADAN</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#1e40af" text-anchor="middle">(INJAK / DIGITAL)</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#bfdbfe"/>
        <text x="67.5" y="95" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">Menimbang berat</text>
        <text x="67.5" y="110" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">tubuh manusia di UKS,</text>
        <text x="67.5" y="125" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">rumah sakit, posyandu</text>
      </g>
      
      <!-- 2. Timbangan Duduk / Dapur / Kue -->
      <g transform="translate(160, 38)">
        <rect width="135" height="135" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🎂🍰</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">TIMBANGAN KUE</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">(DAPUR BERJARUM)</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#bbf7d0"/>
        <text x="67.5" y="95" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Menimbang bahan:</text>
        <text x="67.5" y="110" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">tepung, gula pasir,</text>
        <text x="67.5" y="125" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">mentega, telur (gram)</text>
      </g>
      
      <!-- 3. Timbangan Pasar / Bebek -->
      <g transform="translate(305, 38)">
        <rect width="135" height="135" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🥬🥕</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">TIMBANGAN PASAR</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#a16207" text-anchor="middle">(TIMBANGAN BEBEK)</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#fef08a"/>
        <text x="67.5" y="95" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">Memakai anak timbangan</text>
        <text x="67.5" y="110" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">besi untuk menimbang</text>
        <text x="67.5" y="125" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">beras, sayur, buah</text>
      </g>
      
      <!-- 4. Neraca Halus Dua Lengan -->
      <g transform="translate(450, 38)">
        <rect width="135" height="135" rx="10" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">💍✨</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6b21a8" text-anchor="middle">NERACA HALUS</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#7e22ce" text-anchor="middle">(DUA LENGAN)</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#d8b4fe"/>
        <text x="67.5" y="95" font-family="sans-serif" font-size="8.5" fill="#581c87" text-anchor="middle">Ketelitian tinggi,</text>
        <text x="67.5" y="110" font-family="sans-serif" font-size="8.5" fill="#581c87" text-anchor="middle">menimbang emas, perak,</text>
        <text x="67.5" y="125" font-family="sans-serif" font-size="8.5" fill="#581c87" text-anchor="middle">&amp; bahan obat apotek</text>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Timbangan Jarum Buah Apel (2 kg)
  timbanganJarumBuah: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="100%" height="100%">
      <rect width="500" height="240" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="250" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Membaca Hasil Pengukuran pada Timbangan Jarum</text>
      
      <path d="M 160 50 L 340 50 L 320 65 L 180 65 Z" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
      <rect x="242" y="65" width="16" height="25" fill="#64748b"/>
      
      <g transform="translate(190, 20)">
        <circle cx="25" cy="22" r="16" fill="#ef4444"/>
        <path d="M 25 6 Q 28 0 32 3" stroke="#15803d" stroke-width="2.5" fill="none"/>
        <circle cx="58" cy="24" r="16" fill="#dc2626"/>
        <circle cx="92" cy="22" r="16" fill="#ef4444"/>
        <circle cx="42" cy="10" r="14" fill="#b91c1c"/>
        <circle cx="75" cy="10" r="14" fill="#dc2626"/>
      </g>
      
      <rect x="180" y="85" width="140" height="135" rx="12" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
      <circle cx="250" cy="150" r="54" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
      
      <text x="250" y="112" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">0 kg</text>
      <text x="288" y="132" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">1</text>
      <text x="284" y="178" font-family="sans-serif" font-size="12" font-weight="extrabold" fill="#b91c1c" text-anchor="middle">2 kg</text>
      <text x="216" y="178" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">3</text>
      <text x="212" y="132" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">4</text>
      
      <circle cx="250" cy="150" r="4" fill="#0f172a"/>
      <line x1="250" y1="150" x2="280" y2="172" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <polygon points="280,172 272,166 276,160" fill="#dc2626"/>
      
      <g transform="translate(350, 100)">
        <rect width="135" height="95" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
        <text x="67.5" y="22" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Hasil Pembacaan:</text>
        <line x1="10" y1="28" x2="125" y2="28" stroke="#fca5a5"/>
        <text x="67.5" y="48" font-family="sans-serif" font-size="14" font-weight="extrabold" fill="#dc2626" text-anchor="middle">2 kg</text>
        <text x="67.5" y="66" font-family="sans-serif" font-size="9" fill="#7f1d1d" text-anchor="middle">setara dengan</text>
        <text x="67.5" y="82" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">2.000 gram</text>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Timbangan Gantung Posyandu (Dacin)
  timbanganDacinPosyandu: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 220" width="100%" height="100%">
      <rect width="540" height="220" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="270" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Timbangan Dacin (Timbangan Gantung Balita di Posyandu)</text>
      
      <!-- Batang Gantung Utama dari langit-langit -->
      <line x1="200" y1="28" x2="200" y2="60" stroke="#475569" stroke-width="3"/>
      <circle cx="200" cy="60" r="6" fill="#0f172a"/>
      
      <!-- Lengan Logam Dacin (horizontal) -->
      <line x1="80" y1="60" x2="420" y2="60" stroke="#ca8a04" stroke-width="6" stroke-linecap="round"/>
      
      <!-- Skala garis pada lengan dacin -->
      <line x1="230" y1="57" x2="230" y2="63" stroke="#78350f" stroke-width="1.5"/>
      <line x1="260" y1="57" x2="260" y2="63" stroke="#78350f" stroke-width="1.5"/>
      <line x1="290" y1="57" x2="290" y2="63" stroke="#78350f" stroke-width="1.5"/>
      <line x1="320" y1="57" x2="320" y2="63" stroke="#78350f" stroke-width="1.5"/>
      <line x1="350" y1="57" x2="350" y2="63" stroke="#78350f" stroke-width="1.5"/>
      <line x1="380" y1="57" x2="380" y2="63" stroke="#78350f" stroke-width="1.5"/>
      
      <!-- Bandul Geser Dacin di Lengan Kanan -->
      <g transform="translate(320, 52)">
        <rect width="24" height="34" rx="4" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
        <text x="12" y="22" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">kg</text>
      </g>
      
      <!-- Tali & Kain Ayunan Sarung Timbang Balita di Sisi Kiri -->
      <line x1="110" y1="60" x2="90" y2="105" stroke="#0284c7" stroke-width="2"/>
      <line x1="110" y1="60" x2="130" y2="105" stroke="#0284c7" stroke-width="2"/>
      
      <path d="M 75 105 Q 110 170 145 105 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <circle cx="110" cy="118" r="14" fill="#fed7aa"/>
      <text x="110" y="123" font-family="sans-serif" font-size="14" text-anchor="middle">👶</text>
      
      <!-- Kotak Keterangan Dacin Posyandu -->
      <g transform="translate(230, 110)">
        <rect width="280" height="90" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
        <text x="140" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Timbangan Dacin Posyandu</text>
        <line x1="15" y1="32" x2="265" y2="32" stroke="#bfdbfe"/>
        <text x="15" y="48" font-family="sans-serif" font-size="9.5" fill="#1e3a8a">• Digunakan untuk menimbang balita/bayi</text>
        <text x="15" y="64" font-family="sans-serif" font-size="9.5" fill="#1e3a8a">• Bayi ditaruh di dalam sarung ayunan</text>
        <text x="15" y="80" font-family="sans-serif" font-size="9.5" fill="#1e3a8a">• Berat dibaca dari posisi geseran bandul</text>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Timbangan Bebek / Pasar dengan Anak Timbangan (1 kg + 500 g = 1.500 g)
  timbanganPasarBebekAnak: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 220" width="100%" height="100%">
      <rect width="540" height="220" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="270" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Timbangan Bebek (Timbangan Pasar) dalam Kondisi Seimbang</text>
      
      <!-- Badan Timbangan Logam Kuningan -->
      <path d="M 210 170 L 330 170 L 310 195 L 230 195 Z" fill="#78350f" stroke="#451a03" stroke-width="2"/>
      <rect x="260" y="100" width="20" height="70" fill="#b45309"/>
      
      <!-- Lengan Timbangan (Seimbang Horizontal) -->
      <line x1="90" y1="105" x2="450" y2="105" stroke="#ca8a04" stroke-width="6" stroke-linecap="round"/>
      
      <!-- Jarum Indikator Seimbang (Dua Paruh Bebek Bertemu di Tengah) -->
      <polygon points="270,95 264,105 276,105" fill="#dc2626"/>
      <circle cx="270" cy="105" r="5" fill="#451a03"/>
      <text x="270" y="88" font-family="sans-serif" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">SEIMBANG</text>
      
      <!-- Piringan Kiri: Buah Pepaya -->
      <g transform="translate(60, 105)">
        <line x1="70" y1="0" x2="70" y2="25" stroke="#854d0e" stroke-width="2"/>
        <path d="M 25 25 L 115 25 Q 70 50 25 25 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
        <!-- Buah Pepaya -->
        <ellipse cx="70" cy="15" rx="36" ry="18" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
        <text x="70" y="19" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Pepaya</text>
      </g>
      
      <!-- Piringan Kanan: Anak Timbangan 1 kg + 500 g -->
      <g transform="translate(340, 105)">
        <line x1="70" y1="0" x2="70" y2="25" stroke="#854d0e" stroke-width="2"/>
        <path d="M 25 25 L 115 25 Q 70 50 25 25 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
        
        <!-- Anak Timbangan 1 kg -->
        <g transform="translate(40, -5)">
          <rect width="28" height="30" rx="3" fill="#ca8a04" stroke="#78350f" stroke-width="1.5"/>
          <circle cx="14" cy="-3" r="4" fill="#a16207"/>
          <text x="14" y="18" font-family="sans-serif" font-size="9" font-weight="extrabold" fill="#451a03" text-anchor="middle">1 kg</text>
        </g>
        
        <!-- Anak Timbangan 500 g -->
        <g transform="translate(74, 5)">
          <rect width="24" height="20" rx="3" fill="#eab308" stroke="#a16207" stroke-width="1.5"/>
          <circle cx="12" cy="-3" r="3" fill="#ca8a04"/>
          <text x="12" y="13" font-family="sans-serif" font-size="8" font-weight="extrabold" fill="#451a03" text-anchor="middle">500g</text>
        </g>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Timbangan Kue Dapur Menunjuk Tepat 600 gram
  timbanganKueJarumDetail: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="100%" height="100%">
      <rect width="500" height="240" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="250" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Pengukuran Tepung Terigu pada Timbangan Dapur Jarum</text>
      
      <!-- Mangkuk Tepung -->
      <path d="M 170 48 L 330 48 L 305 66 L 195 66 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
      <ellipse cx="250" cy="48" rx="60" ry="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <text x="250" y="52" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Tepung Terigu</text>
      <rect x="242" y="66" width="16" height="22" fill="#64748b"/>
      
      <!-- Badan Timbangan -->
      <rect x="175" y="85" width="150" height="135" rx="12" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      <circle cx="250" cy="152" r="56" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
      
      <!-- Titik Skala 0 s.d. 1.000 gram -->
      <text x="250" y="112" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">0 / 1 kg</text>
      <text x="294" y="132" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">200g</text>
      <text x="296" y="172" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">400g</text>
      
      <!-- Garis 600 gram DITUNJUK JARUM! -->
      <text x="222" y="196" font-family="sans-serif" font-size="11" font-weight="extrabold" fill="#dc2626" text-anchor="middle">600g</text>
      <text x="202" y="132" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">800g</text>
      
      <circle cx="250" cy="152" r="4" fill="#0f172a"/>
      <!-- Jarum Penunjuk ke 600g (arah kiri bawah) -->
      <line x1="250" y1="152" x2="228" y2="184" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <polygon points="228,184 233,176 223,176" fill="#dc2626"/>
      
      <!-- Keterangan Konversi -->
      <g transform="translate(350, 95)">
        <rect width="135" height="100" rx="8" fill="#fefce8" stroke="#fde047" stroke-width="1.5"/>
        <text x="67.5" y="24" font-family="sans-serif" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">Hasil Pembacaan:</text>
        <line x1="10" y1="32" x2="125" y2="32" stroke="#fef08a"/>
        <text x="67.5" y="52" font-family="sans-serif" font-size="14" font-weight="extrabold" fill="#b45309" text-anchor="middle">600 gram</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#713f12" text-anchor="middle">setara dengan</text>
        <text x="67.5" y="88" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">6 ons</text>
      </g>
    </svg>
  `)}`
};

export const ELEMEN_PENGUKURAN = 'Pengukuran';

export const CP_PENGUKURAN =
  'Peserta didik dapat mengukur panjang dan berat benda menggunakan satuan baku, serta dapat menentukan hubungan antarsatuan baku panjang (mm, cm, m, km) dan berat (g, ons/hg, kg).';

export const TP_PANJANG =
  'Peserta didik mampu memilih alat ukur panjang yang sesuai, membaca hasil pengukuran, mengonversi antarsatuan baku panjang (km, m, cm, mm), dan menyelesaikan masalah sehari-hari terkait panjang.';

export const TP_BERAT =
  'Peserta didik mampu memilih alat ukur berat yang sesuai, membaca hasil penimbangan, mengonversi antarsatuan baku berat (kg, ons, gram), dan menyelesaikan masalah sehari-hari terkait berat.';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // SUB-TOPIK 1: PENGUKURAN PANJANG (PILIHAN GANDA: SOAL 1 s.d. 15)
  // =========================================================================

  // Soal 1: Pemilihan Alat Ukur Panjang Baku untuk Pensil/Buku (L1 - Mudah)
  {
    id: 'pg-1',
    originalNumber: 1,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan situasi pengukuran benda kelas, siswa dapat memilih alat ukur panjang baku yang paling tepat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurPanjang,
    imageCaption: 'Macam-Macam Alat Ukur Panjang Baku',
    question: 'Alat ukur panjang baku yang paling tepat dan praktis digunakan untuk mengukur panjang pensil, penghapus, atau buku tulis di dalam kelas adalah ...',
    options: [
      'Penggaris (mistar)',
      'Meteran rol besar pengukur tanah',
      'Timbangan duduk berjarum',
      'Termometer raksa'
    ],
    correctAnswer: 0,
    explanation: 'Penggaris (mistar) adalah alat ukur baku yang paling tepat untuk mengukur benda-benda berukuran pendek seperti pensil dan buku tulis dengan satuan sentimeter (cm).'
  },

  // Soal 2: Membaca Hasil Pengukuran Pensil dengan Penggaris (L1 - Mudah)
  {
    id: 'pg-2',
    originalNumber: 2,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan ilustrasi pengukuran pensil pada penggaris, siswa dapat membaca panjang benda dengan tepat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.penggarisPensil,
    imageCaption: 'Pengukuran Panjang Pensil dengan Penggaris',
    question: 'Perhatikan gambar pengukuran pensil dengan penggaris di atas! Pangkal pensil diletakkan sejajar pada angka 0 cm dan ujung runcing pensil tepat lurus menunjuk angka 12 cm. Berapakah panjang pensil tersebut?',
    options: [
      '8 cm',
      '10 cm',
      '12 cm',
      '15 cm'
    ],
    correctAnswer: 2,
    explanation: 'Panjang benda dihitung dari titik pangkal ke titik ujung. Karena pangkal pensil berada di angka 0 cm dan ujungnya di angka 12 cm, maka panjang pensil adalah 12 cm (12 - 0 = 12 cm).'
  },

  // Soal 3: Alat Ukur Penjahit untuk Lingkar Badan / Kain (L1 - Mudah)
  {
    id: 'pg-3',
    originalNumber: 3,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan konteks penjahit pakaian, siswa dapat menentukan alat ukur panjang yang lentur dan fleksibel.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurPanjang,
    imageCaption: 'Meteran Pita untuk Penjahit Pakaian',
    question: 'Seorang penjahit ingin mengukur lingkar pinggang dan lingkar dada siswa untuk membuat seragam sekolah. Alat ukur panjang yang paling tepat digunakan karena sifatnya yang lentur dan mudah ditekuk adalah ...',
    options: [
      'Penggaris kayu panjang kaku',
      'Meteran pita (meteran jahit/kain)',
      'Jangka sorong baja',
      'Meteran rol jalan'
    ],
    correctAnswer: 1,
    explanation: 'Meteran pita (meteran kain/jahit) terbuat dari bahan pita lentur sehingga sangat cocok digunakan untuk mengukur kain dan bagian tubuh yang melengkung seperti lingkar pinggang.'
  },

  // Soal 4: Alat Ukur Meteran Rol Besar untuk Lapangan / Tanah (L1 - Mudah) [ALAT UKUR PANJANG]
  {
    id: 'pg-4',
    originalNumber: 4,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Siswa dapat menentukan alat ukur panjang yang tepat untuk mengukur bidang tanah atau lapangan yang sangat luas.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurPanjang,
    imageCaption: 'Meteran Rol Besar (Meteran Tanah/Lapangan)',
    question: 'Guru olahraga ingin mengukur panjang lapangan sepak bola dan lintasan lari di halaman sekolah yang mencapai puluhan meter. Alat ukur panjang baku yang paling tepat digunakan karena memiliki pita ukur sangat panjang (20 hingga 50 meter) adalah ...',
    options: [
      'Meteran rol besar (meteran tanah / meteran gulung panjang)',
      'Penggaris plastik kecil 30 cm',
      'Jangka sorong',
      'Meteran pita penjahit 1,5 meter'
    ],
    correctAnswer: 0,
    explanation: 'Meteran rol besar (meteran tanah) memiliki pita ukur yang sangat panjang (mencapai 20 m sampai 50 meter) sehingga sangat tepat dan efisien untuk mengukur tanah, halaman, atau lapangan olahraga.'
  },

  // Soal 5: Posisi Pengamatan Mata Saat Mengukur dengan Mistar (L1 - Mudah) [ALAT UKUR PANJANG]
  {
    id: 'pg-5',
    originalNumber: 5,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan ilustrasi posisi mata, siswa dapat menentukan sudut pandang yang tepat saat membaca skala pengukuran panjang.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.posisiMataUkur,
    imageCaption: 'Posisi Mata Pengamat yang Tepat saat Membaca Mistar',
    question: 'Perhatikan gambar posisi mata pengamat di atas! Agar hasil pembacaan panjang benda pada penggaris akurat dan tidak salah baca (menghindari kesalahan paralaks), posisi mata pengamat yang BENAR adalah ...',
    options: [
      'Posisi A (melihat miring dari arah kiri)',
      'Posisi B (tegak lurus tepat di atas garis skala yang dibaca)',
      'Posisi C (melihat miring dari arah kanan)',
      'Melihat sambil memiringkan ujung penggaris dari bawah'
    ],
    correctAnswer: 1,
    explanation: 'Saat membaca skala penggaris, mata pengamat harus berada pada Posisi B, yaitu tegak lurus tepat di atas garis skala yang diukur agar tidak terjadi pergeseran sudut pandang (kesalahan paralaks).'
  },

  // Soal 6: Jangka Sorong untuk Benda Bundar dan Ketebalan Tipis (L1 - Mudah) [ALAT UKUR PANJANG]
  {
    id: 'pg-6',
    originalNumber: 6,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan gambar jangka sorong, siswa dapat mengidentifikasi alat ukur panjang khusus untuk benda kecil dan bundar.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.jangkaSorong,
    imageCaption: 'Jangka Sorong untuk Menjepit Benda Bundar & Kecil',
    question: 'Perhatikan gambar alat ukur di atas! Alat ukur panjang yang memiliki rahang penjepit dan sangat tepat digunakan untuk mengukur ketebalan uang koin logam atau diameter kelereng dengan ketelitian tinggi adalah ...',
    options: [
      'Meteran pita jahit',
      'Jangka sorong (sketmat)',
      'Meteran gulung tukang kayu',
      'Busur derajat'
    ],
    correctAnswer: 1,
    explanation: 'Jangka sorong (sketmat) adalah alat ukur panjang dengan rahang geser yang dirancang khusus untuk mengukur diameter luar kelereng, diameter dalam pipa, dan ketebalan benda tipis seperti koin dengan sangat presisi.'
  },

  // Soal 7: Alat Ukur Pertukangan / Bangunan (L1 - Mudah) [ALAT UKUR PANJANG]
  {
    id: 'pg-7',
    originalNumber: 7,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Siswa dapat mengidentifikasi alat ukur panjang yang biasa digunakan oleh tukang bangunan.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurPanjang,
    imageCaption: 'Meteran Rol Saku untuk Pertukangan',
    question: 'Pak Tukang ingin mengukur lebar pintu dan tinggi jendela saat merenovasi ruang kelas. Alat ukur panjang terbuat dari pita baja gulung yang tepat digunakan oleh tukang bangunan adalah ...',
    options: [
      'Meteran rol saku (meteran saku)',
      'Timbangan duduk bebek',
      'Penggaris segitiga kecil 10 cm',
      'Stopwatch digital'
    ],
    correctAnswer: 0,
    explanation: 'Meteran rol saku (meteran saku/tukang) biasanya berukuran 3 hingga 5 meter, terbuat dari pita logam tipis yang kokoh untuk mengukur kayu, pintu, meja, dan dinding bangunan.'
  },

  // Soal 8: Hubungan Kilometer ke Meter (L1 - Mudah)
  {
    id: 'pg-8',
    originalNumber: 8,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Siswa dapat menentukan hubungan kesetaraan antara satuan jarak kilometer (km) dan meter (m).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.tanggaSatuanPanjang,
    imageCaption: 'Tangga Konversi Satuan Panjang',
    question: 'Jarak antara rumah Made ke sekolah adalah 1 kilometer (km). Berapakah jarak tersebut jika dinyatakan dalam satuan meter (m)?',
    options: [
      '10 meter',
      '100 meter',
      '1.000 meter',
      '10.000 meter'
    ],
    correctAnswer: 2,
    explanation: '1 kilometer (km) setara dengan 1.000 meter (m). Dari km ke m turun 3 anak tangga (× 10 × 10 × 10 = 1.000).'
  },

  // Soal 9: Konversi Gabungan Meter dan Sentimeter ke Sentimeter (L2 - Sedang)
  {
    id: 'pg-9',
    originalNumber: 9,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan ukuran panjang gabungan m dan cm, siswa dapat mengonversinya ke dalam bentuk sentimeter.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Dayu memiliki seutas tali pramuka dengan panjang 2 meter lebih 45 sentimeter (2 m 45 cm). Berapakah panjang tali Dayu jika dinyatakan seluruhnya dalam satuan sentimeter (cm)?',
    options: [
      '245 cm',
      '205 cm',
      '65 cm',
      '2.045 cm'
    ],
    correctAnswer: 0,
    explanation: '2 meter = 2 × 100 cm = 200 cm. Panjang total = 200 cm + 45 cm = 245 cm.'
  },

  // Soal 10: Pengukuran Benda yang Tidak Dimulai dari Angka Nol (L2 - Sedang) [ALAT UKUR PANJANG]
  {
    id: 'pg-10',
    originalNumber: 10,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan gambar pengukuran benda dengan penggaris patah (tidak mulai dari 0), siswa dapat menghitung panjang benda sebenarnya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.penggarisTidakNol,
    imageCaption: 'Pengukuran Penghapus Karet pada Skala 3 cm s.d. 8 cm',
    question: 'Perhatikan gambar pengukuran penghapus di atas! Wayan menggunakan penggaris yang patah ujung awalnya untuk mengukur sebuah penghapus karet. Pangkal penghapus diletakkan tepat di angka 3 cm dan ujung penghapus berada di angka 8 cm. Berapakah panjang penghapus karet tersebut sebenarnya?',
    options: [
      '8 cm',
      '5 cm',
      '3 cm',
      '11 cm'
    ],
    correctAnswer: 1,
    explanation: 'Karena pengukuran tidak dimulai dari angka 0, panjang benda dihitung dari selisih angka akhir dikurangi angka awal: 8 cm - 3 cm = 5 cm. Jadi, panjang penghapus karet tersebut adalah 5 cm.'
  },

  // Soal 11: Penjumlahan Panjang dengan Konversi Satuan (L2 - Sedang)
  {
    id: 'pg-11',
    originalNumber: 11,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan soal cerita penggabungan dua benda, siswa dapat menghitung panjang total dalam meter.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Lani menyambungkan dua potong pita hias. Pita pertama panjangnya 1 meter 20 sentimeter (120 cm) dan pita kedua panjangnya 80 sentimeter. Berapakah panjang total sambungan pita Lani dalam satuan meter (m)?',
    options: [
      '1 meter',
      '2 meter',
      '2 meter 50 sentimeter',
      '3 meter'
    ],
    correctAnswer: 1,
    explanation: '1 m 20 cm = 120 cm. Panjang total = 120 cm + 80 cm = 200 cm. Karena 200 cm = 2 m, maka panjang total pita adalah 2 meter.'
  },

  // Soal 12: Pasangan Benda dan Alat Ukur Panjang yang Tepat (L2 - Sedang) [ALAT UKUR PANJANG]
  {
    id: 'pg-12',
    originalNumber: 12,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Siswa dapat menganalisis kesesuaian antara bentuk benda dan alat ukur panjang baku yang paling tepat.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurPanjang,
    imageCaption: 'Kesesuaian Karakteristik Benda dan Alat Ukur Panjang',
    question: 'Perhatikan pasangan benda dan alat ukur panjang berikut! Pasangan manakah yang PALING SESUAI dan tepat digunakan dalam kehidupan sehari-hari?',
    options: [
      'Mengukur lingkar kepala adik bayi — Menggunakan meteran baja rol tukang yang kaku',
      'Mengukur tebal keping uang logam koin — Menggunakan meteran kain jahit',
      'Mengukur lingkar leher baju seragam — Menggunakan meteran pita kain yang lentur',
      'Mengukur panjang buku gambar siswa — Menggunakan meteran rol tanah 50 meter'
    ],
    correctAnswer: 2,
    explanation: 'Lingkar leher atau lingkar tubuh manusia memiliki bentuk melengkung, sehingga alat ukur yang paling cocok adalah meteran pita kain yang fleksibel dan lentur mengikuti lekuk tubuh.'
  },

  // Soal 13: Jarak Tempuh Kilometer dan Meter (L2 - Sedang)
  {
    id: 'pg-13',
    originalNumber: 13,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan jarak perjalanan km dan m, siswa dapat mengubah seluruhnya ke satuan meter.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Jarak dari rumah Kadek ke Pantai Baluk Rening adalah 2 km 300 m. Jarak rumah Kadek ke pantai tersebut jika dinyatakan seluruhnya dalam satuan meter adalah ... meter.',
    options: [
      '230 meter',
      '500 meter',
      '2.300 meter',
      '23.000 meter'
    ],
    correctAnswer: 2,
    explanation: '2 km = 2 × 1.000 m = 2.000 m. Jarak total = 2.000 m + 300 m = 2.300 meter.'
  },

  // Soal 14: Membandingkan Ukuran Panjang Beberapa Benda (L2 - Sedang)
  {
    id: 'pg-14',
    originalNumber: 14,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan data ukuran beberapa tali dengan satuan berbeda, siswa dapat menentukan tali yang paling panjang.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Perhatikan data panjang empat helai tali berikut ini:\n• Tali A = 150 cm\n• Tali B = 2 meter\n• Tali C = 1 m 80 cm\n• Tali D = 90 cm\nTali manakah yang memiliki ukuran PALING PANJANG?',
    options: [
      'Tali A',
      'Tali B',
      'Tali C',
      'Tali D'
    ],
    correctAnswer: 1,
    explanation: 'Ubah semua ke satuan cm:\n• Tali A = 150 cm\n• Tali B = 2 m = 200 cm\n• Tali C = 1 m 80 cm = 180 cm\n• Tali D = 90 cm\nNilai terbesar adalah 200 cm, yaitu Tali B.'
  },

  // Soal 15: Pemecahan Masalah Keliling & Jarak Berlari Multi-Langkah (L3 - Sukar HOTS)
  {
    id: 'pg-15',
    originalNumber: 15,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan masalah kontekstual keliling lapangan dan putaran lari, siswa dapat menganalisis dan menghitung total jarak tempuh multi-langkah.',
    cognitiveLevel: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 1,
    question: 'Ayah berolahraga pagi dengan berlari mengelilingi lapangan upacara berbentuk persegi panjang. Lapangan tersebut memiliki panjang 50 meter dan lebar 30 meter. Jika Ayah berlari mengelilingi lapangan tersebut sebanyak 2 putaran penuh, berapakah total jarak yang telah ditempuh Ayah dalam satuan meter?',
    options: [
      '160 meter',
      '240 meter',
      '320 meter',
      '400 meter'
    ],
    correctAnswer: 2,
    explanation: 'Langkah 1: Hitung keliling 1 putaran lapangan = panjang + lebar + panjang + lebar = 50 m + 30 m + 50 m + 30 m = 160 meter.\nLangkah 2: Karena Ayah berlari 2 putaran penuh, total jarak = 160 meter × 2 = 320 meter.'
  },

  // =========================================================================
  // SUB-TOPIK 2: PENGUKURAN BERAT (PILIHAN GANDA: SOAL 16 s.d. 30)
  // =========================================================================

  // Soal 16: Alat Ukur Baku untuk Berat Badan (L1 - Mudah) [ALAT UKUR BERAT]
  {
    id: 'pg-16',
    originalNumber: 16,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat memilih alat ukur baku yang tepat untuk menimbang berat badan manusia.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurBerat,
    imageCaption: 'Macam-Macam Alat Ukur Berat (Timbangan)',
    question: 'Saat jadwal pemeriksaan kesehatan berkala di sekolah, dokter kecil UKS memeriksa berat badan siswa kelas III. Alat ukur baku yang tepat digunakan adalah ...',
    options: [
      'Timbangan badan (timbangan injak)',
      'Neraca halus dua lengan perhiasan',
      'Penggaris mistar 30 cm',
      'Meteran pita kain'
    ],
    correctAnswer: 0,
    explanation: 'Timbangan badan (baik jarum injak maupun digital) dirancang khusus untuk mengukur berat tubuh manusia dengan satuan kilogram (kg).'
  },

  // Soal 17: Timbangan Gantung Posyandu (Dacin) untuk Balita (L1 - Mudah) [ALAT UKUR BERAT]
  {
    id: 'pg-17',
    originalNumber: 17,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan ilustrasi timbangan dacin, siswa dapat mengidentifikasi alat ukur berat gantung untuk balita di posyandu.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.timbanganDacinPosyandu,
    imageCaption: 'Timbangan Dacin Gantung untuk Balita di Posyandu',
    question: 'Perhatikan gambar alat penimbangan di atas! Saat kegiatan Posyandu bulanan di balai desa, kader kesehatan menimbang berat badan balita menggunakan timbangan gantung berbatang logam dengan kain ayunan. Alat ukur berat tersebut dikenal dengan nama ...',
    options: [
      'Timbangan dacin (timbangan gantung Posyandu)',
      'Neraca pegas laboratorium',
      'Timbangan duduk lantai beras',
      'Meteran pita kain'
    ],
    correctAnswer: 0,
    explanation: 'Timbangan dacin adalah timbangan gantung berlengan logam dengan bandul geser yang umum digunakan di Posyandu untuk menimbang berat badan bayi dan balita dalam sarung ayunan.'
  },

  // Soal 18: Neraca Dua Lengan untuk Toko Emas (L1 - Mudah) [ALAT UKUR BERAT]
  {
    id: 'pg-18',
    originalNumber: 18,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat menentukan alat ukur berat yang memiliki ketelitian tinggi untuk menimbang perhiasan emas.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurBerat,
    imageCaption: 'Neraca Halus Dua Lengan',
    question: 'Ibu mengunjungi toko emas untuk membeli sebuah cincin. Alat penimbang dengan dua piringan yang memiliki ketelitian sangat tinggi dan cocok digunakan untuk menimbang emas, perak, atau obat di apotek adalah ...',
    options: [
      'Neraca dua lengan (neraca halus)',
      'Timbangan injak badan',
      'Timbangan beras karungan',
      'Timbangan gantung dacin'
    ],
    correctAnswer: 0,
    explanation: 'Neraca dua lengan (neraca halus) digunakan khusus untuk menimbang benda-benda berharga kecil seperti emas, perak, dan serbuk obat di apotek karena mempunyai tingkat kepekaan dan ketelitian yang sangat tinggi dalam satuan gram.'
  },

  // Soal 19: Memastikan Posisi Jarum Timbangan ke Angka Nol (L1 - Mudah) [ALAT UKUR BERAT]
  {
    id: 'pg-19',
    originalNumber: 19,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat menjelaskan prosedur yang benar sebelum menimbang bahan pada timbangan jarum.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurBerat,
    imageCaption: 'Timbangan Dapur Jarum untuk Menimbang Bahan Makanan',
    question: 'Sebelum meletakkan tepung terigu atau gula ke atas wadah timbangan dapur berjarum, tindakan awal yang WAJIB dipastikan agar hasil penimbangan tepat dan akurat adalah ...',
    options: [
      'Memastikan jarum penunjuk timbangan tepat menunjuk ke angka 0 (nol)',
      'Memutar jarum timbangan ke angka 500 gram',
      'Meletakkan anak timbangan besi di atas meja',
      'Memiringkan badan timbangan ke kiri'
    ],
    correctAnswer: 0,
    explanation: 'Sebelum digunakan, jarum timbangan harus tepat berada pada posisi angka 0 (nol). Hal ini dilakukan agar berat benda dihitung secara murni dari titik awal tanpa kesalahan ukuran.'
  },

  // Soal 20: Membaca Hasil Timbangan Jarum Buah (L1 - Mudah) [ALAT UKUR BERAT]
  {
    id: 'pg-20',
    originalNumber: 20,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan gambar timbangan jarum, siswa dapat membaca hasil penimbangan dalam satuan gram.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.timbanganJarumBuah,
    imageCaption: 'Timbangan Buah Berjarum Menimbang Apel',
    question: 'Perhatikan gambar timbangan buah di atas! Jarum timbangan menunjukkan angka 2 kg pada skala penimbangan. Berapakah berat apel tersebut jika diubah ke dalam satuan gram?',
    options: [
      '20 gram',
      '200 gram',
      '2.000 gram',
      '20.000 gram'
    ],
    correctAnswer: 2,
    explanation: 'Hasil penimbangan adalah 2 kg. Karena 1 kg = 1.000 gram, maka 2 kg = 2 × 1.000 gram = 2.000 gram.'
  },

  // Soal 21: Konversi Kilogram ke Gram Bilangan Bulat (L1 - Mudah)
  {
    id: 'pg-21',
    originalNumber: 21,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat mengonversi satuan berat kilogram ke gram pada bilangan bulat sederhana.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Paman membeli beras seberat 4 kilogram di toko sembako. Jika dinyatakan dalam satuan gram, berat beras yang dibeli paman adalah ... gram.',
    options: [
      '40 gram',
      '400 gram',
      '4.000 gram',
      '40.000 gram'
    ],
    correctAnswer: 2,
    explanation: '4 kg = 4 × 1.000 gram = 4.000 gram.'
  },

  // Soal 22: Konversi Gram ke Kilogram Ribuan Genap (L1 - Mudah)
  {
    id: 'pg-22',
    originalNumber: 22,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat mengonversi berat dari satuan gram ke kilogram pada bilangan ribuan bulat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Sebuah buah semangka ditimbang dan jarum timbangan digital menunjukkan angka 3.000 gram. Berat semangka tersebut sama dengan ... kilogram (kg).',
    options: [
      '3 kg',
      '30 kg',
      '300 kg',
      '0,3 kg'
    ],
    correctAnswer: 0,
    explanation: '3.000 gram = 3.000 : 1.000 = 3 kilogram (kg).'
  },

  // Soal 23: Membaca Timbangan Dapur Jarum 600 gram dan Mengonversi ke Ons (L2 - Sedang) [ALAT UKUR BERAT]
  {
    id: 'pg-23',
    originalNumber: 23,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan gambar timbangan kue berjarum yang menunjuk 600 gram, siswa dapat membaca dan mengonversinya ke dalam satuan ons.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.timbanganKueJarumDetail,
    imageCaption: 'Timbangan Kue Dapur Menimbang Tepung Terigu',
    question: 'Perhatikan gambar timbangan dapur yang menimbang semangkuk tepung terigu di atas! Jarum timbangan tepat menunjuk ke angka 600 gram pada skala putar. Berapakah berat tepung terigu tersebut jika dinyatakan dalam satuan ons?',
    options: [
      '6 ons',
      '60 ons',
      '0,6 ons',
      '600 ons'
    ],
    correctAnswer: 0,
    explanation: 'Hasil penunjukan jarum timbangan adalah 600 gram. Karena 1 ons = 100 gram, maka 600 gram = 600 : 100 = 6 ons.'
  },

  // Soal 24: Membaca Timbangan Bebek Pasar dengan Anak Timbangan (L2 - Sedang) [ALAT UKUR BERAT]
  {
    id: 'pg-24',
    originalNumber: 24,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan gambar timbangan bebek yang seimbang, siswa dapat menghitung berat total buah dari kombinasi anak timbangan.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.timbanganPasarBebekAnak,
    imageCaption: 'Timbangan Bebek Pasar Seimbang dengan Anak Timbangan',
    question: 'Perhatikan gambar timbangan pasar (timbangan bebek) di atas! Di piringan sebelah kiri terdapat buah pepaya. Di piringan sebelah kanan diletakkan 1 buah anak timbangan 1 kg dan 1 buah anak timbangan 500 gram hingga posisi timbangan SEIMBANG. Berapakah berat buah pepaya tersebut dalam satuan gram?',
    options: [
      '1.000 gram',
      '1.500 gram',
      '2.000 gram',
      '2.500 gram'
    ],
    correctAnswer: 1,
    explanation: 'Karena timbangan dalam posisi seimbang, berat pepaya sama dengan jumlah anak timbangan di piringan kanan: 1 kg (1.000 gram) + 500 gram = 1.500 gram.'
  },

  // Soal 25: Perkalian & Penjumlahan Berat Beberapa Benda Bahan Kue (L2 - Sedang)
  {
    id: 'pg-25',
    originalNumber: 25,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan soal cerita pembelian beberapa bungkus tepung, siswa dapat menghitung berat total dalam kg.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Bibi membeli 3 bungkus tepung terigu untuk membuat kue bolu. Setiap bungkus memiliki berat 500 gram. Berapakah berat seluruh tepung terigu yang dibeli Bibi jika dinyatakan dalam bentuk kilogram dan gram?',
    options: [
      '1 kg lebih 0 gram',
      '1 kg lebih 500 gram (1.500 gram)',
      '2 kg lebih 0 gram',
      '2 kg lebih 500 gram'
    ],
    correctAnswer: 1,
    explanation: 'Total berat = 3 × 500 gram = 1.500 gram. Karena 1.500 gram = 1.000 gram + 500 gram, maka beratnya adalah 1 kg lebih 500 gram.'
  },

  // Soal 26: Pengurangan / Pemakaian Berat Bahan Masakan (L2 - Sedang)
  {
    id: 'pg-26',
    originalNumber: 26,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan masalah pengurangan berat bahan, siswa dapat menghitung sisa bahan dalam satuan gram.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Ibu mempunyai 1 kg tepung terigu di lemari dapur (1.000 gram). Ibu menggunakan 400 gram tepung tersebut untuk membuat pisang goreng krispi. Berapakah sisa tepung terigu Ibu sekarang?',
    options: [
      '400 gram',
      '500 gram',
      '600 gram',
      '700 gram'
    ],
    correctAnswer: 2,
    explanation: '1 kg = 1.000 gram. Sisa tepung = 1.000 gram - 400 gram = 600 gram.'
  },

  // Soal 27: Penjumlahan Satuan Ons dan Konversi ke Gram (L2 - Sedang)
  {
    id: 'pg-27',
    originalNumber: 27,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat menghitung penjumlahan antarsatuan ons dan mengubah hasilnya ke satuan gram.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Ibu membeli cabai merah seberat 5 ons dan bawang putih seberat 3 ons di pasar. Jika kedua bumbu dapur tersebut digabungkan, berapakah berat totalnya dalam satuan gram?',
    options: [
      '80 gram',
      '800 gram',
      '8.000 gram',
      '80.000 gram'
    ],
    correctAnswer: 1,
    explanation: '5 ons + 3 ons = 8 ons. Karena 1 ons = 100 gram, maka 8 ons = 8 × 100 gram = 800 gram.'
  },

  // Soal 28: Membandingkan & Mengurutkan Berat Berbagai Buah (L2 - Sedang)
  {
    id: 'pg-28',
    originalNumber: 28,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan data penimbangan beberapa buah dengan satuan berbeda, siswa dapat mengurutkannya dari yang paling ringan ke paling berat.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Perhatikan data hasil penimbangan buah berikut:\n• Melon = 1.800 gram\n• Nanas = 900 gram\n• Pepaya = 2 kg\nUrutan buah mulai dari yang PALING RINGAN ke yang PALING BERAT adalah ...',
    options: [
      'Nanas, Melon, Pepaya',
      'Pepaya, Melon, Nanas',
      'Nanas, Pepaya, Melon',
      'Melon, Nanas, Pepaya'
    ],
    correctAnswer: 0,
    explanation: 'Samakan semua ke satuan gram:\n• Nanas = 900 gram\n• Melon = 1.800 gram\n• Pepaya = 2 kg = 2.000 gram\nUrutan dari yang paling ringan: Nanas (900 g) → Melon (1.800 g) → Pepaya (2.000 g).'
  },

  // Soal 29: Analisis Kapasitas Tas Belanjaan Multi-Komponen (L3 - Sukar HOTS)
  {
    id: 'pg-29',
    originalNumber: 29,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan situasi belanja multi-komponen dengan satuan beragam (kg, g, ons), siswa dapat mengevaluasi apakah total belanjaan melebihi kapasitas beban tas.',
    cognitiveLevel: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 1,
    question: 'Ibu membawa sebuah tas belanja kain yang mampu menampung beban maksimal 5 kg (5.000 gram). Di pasar tradisional, Ibu membeli:\n• Beras: 2 kg\n• Gula pasir: 1.500 gram\n• Telur ayam: 10 ons\n• Daging ayam: 800 gram\nApakah seluruh barang belanjaan Ibu tersebut dapat dimasukkan ke dalam tas belanja dengan aman tanpa melebihi batas maksimal?',
    options: [
      'Bisa, karena total belanjaan hanya seberat 4.500 gram sehingga masih tersisa ruang.',
      'Tidak bisa, karena berat total belanjaan adalah 5.300 gram sehingga melebihi kapasitas beban tas belanja.',
      'Bisa, karena berat seluruh belanjaan pas 5.000 gram.',
      'Tidak bisa, karena berat seluruh belanjaan mencapai 6.500 gram.'
    ],
    correctAnswer: 1,
    explanation: 'Mari kita konversikan seluruh barang ke satuan gram:\n• Beras: 2 kg = 2.000 g\n• Gula pasir = 1.500 g\n• Telur: 10 ons = 10 × 100 g = 1.000 g\n• Daging ayam = 800 g\nTotal berat belanjaan = 2.000 + 1.500 + 1.000 + 800 = 5.300 gram (5 kg 300 gram).\nKarena 5.300 gram > 5.000 gram, tas belanja melebihi daya tampung sebesar 300 gram sehingga tidak aman.'
  },

  // Soal 30: Penyeimbangan Anak Timbangan pada Neraca Bebek (L3 - Sukar HOTS) [ALAT UKUR BERAT]
  {
    id: 'pg-30',
    originalNumber: 30,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan konteks penyeimbangan timbangan dua piringan, siswa dapat bernalar menentukan anak timbangan tambahan yang dibutuhkan.',
    cognitiveLevel: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.timbanganPasarBebekAnak,
    imageCaption: 'Penyeimbangan Beban pada Timbangan Pasar (Timbangan Bebek)',
    question: 'Pada sebuah timbangan pasar dua lengan (timbangan bebek), di piringan sebelah kiri diletakkan sekarung beras seberat 3 kg (3.000 gram). Di piringan sebelah kanan baru diletakkan:\n• 1 buah anak timbangan 1 kg\n• 2 buah anak timbangan 500 gram\nBerapa gram anak timbangan lagi yang harus ditambahkan ke piringan kanan agar timbangan tersebut berada dalam posisi SEIMBANG?',
    options: [
      '500 gram',
      '1.000 gram (1 kg)',
      '1.500 gram',
      '2.000 gram'
    ],
    correctAnswer: 1,
    explanation: 'Berat piringan kiri = 3 kg = 3.000 gram.\nBerat piringan kanan saat ini = 1 kg (1.000 g) + 2 × 500 g (1.000 g) = 2.000 gram.\nAgar kedua piringan seimbang, beratnya harus sama (3.000 gram).\nAnak timbangan tambahan yang diperlukan = 3.000 gram - 2.000 gram = 1.000 gram (atau 1 anak timbangan 1 kg).'
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS KATEGORI (10 SOAL: NOMOR 31 s.d. 40)
  // Setiap butir memuat tepat 3 deskripsi/pernyataan yang harus direspons Benar atau Salah!
  // =========================================================================

  // Soal 31: Kategori Alat Ukur Baku Panjang dan Fungsinya (L1 - Mudah)
  {
    id: 'pgk-31',
    originalNumber: 31,
    type: 'kategori',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan 3 pernyataan tentang fungsi alat ukur panjang baku, siswa dapat menentukan kebenarannya (Benar/Salah).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurPanjang,
    imageCaption: 'Kesesuaian Alat Ukur Panjang dengan Benda',
    question: 'Perhatikan fungsi alat ukur panjang berikut! Tentukan apakah setiap pernyataan di bawah ini BENAR atau SALAH!',
    explanation: 'Penggaris digunakan untuk benda pendek, meteran pita untuk kain/tubuh, dan meteran rol tanah untuk bidang panjang seperti lapangan.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-31-1',
        text: 'Penggaris (mistar) sangat tepat digunakan untuk mengukur panjang benda pendek seperti pensil, penghapus, dan buku tulis.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-31-2',
        text: 'Penggaris plastik kecil 30 cm adalah alat yang paling praktis dan tepat untuk mengukur panjang lapangan sepak bola sekolah.',
        correctAnswer: 'Salah'
      },
      {
        id: 'st-31-3',
        text: 'Meteran pita (meteran kain) yang lentur biasanya digunakan oleh penjahit untuk mengukur lingkar pinggang pembeli.',
        correctAnswer: 'Benar'
      }
    ]
  },

  // Soal 32: Kategori Konversi Dasar Satuan Baku Panjang (L1 - Mudah)
  {
    id: 'pgk-32',
    originalNumber: 32,
    type: 'kategori',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan 3 pernyataan konversi satuan panjang (m, cm, km), siswa dapat menganalisis kebenarannya.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.tanggaSatuanPanjang,
    imageCaption: 'Hubungan Antarsatuan Panjang',
    question: 'Tentukan apakah setiap pernyataan mengenai "Konversi Satuan Baku Panjang" berikut ini BENAR atau SALAH!',
    explanation: '1 m = 100 cm, 1 km = 1.000 m. 500 cm = 500 : 100 = 5 m (bukan 50 m).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-32-1',
        text: 'Ukuran panjang 1 meter (m) setara dengan 100 sentimeter (cm).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-32-2',
        text: 'Panjang seutas tali rafia 4 meter jika diubah ke dalam sentimeter adalah 400 sentimeter.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-32-3',
        text: 'Sebuah papan kayu dengan panjang 500 sentimeter memiliki panjang yang sama dengan 50 meter.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 33: Kategori Tata Cara Pengukuran dan Satuan Baku vs Tidak Baku (L1 - Mudah)
  {
    id: 'pgk-33',
    originalNumber: 33,
    type: 'kategori',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan 3 pernyataan tentang cara mengukur dan perbedaan satuan baku serta tak baku, siswa dapat mengevaluasi kebenarannya.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Tentukan apakah setiap pernyataan mengenai cara mengukur dan jenis satuan panjang berikut ini BENAR atau SALAH!',
    explanation: 'Mengukur dengan mistar harus dimulai dari angka 0. Jengkal dan depa adalah satuan tidak baku karena ukuran tangan setiap orang berbeda.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-33-1',
        text: 'Saat mengukur panjang pensil menggunakan penggaris, titik pangkal pensil harus diletakkan sejajar tepat di angka 0 (nol).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-33-2',
        text: 'Satuan panjang baku yang paling umum tertera pada penggaris anak sekolah adalah sentimeter (cm) dan milimeter (mm).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-33-3',
        text: 'Jengkal tangan dan langkah kaki termasuk satuan panjang yang baku karena hasil ukurannya selalu sama persis untuk setiap orang.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 34: Kategori Perbandingan Ukuran Panjang Beragam Satuan (L2 - Sedang)
  {
    id: 'pgk-34',
    originalNumber: 34,
    type: 'kategori',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan 3 pernyataan perbandingan panjang benda dengan satuan berbeda, siswa dapat menilai kebenarannya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Tentukan apakah setiap pernyataan perbandingan ukuran panjang berikut ini BENAR atau SALAH!',
    explanation: '2 m 35 cm = 235 cm. 1 km 500 m = 1.500 m > 1.200 m. Tali 3 meter = 300 cm, jadi lebih panjang dari 250 cm.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-34-1',
        text: 'Panjang pita 2 meter lebih 35 sentimeter jika dinyatakan dalam sentimeter adalah 235 cm.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-34-2',
        text: 'Jarak 1 km 500 m lebih jauh daripada jarak perjalanan 1.200 meter.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-34-3',
        text: 'Tali sepanjang 3 meter berukuran lebih pendek daripada tali sepanjang 250 sentimeter.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 35: Kategori Operasi Hitung Panjang Sehari-hari (L2 - Sedang)
  {
    id: 'pgk-35',
    originalNumber: 35,
    type: 'kategori',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan 3 masalah hitung operasi panjang (penjumlahan, pengurangan, selisih), siswa dapat menguji kebenarannya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Tentukan apakah hasil penyelesaian masalah pengukuran panjang berikut ini BENAR atau SALAH!',
    explanation: '200 cm - 75 cm = 125 cm. 150 cm + 50 cm = 200 cm = 2 m. Selisih 2 km (2.000 m) dengan 800 m adalah 1.200 m (bukan 1.500 m).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-35-1',
        text: 'Made memiliki kawat 2 meter (200 cm). Jika dipotong 75 cm untuk kerajinan, maka sisa kawat Made adalah 125 cm.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-35-2',
        text: 'Menyambungkan dua potong reng kayu berukuran 1 m 50 cm dan 50 cm akan menghasilkan panjang total tepat 2 meter.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-35-3',
        text: 'Selisih jarak antara 2 kilometer (2.000 meter) dengan 800 meter adalah 1.500 meter.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 36: Kategori Pengenalan Alat Ukur Berat (Timbangan) (L1 - Mudah)
  {
    id: 'pgk-36',
    originalNumber: 36,
    type: 'kategori',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan 3 pernyataan tentang fungsi macam-macam timbangan, siswa dapat menentukan kebenarannya.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.alatUkurBerat,
    imageCaption: 'Ragam Jenis Timbangan dan Penggunaannya',
    question: 'Perhatikan kegunaan macam-macam timbangan berikut! Tentukan apakah setiap pernyataan BENAR atau SALAH!',
    explanation: 'Timbangan badan untuk manusia, timbangan dapur untuk bahan kue, dan timbangan bayi khusus untuk memantau tumbuh kembang balita.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-36-1',
        text: 'Timbangan badan digunakan untuk mengetahui berat badan anak dan orang dewasa.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-36-2',
        text: 'Timbangan dapur / kue cocok digunakan untuk menakar bahan makanan seperti tepung terigu, gula pasir, dan mentega.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-36-3',
        text: 'Timbangan bayi di posyandu dirancang untuk menimbang muatan berat sebuah mobil truk bermuatan pasir.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 37: Kategori Hubungan Dasar Satuan Berat Baku (L1 - Mudah)
  {
    id: 'pgk-37',
    originalNumber: 37,
    type: 'kategori',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan 3 pernyataan kesetaraan satuan berat (kg, ons, gram), siswa dapat menilai kebenarannya.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.tanggaSatuanBerat,
    imageCaption: 'Kesetaraan Satuan Baku Berat',
    question: 'Tentukan apakah setiap pernyataan mengenai "Kesetaraan Satuan Berat Baku" berikut BENAR atau SALAH!',
    explanation: '1 kg = 1.000 g, 1 kg = 10 ons, 1 ons = 100 g. 2 kg beras setara dengan 2.000 gram (bukan 200 gram).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-37-1',
        text: '1 kilogram (kg) setara dengan 1.000 gram (g).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-37-2',
        text: '1 kilogram (kg) setara dengan 10 ons (hektogram).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-37-3',
        text: 'Beras seberat 2 kilogram jika diubah ke dalam satuan gram adalah 200 gram.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 38: Kategori Membaca dan Membandingkan Ukuran Berat (L2 - Sedang)
  {
    id: 'pgk-38',
    originalNumber: 38,
    type: 'kategori',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan 3 pernyataan membaca timbangan dan perbandingan berat, siswa dapat mengidentifikasi kebenarannya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.timbanganJarumBuah,
    imageCaption: 'Pembacaan Skala Timbangan',
    question: 'Tentukan apakah setiap pernyataan mengenai pembacaan dan perbandingan berat benda berikut BENAR atau SALAH!',
    explanation: 'Tengah-tengah antara 1 kg dan 2 kg adalah 1 kg 500 g. 2.500 g > 2.000 g (2 kg). 10 bungkus × 100 g = 1.000 g = 1 kg (bukan 5 kg).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-38-1',
        text: 'Jika jarum timbangan berada di tengah-tengah antara angka 1 kg dan 2 kg, maka berat benda tersebut adalah 1 kg 500 gram (1.500 gram).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-38-2',
        text: 'Sebuah semangka seberat 2.500 gram lebih berat daripada buah melon yang beratnya 2 kilogram (2.000 gram).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-38-3',
        text: 'Sebanyak 10 bungkus kopi instan yang masing-masing berbobot 100 gram jika digabungkan beratnya sama dengan 5 kilogram.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 39: Kategori Perhitungan Berat Belanjaan Bahan Dapur (L2 - Sedang)
  {
    id: 'pgk-39',
    originalNumber: 39,
    type: 'kategori',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan 3 situasi hitung belanja bahan masakan, siswa dapat mengevaluasi kebenaran hasilnya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Tentukan apakah setiap perhitungan berat bahan dapur berikut ini BENAR atau SALAH!',
    explanation: '1.000 g - 350 g = 650 g. 4 ons + 6 ons = 10 ons = 1 kg. 3 kantong × 500 g = 1.500 g = 1,5 kg (bukan 3 kg).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-39-1',
        text: 'Ibu memiliki 1 kg gula pasir (1.000 g) lalu memakainya 350 g untuk membuat agar-agar, sehingga sisa gula pasir adalah 650 g.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-39-2',
        text: 'Membeli 4 ons bawang merah dan 6 ons bawang putih sama dengan membeli total bumbu seberat 1 kilogram (10 ons).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-39-3',
        text: 'Berat 3 kantong buah jeruk yang masing-masing berbobot 500 gram jika ditotalkan sama dengan 3 kilogram.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 40: Kategori Penalaran HOTS Pemecahan Masalah Berat & Panjang (L3 - Sukar HOTS)
  {
    id: 'pgk-40',
    originalNumber: 40,
    type: 'kategori',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan 3 pernyataan analisis masalah kontekstual pengukuran berat dan pembagian panjang, siswa dapat mengevaluasi ketepatan pemecahan masalahnya.',
    cognitiveLevel: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 1,
    question: 'Perhatikan tiga pernyataan pemecahan masalah penalaran berikut! Tentukan apakah setiap pernyataan BENAR atau SALAH!',
    explanation: '1) 5 × 4 kg = 20 kg; 20 - 12 = 8 kg = 8.000 gram (Benar). 2) Neraca seimbang: 2 kg = 2 × 1 kg = 4 × 500 g (Benar). 3) 3 m = 300 cm; 300 : 6 = 50 cm per potong (bukan 20 cm).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-40-1',
        text: 'Pedagang buah memiliki 5 keranjang duku yang masing-masing seberat 4 kg. Jika telah terjual 12 kg, sisa duku yang belum terjual adalah 8 kg (8.000 gram).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-40-2',
        text: 'Pada timbangan bebek di pasar, sebiji semangka seberat 2 kg dapat seimbang bila di piringan anak timbangan diletakkan 2 anak timbangan 1 kg atau 4 anak timbangan 500 gram.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-40-3',
        text: 'Pak Budi memiliki sebatang bambu sepanjang 3 meter (300 cm) lalu memotongnya menjadi 6 bagian yang sama panjang. Panjang setiap potongan bambu adalah 20 cm.',
        correctAnswer: 'Salah'
      }
    ]
  }
];

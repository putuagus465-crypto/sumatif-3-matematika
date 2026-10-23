import { Question } from '../types';

// High quality educational SVG Visual Assets for Matematika Kelas 3 SD - Pengukuran Panjang & Berat
const SVG_ICONS = {
  // Tangga Konversi Satuan Panjang (km, hm, dam, m, dm, cm, mm)
  tanggaSatuanPanjang: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 220" width="100%" height="100%">
      <rect width="620" height="220" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="310" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Tangga Satuan Baku Panjang (km s.d. mm)</text>
      
      <!-- Anak Tangga km -> mm -->
      <!-- km -->
      <rect x="25" y="40" width="55" height="26" rx="5" fill="#3b82f6"/>
      <text x="52.5" y="58" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">km</text>
      
      <!-- hm -->
      <rect x="75" y="62" width="55" height="26" rx="5" fill="#2563eb"/>
      <text x="102.5" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">hm</text>
      
      <!-- dam -->
      <rect x="125" y="84" width="55" height="26" rx="5" fill="#1d4ed8"/>
      <text x="152.5" y="102" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">dam</text>
      
      <!-- m (highlighted) -->
      <rect x="175" y="106" width="60" height="28" rx="6" fill="#10b981" stroke="#047857" stroke-width="2"/>
      <text x="205" y="125" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">m</text>
      
      <!-- dm -->
      <rect x="230" y="130" width="55" height="26" rx="5" fill="#0284c7"/>
      <text x="257.5" y="148" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">dm</text>
      
      <!-- cm (highlighted) -->
      <rect x="280" y="152" width="60" height="28" rx="6" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
      <text x="310" y="171" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">cm</text>
      
      <!-- mm -->
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
      
      <!-- Pensil -->
      <!-- Ujung pensil mulai dari x=60 (0 cm) sampai x=420 (12 cm) -> panjang 360 px = 12 cm (30 px per cm) -->
      <g transform="translate(60, 42)">
        <!-- Batang pensil -->
        <rect x="0" y="10" width="320" height="22" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
        <line x1="0" y1="17" x2="320" y2="17" stroke="#fbbf24" stroke-width="2"/>
        <line x1="0" y1="25" x2="320" y2="25" stroke="#d97706" stroke-width="1.5"/>
        <!-- Ujung kayu lancip pensil -->
        <polygon points="320,10 360,21 320,32" fill="#fed7aa" stroke="#ca8a04" stroke-width="1"/>
        <!-- Mata pensil grafit hitam -->
        <polygon points="350,18.5 360,21 350,23.5" fill="#1e293b"/>
        <!-- Penghapus di pangkal -->
        <rect x="-16" y="10" width="16" height="22" rx="3" fill="#f43f5e"/>
        <rect x="-4" y="9" width="6" height="24" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
      </g>

      <!-- Garis bantu ukur -->
      <line x1="60" y1="36" x2="60" y2="82" stroke="#2563eb" stroke-dasharray="3,3" stroke-width="1.5"/>
      <line x1="420" y1="36" x2="420" y2="82" stroke="#dc2626" stroke-dasharray="3,3" stroke-width="1.5"/>
      <text x="60" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">Pangkal = 0 cm</text>
      <text x="420" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">Ujung = 12 cm</text>

      <!-- Penggaris mistar transparan / kuning lembut -->
      <rect x="40" y="90" width="520" height="60" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      
      <!-- Garis skala penggaris (30 px per cm, mulai x=60 = 0 cm s.d. x=510 = 15 cm) -->
      <!-- Skala angka 0 s.d. 15 -->
      <!-- 0 cm -->
      <line x1="60" y1="90" x2="60" y2="114" stroke="#854d0e" stroke-width="2.5"/>
      <text x="60" y="132" font-family="sans-serif" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">0</text>

      <!-- 1 cm -->
      <line x1="90" y1="90" x2="90" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="90" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">1</text>

      <!-- 2 cm -->
      <line x1="120" y1="90" x2="120" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="120" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">2</text>

      <!-- 3 cm -->
      <line x1="150" y1="90" x2="150" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="150" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">3</text>

      <!-- 4 cm -->
      <line x1="180" y1="90" x2="180" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="180" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">4</text>

      <!-- 5 cm -->
      <line x1="210" y1="90" x2="210" y2="114" stroke="#854d0e" stroke-width="2"/>
      <text x="210" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">5</text>

      <!-- 6 cm -->
      <line x1="240" y1="90" x2="240" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="240" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">6</text>

      <!-- 7 cm -->
      <line x1="270" y1="90" x2="270" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="270" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">7</text>

      <!-- 8 cm -->
      <line x1="300" y1="90" x2="300" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="300" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">8</text>

      <!-- 9 cm -->
      <line x1="330" y1="90" x2="330" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="330" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">9</text>

      <!-- 10 cm -->
      <line x1="360" y1="90" x2="360" y2="114" stroke="#854d0e" stroke-width="2"/>
      <text x="360" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">10</text>

      <!-- 11 cm -->
      <line x1="390" y1="90" x2="390" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="390" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">11</text>

      <!-- 12 cm (highlighted target) -->
      <line x1="420" y1="90" x2="420" y2="116" stroke="#b91c1c" stroke-width="3"/>
      <text x="420" y="133" font-family="sans-serif" font-size="12" font-weight="extrabold" fill="#b91c1c" text-anchor="middle">12</text>

      <!-- 13 cm -->
      <line x1="450" y1="90" x2="450" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="450" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">13</text>

      <!-- 14 cm -->
      <line x1="480" y1="90" x2="480" y2="112" stroke="#854d0e" stroke-width="1.5"/>
      <text x="480" y="132" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">14</text>

      <!-- Satuan cm -->
      <text x="530" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#854d0e">cm</text>
    </svg>
  `)}`,

  // Tangga Konversi Satuan Berat (kg, hg/ons, dag, g, dg, cg, mg)
  tanggaSatuanBerat: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 220" width="100%" height="100%">
      <rect width="620" height="220" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="310" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Tangga Satuan Baku Berat (Massa: kg, ons, gram)</text>
      
      <!-- kg -->
      <rect x="25" y="40" width="60" height="28" rx="6" fill="#10b981" stroke="#047857" stroke-width="2"/>
      <text x="55" y="59" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">kg</text>
      
      <!-- hg / ons -->
      <rect x="80" y="66" width="65" height="28" rx="6" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
      <text x="112.5" y="85" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">hg (ons)</text>
      
      <!-- dag -->
      <rect x="140" y="90" width="55" height="26" rx="5" fill="#0284c7"/>
      <text x="167.5" y="108" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">dag</text>
      
      <!-- g (gram) -->
      <rect x="195" y="114" width="60" height="28" rx="6" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <text x="225" y="133" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">g (gram)</text>
      
      <!-- dg -->
      <rect x="250" y="138" width="55" height="26" rx="5" fill="#64748b"/>
      <text x="277.5" y="156" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">dg</text>
      
      <!-- cg -->
      <rect x="300" y="160" width="55" height="26" rx="5" fill="#64748b"/>
      <text x="327.5" y="178" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">cg</text>
      
      <!-- mg -->
      <rect x="350" y="180" width="55" height="26" rx="5" fill="#475569"/>
      <text x="377.5" y="198" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">mg</text>
      
      <!-- Kotak Kunci Konversi Satuan Berat -->
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

  // Ilustrasi Timbangan Jarum Buah Apel (Tepat Menunjuk 2 kg)
  timbanganJarumBuah: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="100%" height="100%">
      <rect width="500" height="240" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="250" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Membaca Hasil Pengukuran pada Timbangan Jarum</text>
      
      <!-- Piring Timbangan & Buah Apel -->
      <path d="M 160 50 L 340 50 L 320 65 L 180 65 Z" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
      <!-- Tiang penyangga piring -->
      <rect x="242" y="65" width="16" height="25" fill="#64748b"/>
      
      <!-- Apel di atas piring timbangan -->
      <g transform="translate(190, 20)">
        <circle cx="25" cy="22" r="16" fill="#ef4444"/>
        <path d="M 25 6 Q 28 0 32 3" stroke="#15803d" stroke-width="2.5" fill="none"/>
        <circle cx="58" cy="24" r="16" fill="#dc2626"/>
        <circle cx="92" cy="22" r="16" fill="#ef4444"/>
        <circle cx="42" cy="10" r="14" fill="#b91c1c"/>
        <circle cx="75" cy="10" r="14" fill="#dc2626"/>
      </g>
      
      <!-- Badan Timbangan Bulat -->
      <rect x="180" y="85" width="140" height="135" rx="12" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
      <!-- Dial Jam Timbangan Lingkaran -->
      <circle cx="250" cy="150" r="54" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
      
      <!-- Angka-angka pada dial timbangan (0, 1, 2, 3, 4, 5 kg) -->
      <!-- 0 / 5 kg di atas (12 o'clock) -->
      <text x="250" y="112" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">0 kg</text>
      <!-- 1 kg (sekitar jam 2) -->
      <text x="288" y="132" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">1</text>
      <!-- 2 kg (sekitar jam 4 - 5) -> DITUNJUK JARUM! -->
      <text x="284" y="178" font-family="sans-serif" font-size="12" font-weight="extrabold" fill="#b91c1c" text-anchor="middle">2 kg</text>
      <!-- 3 kg (sekitar jam 7) -->
      <text x="216" y="178" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">3</text>
      <!-- 4 kg (sekitar jam 10) -->
      <text x="212" y="132" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">4</text>
      
      <!-- Titik tengah poros jarum -->
      <circle cx="250" cy="150" r="4" fill="#0f172a"/>
      
      <!-- Jarum Penunjuk Merah Mengarah TEPAT ke Angka 2 kg (arah kanan bawah, dx=28, dy=22) -->
      <line x1="250" y1="150" x2="280" y2="172" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <polygon points="280,172 272,166 276,160" fill="#dc2626"/>
      
      <!-- Keterangan Banner Hasil -->
      <g transform="translate(350, 100)">
        <rect width="135" height="95" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
        <text x="67.5" y="22" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Hasil Pembacaan:</text>
        <line x1="10" y1="28" x2="125" y2="28" stroke="#fca5a5"/>
        <text x="67.5" y="48" font-family="sans-serif" font-size="14" font-weight="extrabold" fill="#dc2626" text-anchor="middle">2 kg</text>
        <text x="67.5" y="66" font-family="sans-serif" font-size="9" fill="#7f1d1d" text-anchor="middle">setara dengan</text>
        <text x="67.5" y="82" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">2.000 gram</text>
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

  // Soal 4: Hubungan Satuan Meter ke Sentimeter (L1 - Mudah)
  {
    id: 'pg-4',
    originalNumber: 4,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Siswa dapat menentukan hubungan kesetaraan antara satuan meter (m) dan sentimeter (cm).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.tanggaSatuanPanjang,
    imageCaption: 'Tangga Konversi Satuan Panjang',
    question: 'Berdasarkan tangga konversi satuan panjang baku, 1 meter (m) setara dengan berapa sentimeter (cm)?',
    options: [
      '10 cm',
      '100 cm',
      '1.000 cm',
      '10.000 cm'
    ],
    correctAnswer: 1,
    explanation: 'Dari meter (m) ke sentimeter (cm) turun 2 tangga (dikali 10 × 10 = 100). Jadi, 1 m = 100 cm.'
  },

  // Soal 5: Konversi Panjang Bilangan Bulat Meter ke Sentimeter (L1 - Mudah)
  {
    id: 'pg-5',
    originalNumber: 5,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Siswa dapat mengonversi ukuran panjang meter ke sentimeter pada bilangan bulat sederhana.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Siti membeli pita hias berwarna merah sepanjang 3 meter untuk menghias kado ulang tahun. Jika panjang pita tersebut dinyatakan dalam satuan sentimeter (cm), maka panjangnya adalah ... cm.',
    options: [
      '30 cm',
      '300 cm',
      '3.000 cm',
      '30.000 cm'
    ],
    correctAnswer: 1,
    explanation: 'Karena 1 m = 100 cm, maka 3 m = 3 × 100 cm = 300 cm.'
  },

  // Soal 6: Konversi Sentimeter ke Meter (L1 - Mudah)
  {
    id: 'pg-6',
    originalNumber: 6,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Siswa dapat mengonversi ukuran panjang dari sentimeter (cm) ke meter (m).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Panjang papan tulis di ruang kelas III adalah 200 sentimeter. Panjang papan tulis tersebut setara dengan ... meter.',
    options: [
      '2 meter',
      '20 meter',
      '200 meter',
      '0,2 meter'
    ],
    correctAnswer: 0,
    explanation: 'Karena 100 cm = 1 m, maka 200 cm = 200 : 100 = 2 meter.'
  },

  // Soal 7: Alat Ukur Pertukangan / Bangunan (L1 - Mudah)
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

  // Soal 10: Mengubah Sentimeter Menjadi Bentuk Meter dan Sentimeter (L2 - Sedang)
  {
    id: 'pg-10',
    originalNumber: 10,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Siswa dapat menguraikan ukuran dalam sentimeter menjadi gabungan meter dan sentimeter.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Hasil pengukuran panjang meja belajar Edo adalah 185 sentimeter. Ukuran panjang meja tersebut sama dengan ...',
    options: [
      '1 m lebih 85 cm',
      '18 m lebih 5 cm',
      '10 m lebih 85 cm',
      '1 m lebih 8 cm'
    ],
    correctAnswer: 0,
    explanation: '185 cm = 100 cm + 85 cm. Karena 100 cm = 1 m, maka 185 cm = 1 m lebih 85 cm.'
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

  // Soal 12: Pengurangan / Sisa Panjang Benda dalam Cerita (L2 - Sedang)
  {
    id: 'pg-12',
    originalNumber: 12,
    type: 'pilihan_ganda',
    category: 'Pengukuran Panjang',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_PANJANG,
    indikator: 'Disajikan masalah pemotongan benda, siswa dapat menghitung sisa panjang dalam satuan sentimeter.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Udin mempunyai sebatang bambu sepanjang 3 meter (300 cm). Bambu tersebut dipotong sepanjang 120 cm untuk membuat tiang bendera kecil. Berapakah panjang sisa bambu Udin yang belum terpakai?',
    options: [
      '180 cm',
      '150 cm',
      '220 cm',
      '80 cm'
    ],
    correctAnswer: 0,
    explanation: 'Panjang awal bambu = 3 m = 300 cm. Panjang sisa = 300 cm - 120 cm = 180 cm.'
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

  // Soal 16: Alat Ukur Baku untuk Berat Badan (L1 - Mudah)
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

  // Soal 17: Hubungan Kilogram ke Gram (L1 - Mudah)
  {
    id: 'pg-17',
    originalNumber: 17,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat menentukan hubungan kesetaraan antara satuan kilogram (kg) dan gram (g).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.tanggaSatuanBerat,
    imageCaption: 'Tangga Satuan Baku Berat',
    question: '1 kilogram (kg) beras setara dengan berapa gram (g)?',
    options: [
      '10 gram',
      '100 gram',
      '1.000 gram',
      '10.000 gram'
    ],
    correctAnswer: 2,
    explanation: '1 kilogram (kg) = 1.000 gram (g). Dari kg ke gram turun 3 anak tangga (× 10 × 10 × 10 = 1.000).'
  },

  // Soal 18: Hubungan Kilogram ke Ons (Hektogram) (L1 - Mudah)
  {
    id: 'pg-18',
    originalNumber: 18,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat menentukan kesetaraan antara satuan kilogram (kg) dan ons (hg).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: '1 kilogram (kg) sama dengan berapa ons?',
    options: [
      '5 ons',
      '10 ons',
      '100 ons',
      '1.000 ons'
    ],
    correctAnswer: 1,
    explanation: '1 kilogram (kg) setara dengan 10 ons (hektogram). Satuan 1 hg biasa disebut 1 ons di Indonesia.'
  },

  // Soal 19: Hubungan Ons ke Gram (L1 - Mudah)
  {
    id: 'pg-19',
    originalNumber: 19,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat menentukan kesetaraan antara satuan 1 ons dan gram.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: '1 ons setara dengan berapa gram?',
    options: [
      '10 gram',
      '100 gram',
      '500 gram',
      '1.000 gram'
    ],
    correctAnswer: 1,
    explanation: 'Karena 1 kg = 10 ons dan 1 kg = 1.000 gram, maka 1 ons = 1.000 : 10 = 100 gram.'
  },

  // Soal 20: Membaca Hasil Timbangan Jarum Buah (L1 - Mudah)
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

  // Soal 23: Konversi Campuran kg dan gram ke Gram (L2 - Sedang)
  {
    id: 'pg-23',
    originalNumber: 23,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Disajikan ukuran berat campuran kg dan gram, siswa dapat mengonversi seluruhnya ke gram.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Ibu membeli sekarung kecil gula pasir seberat 2 kg lebih 250 gram (2 kg 250 g). Berapakah berat seluruh gula pasir tersebut jika dinyatakan dalam satuan gram?',
    options: [
      '2.250 gram',
      '2.025 gram',
      '450 gram',
      '22.500 gram'
    ],
    correctAnswer: 0,
    explanation: '2 kg = 2 × 1.000 g = 2.000 g. Total berat = 2.000 g + 250 g = 2.250 gram.'
  },

  // Soal 24: Mengubah Gram Menjadi Bentuk Kilogram dan Gram (L2 - Sedang)
  {
    id: 'pg-24',
    originalNumber: 24,
    type: 'pilihan_ganda',
    category: 'Pengukuran Berat',
    elemen: ELEMEN_PENGUKURAN,
    capaianPembelajaran: CP_PENGUKURAN,
    tujuanPembelajaran: TP_BERAT,
    indikator: 'Siswa dapat menguraikan nilai ribuan gram menjadi bentuk kilogram dan sisa gram.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Berat sekantong buah mangga harum manis adalah 3.600 gram. Berat mangga tersebut sama dengan ...',
    options: [
      '3 kg lebih 600 gram',
      '36 kg lebih 0 gram',
      '3 kg lebih 60 gram',
      '30 kg lebih 600 gram'
    ],
    correctAnswer: 0,
    explanation: '3.600 gram = 3.000 gram + 600 gram = 3 kg lebih 600 gram.'
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

  // Soal 30: Penyeimbangan Anak Timbangan pada Neraca Bebek (L3 - Sukar HOTS)
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

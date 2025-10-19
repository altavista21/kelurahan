export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface News {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  content: string;
  author: string;
}

export interface UMKM {
  id: string;
  name: string;
  category: string;
  description: string;
  owner: string;
  phone: string;
  address: string;
  image?: string;
}

export interface Complaint {
  id: string;
  referenceNumber: string;
  category: string;
  title: string;
  description: string;
  status: "diterima" | "diproses" | "selesai";
  date: string;
  image?: string;
}

export interface ServiceRequest {
  id: string;
  referenceNumber: string;
  serviceType: string;
  status: "perlu_verifikasi" | "diproses" | "siap_diambil" | "selesai";
  date: string;
}

export const services: Service[] = [
  {
    id: "1",
    name: "Surat Keterangan",
    description: "Ajukan berbagai surat keterangan online",
    icon: "📄",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "2",
    name: "Pengaduan Warga",
    description: "Laporkan masalah atau keluhan Anda",
    icon: "📢",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "3",
    name: "Berita & Info",
    description: "Informasi terkini dari kelurahan",
    icon: "📰",
    color: "from-green-400 to-green-600",
  },
  {
    id: "4",
    name: "UMKM Warga",
    description: "Daftar usaha lokal warga",
    icon: "🏪",
    color: "from-orange-400 to-orange-600",
  },
];

export const news: News[] = [
  {
    id: "1",
    title: "Program Vaksinasi Gratis untuk Warga Kelurahan",
    excerpt: "Kelurahan mengadakan program vaksinasi gratis untuk semua warga...",
    date: "2024-01-15",
    category: "kesehatan",
    image: "https://via.placeholder.com/600x400?text=Vaksinasi",
    content:
      "Pemerintah Kelurahan mengumumkan pelaksanaan program vaksinasi gratis untuk seluruh warga yang belum mendapatkan vaksin lengkap. Program ini dilaksanakan setiap hari Senin sampai Jumat di Puskesmas Kelurahan.",
    author: "Kantor Kelurahan",
  },
  {
    id: "2",
    title: "Pembersihan Saluran Air Bulanan",
    excerpt: "Kegiatan pembersihan saluran air diselenggarakan untuk mencegah banjir...",
    date: "2024-01-10",
    category: "lingkungan",
    image: "https://via.placeholder.com/600x400?text=Pembersihan",
    content:
      "Setiap bulan, Tim Kebersihan Kelurahan melakukan pembersihan saluran air untuk mencegah penyumbatan dan banjir. Kegiatan ini dilakukan dengan melibatkan warga lokal.",
    author: "Tim Lingkungan",
  },
  {
    id: "3",
    title: "Pameran UMKM Warga Kelurahan",
    excerpt: "Dukung produk lokal melalui pameran UMKM yang akan segera dilaksanakan...",
    date: "2024-01-05",
    category: "ekonomi",
    image: "https://via.placeholder.com/600x400?text=UMKM",
    content:
      "Pemerintah Kelurahan akan menyelenggarakan pameran UMKM untuk memperkenalkan produk-produk unggulan dari usaha kecil menengah warga setempat.",
    author: "Kantor Kelurahan",
  },
];

export const umkms: UMKM[] = [
  {
    id: "1",
    name: "Toko Roti Budi",
    category: "makanan",
    description: "Produksi roti fresh setiap hari",
    owner: "Budi Santoso",
    phone: "082123456789",
    address: "Jl. Mawar No. 15, Kelurahan",
    image: "https://via.placeholder.com/400x300?text=Roti+Budi",
  },
  {
    id: "2",
    name: "Batik Sinta",
    category: "kerajinan",
    description: "Batik tradisional dengan motif lokal",
    owner: "Sinta Wulandari",
    phone: "081234567890",
    address: "Jl. Kenanga No. 8, Kelurahan",
    image: "https://via.placeholder.com/400x300?text=Batik+Sinta",
  },
  {
    id: "3",
    name: "Jasanya Listrik Setia",
    category: "jasa",
    description: "Layanan perbaikan dan instalasi listrik",
    owner: "Setia Mahendra",
    phone: "082987654321",
    address: "Jl. Cendana No. 22, Kelurahan",
    image: "https://via.placeholder.com/400x300?text=Listrik+Setia",
  },
  {
    id: "4",
    name: "Mie Ayam Meriah",
    category: "makanan",
    description: "Mie ayam dengan resep tradisional",
    owner: "Meriah Susanti",
    phone: "081234567891",
    address: "Jl. Melati No. 5, Kelurahan",
    image: "https://via.placeholder.com/400x300?text=Mie+Ayam",
  },
];

export const complaints: Complaint[] = [
  {
    id: "1",
    referenceNumber: "ADU-2024-001",
    category: "fasilitas umum",
    title: "Jalan berlubang di Jalan Merdeka",
    description: "Ada lubang besar di jalan merdeka yang membahayakan kendaraan",
    status: "diproses",
    date: "2024-01-14",
  },
  {
    id: "2",
    referenceNumber: "ADU-2024-002",
    category: "keamanan",
    title: "Lampu jalan mati",
    description: "Lampu jalan di sekitar taman sudah tidak berfungsi berbulan-bulan",
    status: "diterima",
    date: "2024-01-15",
  },
  {
    id: "3",
    referenceNumber: "ADU-2024-003",
    category: "lingkungan",
    title: "Sampah menumpuk di tepi jalan",
    description: "Sampah konstruksi menumpuk di tepi jalan tanpa dibersihkan",
    status: "selesai",
    date: "2024-01-10",
  },
];

export const serviceRequests: ServiceRequest[] = [
  {
    id: "1",
    referenceNumber: "SKT-2024-001",
    serviceType: "Surat Keterangan Domisili",
    status: "siap_diambil",
    date: "2024-01-14",
  },
  {
    id: "2",
    referenceNumber: "SKT-2024-002",
    serviceType: "Surat Keterangan Usaha",
    status: "diproses",
    date: "2024-01-15",
  },
];

export const kelurahanInfo = {
  name: "Kelurahan Merdeka",
  district: "Kecamatan Sejahtera",
  city: "Kota Bahagia",
  population: "12,450",
  area: "3.25 km²",
  phone: "(021) 1234-5678",
  email: "info@kelurahansejahtera.go.id",
  address: "Jl. Raya Merdeka No. 100, Kota Bahagia",
  lurahName: "H. Danu Kusuma, S.Pd.",
  sambutan:
    "Selamat datang di website resmi Kelurahan Merdeka. Kami berkomitmen untuk memberikan pelayanan publik yang transparan dan berkualitas kepada seluruh warga. Melalui portal ini, kami memudahkan warga untuk mengakses berbagai layanan administrasi dan informasi penting tentang kelurahan kami.",
  vision: "Menjadi kelurahan yang sejahtera, aman, dan bermartabat",
  mission: [
    "Memberikan layanan publik yang transparan dan akuntabel",
    "Meningkatkan kualitas hidup warga melalui pemberdayaan masyarakat",
    "Menjaga keamanan dan ketertiban lingkungan",
    "Mengembangkan potensi UMKM lokal",
  ],
};

export const statistics = {
  population: {
    labels: ["Laki-laki", "Perempuan"],
    data: [6200, 6250],
    colors: ["#3b82f6", "#22c55e"],
  },
  education: {
    labels: ["SD", "SMP", "SMA", "Diploma", "S1", "S2"],
    data: [2100, 2800, 3200, 1500, 2200, 650],
    colors: ["#3b82f6", "#06b6d4", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"],
  },
  profession: {
    labels: ["Petani", "Pedagang", "PNS", "Swasta", "Pengangguran", "Lainnya"],
    data: [2500, 3200, 1800, 3500, 800, 650],
    colors: ["#3b82f6", "#06b6d4", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"],
  },
};

import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  MessageSquare,
  Newspaper,
  TrendingUp,
  MapPin,
  Users,
  Clock,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { kelurahanInfo, services, news, umkms, complaints } from "@/lib/data";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Selamat Datang di {kelurahanInfo.name}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                {kelurahanInfo.sambutan}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/pelayanan"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Ajukan Surat
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/aduan"
                  className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition border-2 border-white"
                >
                  Lapor Keluhan
                  <MessageSquare className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-400 bg-opacity-20 p-3 rounded-lg">
                      <Users size={28} />
                    </div>
                    <div>
                      <p className="text-blue-100">Jumlah Penduduk</p>
                      <p className="text-2xl font-bold">
                        {kelurahanInfo.population}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-400 bg-opacity-20 p-3 rounded-lg">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-blue-100">Luas Wilayah</p>
                      <p className="text-2xl font-bold">{kelurahanInfo.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-400 bg-opacity-20 p-3 rounded-lg">
                      <Clock size={28} />
                    </div>
                    <div>
                      <p className="text-blue-100">Jam Layanan</p>
                      <p className="text-xl font-bold">08:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Mobile */}
      <section className="md:hidden bg-slate-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <p className="text-xl font-bold text-blue-600">
                {kelurahanInfo.population}
              </p>
              <p className="text-xs text-slate-600 mt-1">Penduduk</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <p className="text-xl font-bold text-green-600">
                {kelurahanInfo.area}
              </p>
              <p className="text-xs text-slate-600 mt-1">km²</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <p className="text-xl font-bold text-purple-600">08-16</p>
              <p className="text-xs text-slate-600 mt-1">Jam Layanan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Menu Layanan Cepat
            </h2>
            <p className="text-lg text-slate-600">
              Akses berbagai layanan publik dengan mudah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className={`bg-gradient-to-br ${service.color} text-white rounded-xl p-8 cursor-pointer transform hover:scale-105 transition shadow-lg`}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                  <div className="mt-4 flex items-center text-sm font-semibold">
                    Akses Layanan <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Berita & Pengumuman
              </h2>
              <p className="text-lg text-slate-600">
                Informasi terkini dari kelurahan
              </p>
            </div>
            <Link
              to="/berita"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              Lihat Semua <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(0, 3).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {article.category === "kesehatan"
                      ? "🏥"
                      : article.category === "lingkungan"
                        ? "🌍"
                        : "💼"}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-blue-600 font-semibold mb-2">
                    {article.category.toUpperCase()}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">
                      {article.date}
                    </span>
                    <Link
                      to="/berita"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      Baca →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UMKM Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                UMKM Warga Setempat
              </h2>
              <p className="text-lg text-slate-600">
                Dukung produk lokal dari usaha warga
              </p>
            </div>
            <Link
              to="/umkm"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              Lihat Semua <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {umkms.slice(0, 4).map((umkm) => (
              <div
                key={umkm.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="h-40 bg-gradient-to-r from-orange-300 to-yellow-300 flex items-center justify-center text-5xl">
                  {umkm.category === "makanan"
                    ? "🍜"
                    : umkm.category === "kerajinan"
                      ? "🎨"
                      : "🔧"}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 mb-1">{umkm.name}</h3>
                  <p className="text-xs text-green-600 font-semibold mb-2">
                    {umkm.category.toUpperCase()}
                  </p>
                  <p className="text-sm text-slate-600 mb-3">
                    {umkm.description}
                  </p>
                  <p className="text-xs text-slate-500 mb-2">
                    Pemilik: {umkm.owner}
                  </p>
                  <a
                    href={`https://wa.me/62${umkm.phone.slice(1)}`}
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Hubungi →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Complaints Stats */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Status Pengaduan Warga
              </h2>
              <p className="text-lg text-slate-600">
                Pantau pengaduan Anda secara real-time
              </p>
            </div>
            <Link
              to="/aduan"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              Buat Pengaduan <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {complaints.slice(0, 3).map((complaint) => (
              <div
                key={complaint.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border-l-4 border-blue-600"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {complaint.referenceNumber}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {complaint.title}
                    </h3>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      complaint.status === "selesai"
                        ? "bg-green-100 text-green-700"
                        : complaint.status === "diproses"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {complaint.status.charAt(0).toUpperCase() +
                      complaint.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  {complaint.description}
                </p>
                <p className="text-xs text-slate-500">{complaint.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/aduan"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Lihat Semua Pengaduan <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lurah Welcome Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 text-center">
              <div className="text-6xl mb-4">👨‍⚖️</div>
              <h3 className="text-2xl font-bold mb-2">Sambutan Lurah</h3>
              <p className="text-blue-100">{kelurahanInfo.lurahName}</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Visi & Misi Kami
              </h3>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20 mb-6">
                <h4 className="font-bold text-lg mb-2">Visi</h4>
                <p className="text-blue-100">{kelurahanInfo.vision}</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
                <h4 className="font-bold text-lg mb-3">Misi</h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  {kelurahanInfo.mission.map((mission, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Butuh Bantuan?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Hubungi kami melalui berbagai saluran komunikasi yang tersedia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontak"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <MapPin size={20} className="mr-2" />
              Kunjungi Kantor
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              <MessageSquare size={20} className="mr-2" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

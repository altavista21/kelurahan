import { MapPin, Users, Building2, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { kelurahanInfo } from "@/lib/data";

export default function Profil() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Profil Kelurahan</h1>
          <p className="text-blue-100 mt-2">
            Mengenal lebih dekat {kelurahanInfo.name}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Info Section */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Tentang {kelurahanInfo.name}
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Lokasi</h3>
                  <p className="text-slate-600">{kelurahanInfo.address}</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Wilayah Administratif
                  </h3>
                  <p className="text-slate-600">
                    {kelurahanInfo.district}, {kelurahanInfo.city}
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Pimpinan</h3>
                  <p className="text-slate-600">{kelurahanInfo.lurahName}</p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Statistik Wilayah
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 text-sm">Jumlah Penduduk</p>
                      <p className="text-3xl font-bold text-blue-600">
                        {kelurahanInfo.population}
                      </p>
                    </div>
                    <Users size={40} className="text-blue-400" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 text-sm">Luas Wilayah</p>
                      <p className="text-3xl font-bold text-green-600">
                        {kelurahanInfo.area}
                      </p>
                    </div>
                    <MapPin size={40} className="text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <Building2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Visi</h3>
              </div>
              <p className="text-slate-700 text-lg">{kelurahanInfo.vision}</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 text-white p-2 rounded-lg">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Misi</h3>
              </div>
              <ul className="space-y-3">
                {kelurahanInfo.mission.map((mission, idx) => (
                  <li key={idx} className="flex items-start text-slate-700">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sejarah */}
          <div className="bg-slate-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Sejarah</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {kelurahanInfo.name} memiliki sejarah panjang sebagai wilayah
              administratif yang berkembang pesat. Sejak didirikan, kelurahan
              ini telah menjadi pusat kegiatan ekonomi, sosial, dan budaya di
              wilayahnya.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Dengan terus berinovasi dalam memberikan pelayanan publik,{" "}
              {kelurahanInfo.name} berkomitmen untuk meningkatkan kualitas hidup
              warganya dan menciptakan lingkungan yang aman, nyaman, dan
              sejahtera.
            </p>
          </div>

          {/* Struktur Organisasi */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Struktur Organisasi
            </h2>
            <p className="text-slate-600 mb-8">
              Kelurahan {kelurahanInfo.name} dipimpin oleh seorang Lurah yang
              bertanggung jawab atas pengelolaan administrasi dan pelayanan
              publik. Organisasi kelurahan terdiri dari beberapa bagian/seksi
              yang bekerja secara koordinatif untuk melayani kebutuhan warga.
            </p>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">
                  Lurah
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white inline-block px-4 py-2 rounded font-semibold">
                    Seksi Administrasi
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-600 text-white inline-block px-4 py-2 rounded font-semibold">
                    Seksi Pembangunan
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="bg-purple-600 text-white inline-block px-4 py-2 rounded font-semibold">
                    Seksi Kesejahteraan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Lokasi Wilayah
          </h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg h-96 md:h-[500px]">
            <iframe
              title="Peta Kelurahan"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7156239291346!2d106.8129434!3d-6.2299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sIndonesia!2sIndonesia!5e0!3m2!1sid!2sid!4v1234567890"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

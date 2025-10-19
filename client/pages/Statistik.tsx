import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { statistics, kelurahanInfo } from "@/lib/data";
import { BarChart, PieChart, Users } from "lucide-react";

export default function Statistik() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Statistik Wilayah</h1>
          <p className="text-blue-100 mt-2">
            Data demografi dan informasi wilayah {kelurahanInfo.name}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Jumlah Penduduk</p>
                  <p className="text-4xl font-bold text-blue-600 mt-2">
                    {kelurahanInfo.population}
                  </p>
                </div>
                <Users size={48} className="text-blue-400" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-8 border-l-4 border-green-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Luas Wilayah</p>
                  <p className="text-4xl font-bold text-green-600 mt-2">
                    {kelurahanInfo.area}
                  </p>
                </div>
                <span className="text-5xl">📍</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-8 border-l-4 border-purple-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Kepadatan Penduduk</p>
                  <p className="text-4xl font-bold text-purple-600 mt-2">
                    {(parseInt(kelurahanInfo.population.replace(/,/g, "")) / 3.25).toFixed(0)}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">jiwa/km²</p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Population by Gender */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <BarChart size={28} className="text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Distribusi Gender</h3>
              </div>

              <div className="space-y-6">
                {statistics.population.labels.map((label, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-700">
                        {label}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {statistics.population.data[idx].toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full"
                        style={{
                          backgroundColor: statistics.population.colors[idx],
                          width: `${(statistics.population.data[idx] / parseInt(kelurahanInfo.population.replace(/,/g, ""))) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Distribution */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <BarChart size={28} className="text-green-600" />
                <h3 className="text-xl font-bold text-slate-900">Distribusi Pendidikan</h3>
              </div>

              <div className="space-y-4">
                {statistics.education.labels.map((label, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-700">
                        {label}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {statistics.education.data[idx]}
                      </span>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full"
                        style={{
                          backgroundColor: statistics.education.colors[idx],
                          width: `${(statistics.education.data[idx] / 12850) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profession Distribution */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <BarChart size={28} className="text-purple-600" />
                <h3 className="text-xl font-bold text-slate-900">Distribusi Pekerjaan</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {statistics.profession.labels.slice(0, 3).map((label, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-slate-700">
                          {label}
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {statistics.profession.data[idx]}
                        </span>
                      </div>
                      <div className="w-full bg-slate-300 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full"
                          style={{
                            backgroundColor: statistics.profession.colors[idx],
                            width: `${(statistics.profession.data[idx] / 12950) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {statistics.profession.labels.slice(3).map((label, idx) => (
                    <div key={idx + 3}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-slate-700">
                          {label}
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {statistics.profession.data[idx + 3]}
                        </span>
                      </div>
                      <div className="w-full bg-slate-300 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full"
                          style={{
                            backgroundColor: statistics.profession.colors[idx + 3],
                            width: `${(statistics.profession.data[idx + 3] / 12950) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Catatan</h3>
            <p className="text-slate-700">
              Data statistik di atas diperbarui secara berkala berdasarkan data terbaru
              dari Badan Pusat Statistik (BPS) dan pencatatan lokal Kelurahan
              {kelurahanInfo.name}. Untuk informasi lebih detail dan terbaru, silakan
              menghubungi kantor kelurahan.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

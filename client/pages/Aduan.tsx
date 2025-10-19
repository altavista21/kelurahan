import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { complaints } from "@/lib/data";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Aduan() {
  const [activeTab, setActiveTab] = useState("ajukan");
  const [selectedCategory, setSelectedCategory] = useState("lingkungan");

  const categories = [
    { value: "lingkungan", label: "Lingkungan", icon: "🌍" },
    { value: "fasilitas", label: "Fasilitas Umum", icon: "🏗️" },
    { value: "keamanan", label: "Keamanan", icon: "🚨" },
    { value: "pendidikan", label: "Pendidikan", icon: "📚" },
    { value: "kesehatan", label: "Kesehatan", icon: "🏥" },
    { value: "lainnya", label: "Lainnya", icon: "📋" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Aduan Warga</h1>
          <p className="text-purple-100 mt-2">
            Laporkan masalah atau keluhan Anda untuk perbaikan lebih baik
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b">
            <button
              onClick={() => setActiveTab("ajukan")}
              className={`px-6 py-3 font-semibold border-b-2 transition ${
                activeTab === "ajukan"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              Buat Laporan Aduan
            </button>
            <button
              onClick={() => setActiveTab("tracking")}
              className={`px-6 py-3 font-semibold border-b-2 transition ${
                activeTab === "tracking"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              Lacak Aduan
            </button>
          </div>

          {/* Buat Aduan Tab */}
          {activeTab === "ajukan" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Pilih Kategori
                </h2>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition font-medium flex items-center gap-3 ${
                        selectedCategory === cat.value
                          ? "bg-purple-600 text-white"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                      }`}
                    >
                      <span>{cat.icon}</span>
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Form Laporan Aduan
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Nama Pelapor
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        placeholder="Masukkan nomor telepon"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Judul Aduan
                      </label>
                      <input
                        type="text"
                        placeholder="Ringkas masalah Anda"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Deskripsi Lengkap
                      </label>
                      <textarea
                        placeholder="Jelaskan detail masalah yang ingin dilaporkan"
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Lokasi/Alamat Kejadian
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan lokasi tempat kejadian"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Upload Foto Pendukung
                      </label>
                      <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 text-center cursor-pointer hover:border-purple-600 transition">
                        <Upload
                          size={32}
                          className="mx-auto text-purple-600 mb-2"
                        />
                        <p className="text-sm text-slate-600">
                          Klik untuk upload atau drag & drop
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                    >
                      Kirim Laporan
                    </button>
                  </form>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <CheckCircle
                      size={24}
                      className="text-blue-600 mr-4 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">
                        Tips Membuat Laporan
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Jelaskan masalah dengan detail dan jelas</li>
                        <li>• Sertakan foto pendukung jika memungkinkan</li>
                        <li>
                          • Berikan lokasi yang spesifik dan mudah dipahami
                        </li>
                        <li>• Laporan yang baik akan ditanggapi lebih cepat</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lacak Aduan Tab */}
          {activeTab === "tracking" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Lacak Status Aduan Anda
                </h2>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Masukkan nomor referensi aduan (misal: ADU-2024-001)"
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                    Cari
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {complaints.map((complaint) => (
                  <div
                    key={complaint.id}
                    className="border border-slate-300 rounded-xl p-6 hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm font-semibold text-purple-600">
                          {complaint.referenceNumber}
                        </p>
                        <h3 className="text-lg font-bold text-slate-900">
                          {complaint.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1">
                          Kategori: {complaint.category}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
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

                    <p className="text-sm text-slate-700 mb-4">
                      {complaint.description}
                    </p>

                    {/* Status Progress */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-1 items-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            ✓
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            Diterima
                          </p>
                        </div>
                        <div className="flex-1 h-1 bg-green-600 mx-2"></div>
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              complaint.status !== "diterima"
                                ? "bg-green-600 text-white"
                                : "bg-slate-300 text-slate-600"
                            }`}
                          >
                            {complaint.status !== "diterima" ? "✓" : "2"}
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            Diproses
                          </p>
                        </div>
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            complaint.status === "selesai"
                              ? "bg-green-600"
                              : "bg-slate-300"
                          }`}
                        ></div>
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              complaint.status === "selesai"
                                ? "bg-green-600 text-white"
                                : "bg-slate-300 text-slate-600"
                            }`}
                          >
                            {complaint.status === "selesai" ? "✓" : "3"}
                          </div>
                          <p className="text-xs text-slate-600 mt-1">Selesai</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500">
                      Dilaporkan pada: {complaint.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

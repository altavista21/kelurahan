import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Upload, Eye, Download, CheckCircle } from "lucide-react";
import { serviceRequests } from "@/lib/data";
import { useState } from "react";

export default function Pelayanan() {
  const [activeTab, setActiveTab] = useState("ajukan");

  const serviceTypes = [
    "Surat Keterangan Domisili",
    "Surat Keterangan Usaha",
    "Surat Keterangan Tidak Mampu",
    "Surat Keterangan Kematian",
    "Surat Keterangan Kelakuan Baik",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Pelayanan Online</h1>
          <p className="text-blue-100 mt-2">Ajukan surat keterangan dengan mudah dan cepat</p>
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
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              Ajukan Surat
            </button>
            <button
              onClick={() => setActiveTab("tracking")}
              className={`px-6 py-3 font-semibold border-b-2 transition ${
                activeTab === "tracking"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              Tracking Status
            </button>
          </div>

          {/* Ajukan Surat Tab */}
          {activeTab === "ajukan" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Pilih Jenis Surat
                </h2>
                <div className="space-y-2">
                  {serviceTypes.map((type) => (
                    <button
                      key={type}
                      className="w-full text-left px-4 py-3 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-900 transition font-medium"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Form Pengajuan Surat
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        No. KTP
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan nomor KTP"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Alamat Rumah
                      </label>
                      <textarea
                        placeholder="Masukkan alamat lengkap"
                        rows={3}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Upload Dokumen Pendukung
                      </label>
                      <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-600 transition">
                        <Upload size={32} className="mx-auto text-blue-600 mb-2" />
                        <p className="text-sm text-slate-600">
                          Klik untuk upload atau drag & drop
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Ajukan Surat
                    </button>
                  </form>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <CheckCircle size={24} className="text-green-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-green-900 mb-2">Informasi Penting</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Pengajuan akan diproses dalam waktu 1-2 hari kerja</li>
                        <li>• Anda akan menerima notifikasi saat status berubah</li>
                        <li>• Surat dapat diunduh setelah selesai diproses</li>
                        <li>• Surat dilengkapi dengan QR Code untuk verifikasi keaslian</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tracking Tab */}
          {activeTab === "tracking" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Lacak Status Pengajuan
                </h2>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Masukkan nomor referensi (misal: SKT-2024-001)"
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Cari
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {serviceRequests.map((request) => (
                  <div
                    key={request.id}
                    className="border border-slate-300 rounded-xl p-6 hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm font-semibold text-blue-600">
                          {request.referenceNumber}
                        </p>
                        <h3 className="text-lg font-bold text-slate-900">
                          {request.serviceType}
                        </h3>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          request.status === "selesai"
                            ? "bg-green-100 text-green-700"
                            : request.status === "siap_diambil"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {request.status === "siap_diambil"
                          ? "Siap Diambil"
                          : "Diproses"}
                      </span>
                    </div>

                    {/* Status Progress */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-1 items-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            ✓
                          </div>
                          <p className="text-xs text-slate-600 mt-1">Diterima</p>
                        </div>
                        <div className="flex-1 h-1 bg-green-600 mx-2"></div>
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              request.status !== "perlu_verifikasi"
                                ? "bg-green-600 text-white"
                                : "bg-slate-300 text-slate-600"
                            }`}
                          >
                            {request.status !== "perlu_verifikasi" ? "✓" : "2"}
                          </div>
                          <p className="text-xs text-slate-600 mt-1">Diproses</p>
                        </div>
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            request.status === "siap_diambil" || request.status === "selesai"
                              ? "bg-green-600"
                              : "bg-slate-300"
                          }`}
                        ></div>
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              request.status === "siap_diambil" || request.status === "selesai"
                                ? "bg-green-600 text-white"
                                : "bg-slate-300 text-slate-600"
                            }`}
                          >
                            {request.status === "siap_diambil" ||
                            request.status === "selesai"
                              ? "✓"
                              : "3"}
                          </div>
                          <p className="text-xs text-slate-600 mt-1">Selesai</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 mb-4">
                      Diajukan pada: {request.date}
                    </p>

                    {request.status === "siap_diambil" && (
                      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center">
                        <Download size={16} className="mr-2" />
                        Download Surat (PDF)
                      </button>
                    )}
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

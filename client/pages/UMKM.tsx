import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { umkms } from "@/lib/data";
import { Search, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function UMKM() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { value: "makanan", label: "Makanan & Minuman", icon: "🍜" },
    { value: "kerajinan", label: "Kerajinan", icon: "🎨" },
    { value: "jasa", label: "Jasa", icon: "🔧" },
  ];

  const filteredUMKMs = umkms.filter((umkm) => {
    const matchesSearch =
      umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      umkm.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || umkm.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">UMKM Warga Setempat</h1>
          <p className="text-orange-100 mt-2">
            Dukung usaha lokal dan produk unggulan dari warga kelurahan
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-orange-50 py-8 border-b">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search
                className="absolute left-4 top-3 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari UMKM atau produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === null
                  ? "bg-orange-600 text-white"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
              }`}
            >
              Semua Kategori
            </button>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                  selectedCategory === cat.value
                    ? "bg-orange-600 text-white"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {filteredUMKMs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-slate-600 mb-4">
                Tidak ada UMKM yang sesuai dengan pencarian Anda
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                Bersihkan Filter
              </button>
            </div>
          ) : (
            <>
              <p className="text-slate-600 mb-8">
                Menampilkan {filteredUMKMs.length} UMKM
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUMKMs.map((umkm) => (
                  <div
                    key={umkm.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-slate-200"
                  >
                    <div className="h-48 bg-gradient-to-r from-orange-300 to-yellow-300 flex items-center justify-center text-6xl">
                      {umkm.category === "makanan"
                        ? "🍜"
                        : umkm.category === "kerajinan"
                          ? "🎨"
                          : "🔧"}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {umkm.name}
                      </h3>

                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold mb-3">
                        {umkm.category.charAt(0).toUpperCase() +
                          umkm.category.slice(1)}
                      </span>

                      <p className="text-sm text-slate-600 mb-4">
                        {umkm.description}
                      </p>

                      <div className="space-y-3 mb-6 border-t pt-4">
                        <div className="flex items-start gap-3">
                          <span className="text-slate-600 text-sm font-medium min-w-fit">
                            Pemilik:
                          </span>
                          <span className="text-slate-700 text-sm">
                            {umkm.owner}
                          </span>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin
                            size={16}
                            className="text-slate-600 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-slate-700 text-sm">
                            {umkm.address}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone
                            size={16}
                            className="text-slate-600 flex-shrink-0"
                          />
                          <a
                            href={`tel:${umkm.phone}`}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            {umkm.phone}
                          </a>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/62${umkm.phone.slice(1)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition"
                      >
                        <MessageCircle size={18} />
                        Chat WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Punya UMKM dan ingin mendaftarkan?
          </h2>
          <p className="text-slate-600 mb-6">
            Hubungi kantor kelurahan untuk mendaftarkan bisnis Anda di direktori
            UMKM
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            <MessageCircle size={20} />
            Hubungi Kami
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

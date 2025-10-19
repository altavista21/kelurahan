import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { news } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Berita() {
  const [selectedNews, setSelectedNews] = useState<(typeof news)[0] | null>(
    null,
  );

  if (selectedNews) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setSelectedNews(null)}
              className="flex items-center text-green-100 hover:text-white transition mb-4"
            >
              <ChevronLeft size={20} />
              Kembali
            </button>
            <h1 className="text-4xl font-bold">{selectedNews.title}</h1>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-gradient-to-r from-green-300 to-green-400 rounded-xl h-80 mb-8 flex items-center justify-center text-6xl">
              {selectedNews.category === "kesehatan"
                ? "🏥"
                : selectedNews.category === "lingkungan"
                  ? "🌍"
                  : "💼"}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                {selectedNews.category.toUpperCase()}
              </span>
              <span className="text-sm text-slate-600">
                {selectedNews.date}
              </span>
              <span className="text-sm text-slate-600">
                Oleh: {selectedNews.author}
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {selectedNews.content}
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Kelurahan Merdeka terus berinovasi dalam memberikan informasi
                dan layanan publik yang terbaik bagi warganya. Setiap berita dan
                pengumuman disampaikan dengan transparan untuk memastikan
                seluruh warga mendapatkan informasi yang akurat dan tepat waktu.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Kami mengajak seluruh warga untuk terus berpartisipasi dalam
                setiap kegiatan dan program yang diselenggarakan oleh kelurahan.
                Bersama kita bisa menciptakan lingkungan yang lebih baik dan
                sejahtera.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Berita & Pengumuman</h1>
          <p className="text-green-100 mt-2">
            Informasi terkini dan pengumuman resmi dari kelurahan
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured News */}
            <div
              onClick={() => setSelectedNews(news[0])}
              className="md:col-span-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <span className="text-green-400 font-semibold text-sm mb-2">
                    BERITA UTAMA
                  </span>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-green-400 transition">
                    {news[0].title}
                  </h2>
                  <p className="text-slate-300 mb-4">{news[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      {news[0].date}
                    </span>
                    <span className="text-green-400 font-semibold">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-6xl">
                  🏥
                </div>
              </div>
            </div>

            {/* News Grid */}
            {news.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedNews(article)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-r from-green-300 to-green-400 flex items-center justify-center text-5xl">
                  {article.category === "kesehatan"
                    ? "🏥"
                    : article.category === "lingkungan"
                      ? "🌍"
                      : "💼"}
                </div>
                <div className="p-6">
                  <p className="text-sm text-green-600 font-semibold mb-2">
                    {article.category.toUpperCase()}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">
                      {article.date}
                    </span>
                    <span className="text-green-600 font-semibold text-sm">
                      Baca →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition">
              ←
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition">
              2
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition">
              3
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition">
              →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

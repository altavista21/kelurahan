import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="flex-1 flex items-center justify-center py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-slate-200 mb-2">
              404
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
            telah dipindahkan atau sudah dihapus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <Home size={20} />
              Kembali ke Beranda
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-slate-200 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-300 transition"
            >
              <ArrowLeft size={20} />
              Kembali
            </button>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg max-w-md mx-auto border border-blue-200">
            <p className="text-sm text-slate-700">
              <strong>Rute yang dicari:</strong> <br />
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">
                {location.pathname}
              </code>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;

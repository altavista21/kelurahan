import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { kelurahanInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <span>🏛️</span>
              <span>{kelurahanInfo.name}</span>
            </h3>
            <p className="text-sm text-slate-400">
              Pelayanan publik online yang transparan dan mudah diakses oleh
              seluruh warga.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-slate-400 hover:text-white transition"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/profil"
                  className="text-slate-400 hover:text-white transition"
                >
                  Profil Kelurahan
                </a>
              </li>
              <li>
                <a
                  href="/pelayanan"
                  className="text-slate-400 hover:text-white transition"
                >
                  Pelayanan Online
                </a>
              </li>
              <li>
                <a
                  href="/aduan"
                  className="text-slate-400 hover:text-white transition"
                >
                  Aduan Warga
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={16}
                  className="mt-1 text-green-400 flex-shrink-0"
                />
                <span className="text-slate-400">{kelurahanInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <a
                  href={`tel:${kelurahanInfo.phone}`}
                  className="text-slate-400 hover:text-white transition"
                >
                  {kelurahanInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400" />
                <a
                  href={`mailto:${kelurahanInfo.email}`}
                  className="text-slate-400 hover:text-white transition"
                >
                  {kelurahanInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Service Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Jam Layanan</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <Clock size={16} className="text-green-400" />
                <span>Senin - Jumat: 08:00 - 16:00</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4"></span>
                <span>Sabtu: 08:00 - 12:00</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4"></span>
                <span>Minggu: Tutup</span>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Admin</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-sm text-slate-400">
            &copy; {currentYear} {kelurahanInfo.name}. Semua hak dilindungi. |
            Dikembangkan dengan ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

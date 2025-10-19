import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Beranda", path: "/" },
    { label: "Profil Kelurahan", path: "/profil" },
    { label: "Pelayanan Online", path: "/pelayanan" },
    { label: "Aduan Warga", path: "/aduan" },
    { label: "Berita", path: "/berita" },
    { label: "UMKM", path: "/umkm" },
    { label: "Statistik", path: "/statistik" },
    { label: "Kontak", path: "/kontak" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-2 rounded-lg group-hover:scale-105 transition">
              <span className="text-2xl font-bold text-blue-600">🏛️</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">
                Kelurahan Merdeka
              </h1>
              <p className="text-blue-100 text-xs">Pelayanan Publik Terpadu</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:bg-blue-500 p-2 rounded-md transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 space-y-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

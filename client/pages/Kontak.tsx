import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { kelurahanInfo } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from "lucide-react";
import { useState } from "react";

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Terima kasih ${formData.name}. Pesan Anda telah kami terima dan akan kami tanggapi segera.`,
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Hubungi Kami</h1>
          <p className="text-slate-300 mt-2">
            Kami siap membantu dan menerima pertanyaan Anda
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Informasi Kontak
              </h2>

              <div className="space-y-6">
                {/* Alamat */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Alamat
                    </h3>
                    <p className="text-slate-600 mt-2">
                      {kelurahanInfo.address}
                    </p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                      <Phone size={24} className="text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Telepon
                    </h3>
                    <p className="text-slate-600 mt-2">
                      <a
                        href={`tel:${kelurahanInfo.phone}`}
                        className="hover:text-blue-600 transition"
                      >
                        {kelurahanInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-100">
                      <Mail size={24} className="text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Email
                    </h3>
                    <p className="text-slate-600 mt-2">
                      <a
                        href={`mailto:${kelurahanInfo.email}`}
                        className="hover:text-blue-600 transition"
                      >
                        {kelurahanInfo.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Jam Layanan */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                      <Clock size={24} className="text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Jam Layanan
                    </h3>
                    <ul className="text-slate-600 mt-2 space-y-1">
                      <li>Senin - Jumat: 08:00 - 16:00</li>
                      <li>Sabtu: 08:00 - 12:00</li>
                      <li>Minggu: Tutup</li>
                    </ul>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                      <MessageCircle size={24} className="text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      WhatsApp
                    </h3>
                    <p className="text-slate-600 mt-2">
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition flex items-center gap-2"
                      >
                        <MessageCircle size={16} />
                        Hubungi Admin WhatsApp
                      </a>
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <Globe size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Website
                    </h3>
                    <p className="text-slate-600 mt-2">
                      <a href="/" className="hover:text-blue-600 transition">
                        www.kelurahansejahtera.go.id
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email Anda"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Masukkan nomor telepon"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Masukkan subjek pesan"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini"
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Lokasi Kantor Kelurahan
          </h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg h-96 md:h-[500px]">
            <iframe
              title="Lokasi Kantor Kelurahan"
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

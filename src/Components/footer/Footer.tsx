import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* Shoppen Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Shoppen</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Bestseller</a></li>
            <li><a href="#" className="hover:underline">E-Scooter</a></li>
            <li><a href="#" className="hover:underline">Gebraucht</a></li>
            <li><a href="#" className="hover:underline">Ersatzteile</a></li>
          </ul>
        </div>

        {/* Unternehmen Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Unternehmen</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Über uns</a></li>
            <li><a href="#" className="hover:underline">Magazin</a></li>
            <li><a href="#" className="hover:underline">Affiliate werden</a></li>
            <li><a href="#" className="hover:underline">B2B – Firmenangebote</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Kontakt</a></li>
            <li><a href="#" className="hover:underline">Bedienungsanleitungen</a></li>
            <li><a href="#" className="hover:underline">Häufig gestellte Fragen</a></li>
            <li><a href="#" className="hover:underline">Service Formular</a></li>
            <li><a href="#" className="hover:underline">Versand & Lieferung</a></li>
            <li><a href="#" className="hover:underline">Zahlung</a></li>
          </ul>
        </div>

        {/* Rechtliches Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">AGB</a></li>
            <li><a href="#" className="hover:underline">Datenschutz</a></li>
            <li><a href="#" className="hover:underline">Widerrufsrecht</a></li>
            <li><a href="#" className="hover:underline">Batterie-Entsorgung</a></li>
            <li><a href="#" className="hover:underline">Impressum</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Bleibe am Ball!</h3>
          <p className="mb-4">
            Melde dich zum Newsletter an, um als Erster über exklusive Angebote
            und Sonderaktionen zu erfahren
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="E-Mail Adresse"
              className="p-2 rounded-l-md w-full text-black"
            />
            <button className="bg-white text-black p-2 rounded-r-md">
              &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Payment Icons */}
          <div className="flex space-x-4">
            <img src="/icons/amex.png" alt="Amex" className="h-6" />
            <img src="/icons/klarna.png" alt="Klarna" className="h-6" />
            <img src="/icons/paypal.png" alt="PayPal" className="h-6" />
            <img src="/icons/visa.png" alt="Visa" className="h-6" />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-gray-400">
              <FaYoutube />
            </a>
            <a href="#" className="text-xl hover:text-gray-400">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-lime-700 to-green-800 text-white py-10 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & Message */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">FreshBasket</h2>
          <p className="mt-2 text-sm text-lime-200">
            Your daily dose of freshness, delivered with care. 🍅🥬
          </p>
          <p className="mt-4 text-xs text-lime-300 italic">
            Built with ❤️ by passionate devs who believe in good food and great UX.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Shop</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">My Orders</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Support</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-green-900 text-white placeholder-lime-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-green-900 font-semibold py-2 rounded hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-yellow-300"><FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-300"><FaSquareFacebook />
            </a>
            <a href="#" className="hover:text-yellow-300"><FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-lime-300 mt-8 border-t border-lime-700 pt-4">
        &copy; {new Date().getFullYear()} FreshBasket. All rights reserved. | Crafted with care in Kerala 🇮🇳
      </div>
    </footer>
  );
}

export default Footer;

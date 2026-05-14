import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-500 to-orange-700 text-white px-10 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 text-center sm:text-left">
        
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-4">SunCart</h2>
          <p className="text-sm text-orange-100 max-w-sm">
            Your one-stop summer essentials store. <br />
            Discover sunglasses, beachwear, skincare, <br />
            and everything you need for sunny days.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-200">All Products</Link></li>
            <li><Link href="/" className="hover:text-yellow-200">Categories</Link></li>
            <li><Link href="/" className="hover:text-yellow-200">New Arrivals</Link></li>
            <li><Link href="/" className="hover:text-yellow-200">Special Offers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-200">About Us</Link></li>
            <li><Link href="/" className="hover:text-yellow-200">Blog</Link></li>
            <li><Link href="/" className="hover:text-yellow-200">Careers</Link></li>
            <li><Link href="/" className="hover:text-yellow-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-200">FAQ</Link></li>
            <li><Link href="/" className="hover:text-yellow-200">Shipping</Link></li>
            <li><Link href="/" className="hover:text-yellow-200">Returns</Link></li>
            <li><Link href="/" className="hover:text-yellow-200">Help Center</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-3 justify-center sm:justify-start">
            <a
              href="https://youtube.com"
              target="_blank"
              className="bg-white text-orange-600 p-2 rounded-full hover:scale-110 transition"
            >
              <FaYoutube size={16} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-white text-orange-600 p-2 rounded-full hover:scale-110 transition"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="bg-white text-orange-600 p-2 rounded-full hover:scale-110 transition"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-orange-100">
        <p>&copy; 2026 SunCart. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-yellow-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-yellow-200">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-yellow-200">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
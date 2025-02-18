import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="container mx-auto  px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-white">YourBrand</h2>
          <p className="text-gray-400 mt-2">
            High-quality products at the best prices. Your satisfaction is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: support@yourbrand.com</p>
          <p className="text-gray-400">Phone: +123-456-7890</p>
          <p className="text-gray-400">Address: 123 Main St, City, Country</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} YourBrand. All Rights Reserved.
      </div>
    </footer>
  );
}

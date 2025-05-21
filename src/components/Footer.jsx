import { Mail } from "lucide-react";
import visa from "../assets/img/visa.png";
import mastercard from "../assets/img/mastercard.png";
import maestro from "../assets/img/mastercard.png";
import amex from "../assets/img/amex.png";
import logo from "../assets/img/logo.jpg"; // Adjust your logo path
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white font-sans px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand and description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="PornLabAI" className="w-8 h-8" />
            <h2 className="text-xl font-bold text-[#e95fff]">PornLabAI</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Transform your content with cutting-edge AI technology. Create stunning visuals and explore creative possibilities.
          </p>
          <div className="flex items-center gap-2 text-sm text-[#e95fff]">
            <Mail className="w-4 h-4" />
            <a href="mailto:support@pornlabai.com">support@pornlabai.com</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">DMCA</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#1a1e24] p-2 h-[70px] flex justify-center items-center rounded-lg">
            <img src={visa} alt="Visa" className="w-[50px]" />
            </div>
            <div className="bg-[#1a1e24] p-2 h-[70px] flex justify-center items-center rounded-lg">
            <img src={mastercard} alt="Visa" className="w-[50px]" />
            </div>
            <div className="bg-[#1a1e24] p-2 h-[70px] flex justify-center items-center rounded-lg">
            <img src={mastercard} alt="Visa" className="w-[50px]" />
            </div>
             <div className="bg-[#1a1e24] p-2 h-[70px] flex justify-center items-center rounded-lg">
            <img src={amex} alt="Visa" className="w-[50px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 PornLabAI. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="bg-[#1a1e24] p-2 rounded-full text-white hover:bg-[#2d333b]">
            <FaFacebookF size={14} />
          </a>
          <a href="#" className="bg-[#1a1e24] p-2 rounded-full text-white hover:bg-[#2d333b]">
            <FaTwitter size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

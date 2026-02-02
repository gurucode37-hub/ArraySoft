import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0c0c0c] text-gray-300">

      <div className="h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-3">

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">
            Our <span className="text-orange-500">Contacts</span>
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-orange-500 mt-1" />
              +91 73831 09386
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-orange-500 mt-1" />
              info@arraysofttechnology.com
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              407–408, Megh Malhar Complex, 4th Floor,  
              Sector-11, Near HP Petrol Pump,  
              Gandhinagar, Gujarat
            </li>
          </ul>
        </div>

        {/* Brand */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img src="/arraysoft.png" alt="ArraySoft" className="w-14 h-14" />
          </div>

          <h2 className="text-white text-2xl font-semibold">ArraySoft</h2>
          <p className="text-orange-500 text-xs tracking-widest mt-1">
            TECHNOLOGY PVT. LTD.
          </p>

          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            Website Design & Development, Digital Marketing,  
            Software Development — <span className="text-white">ALL IT SERVICES</span>
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a className="footer-icon"><FaFacebookF /></a>
            <a className="footer-icon"><FaTwitter /></a>
            <a className="footer-icon"><FaInstagram /></a>
            <a className="footer-icon"><FaLinkedinIn /></a>
            <a className="footer-icon"><FaYoutube /></a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">
            About <span className="text-orange-500">Us</span>
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            We provide end-to-end digital solutions including custom website
            development, software development, e-commerce platforms,
            mobile applications, and Flutter apps.  
            We also offer domain registration, reliable hosting services,
            and internship programs designed to bridge the gap between
            education and industry.
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © 2026 ArraySoft Technology Pvt. Ltd. | Unauthorized use is prohibited.
      </div>

      {/* Icon common styles */}
      <style>
        {`
          .footer-icon {
            width: 40px;
            height: 40px;
            border: 1px solid #555;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-icon:hover {
            border-color: orange;
            color: orange;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Heart,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Equipment", href: "/equipment" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICES = [
  "Construction Services",
  "JCB Rental",
  "Poclain Rental",
  "Earthwork",
  "Road Construction",
  "Solar Services",
  "Water Resource Management",
];

const SOCIALS = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaWhatsapp, href: "#" }, // WhatsApp-style placeholder
  { icon: FaYoutube, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 sm:col-span-2 lg:pr-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-brand-light to-brand-dark flex items-center justify-center font-bold text-white">
                RD
              </div>
              <span className="text-white font-bold text-lg">
                RD ENTERPRISES
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted partner for construction services and earthmoving
              equipment rental across Maharashtra.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"
                >
                  <Icon size={14} className="text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand text-xs font-bold tracking-widest uppercase mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-brand text-xs font-bold tracking-widest uppercase mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand text-xs font-bold tracking-widest uppercase mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Phone size={15} className="text-brand shrink-0" />
                +91 88060 12345
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Phone size={15} className="text-brand shrink-0" />
                +91 94228 12345
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Mail size={15} className="text-brand shrink-0" />
                info@rdenterprises.in
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin size={15} className="text-brand shrink-0 mt-0.5" />
                Sarkar Nagar, Tukum, Chandrapur - 442401, Maharashtra
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase mb-2">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Have a project in mind? Let&apos;s build something great
              together.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
              >
                Send Enquiry <ArrowRight size={15} />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbf5c] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
              >
                <MessageCircle size={15} /> Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 RD Enterprises. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Designed with <span className="text-red-600"><Heart/></span> by Sheikh Aamir
          </p>
        </div>
      </div>
    </footer>
  );
}
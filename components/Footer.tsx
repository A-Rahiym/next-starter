import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              MANBEE <span className="text-orange-500">Cars</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted auto dealer in Northern Nigeria. Quality vehicles at affordable prices since 2015.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                Zaria, Kaduna State
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange-500" />
                +234 812 345 6789
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange-500" />
                info@manbeecars.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-gray-300 hover:text-orange-500 transition-colors block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory"
                  className="text-gray-300 hover:text-orange-500 transition-colors block"
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-300 hover:text-orange-500 transition-colors block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-300 hover:text-orange-500 transition-colors block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-300 hover:text-orange-500 transition-colors block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Car Sales</li>
              <li>Trade-Ins</li>
              <li>International Shipping</li>
              <li>Vehicle Sourcing</li>
              <li>Financing Assistance</li>
              <li>Vehicle Inspections</li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="text-gray-300 text-sm space-y-1 mb-6">
              <div>Mon - Sat: 8:00 AM - 6:00 PM</div>
              <div>Sunday: 10:00 AM - 4:00 PM</div>
            </div>

            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/manbeecars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/manbeecars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/manbeecars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} MANBEE_Cars. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Inventory', href: '#inventory' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isInventoryPage = pathname === '/inventory';

  const scrollToSection = (href: string) => {
    if (href === '#inventory') {
      const element = document.querySelector('#inventory');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              MANBEE <span className="text-orange-600">Cars</span>
            </h1>
            <p className="ml-4 text-sm text-gray-600 hidden md:block">
              Quality Vehicles at Affordable Prices
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isInventoryPage ? (
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                Back to Home
              </Link>
            ) : (
              navigation.map((item) => (
                item.href === '#home' ? (
                  <Link
                    key={item.name}
                    href="/"
                    className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : item.href === '#inventory' ? (
                  <Link
                    key={item.name}
                    href="/inventory"
                    className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                )
              ))
            )}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <a href="tel:+2348123456789" className="flex items-center hover:text-orange-600">
                <Phone className="w-4 h-4 mr-1" />
                +234 812 345 6789
              </a>
              <a href="mailto:info@manbeecars.com" className="flex items-center hover:text-orange-600">
                <Mail className="w-4 h-4 mr-1" />
                info@manbeecars.com
              </a>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {isInventoryPage ? (
              <Link
                href="/"
                className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Back to Home
              </Link>
            ) : (
              navigation.map((item) => (
                item.href === '#home' ? (
                  <Link
                    key={item.name}
                    href="/"
                    className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : item.href === '#inventory' ? (
                  <Link
                    key={item.name}
                    href="/inventory"
                    className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium"
                  >
                    {item.name}
                  </button>
                )
              ))
            )}
            <div className="pt-4 border-t space-y-2">
              <a href="tel:+2348123456789" className="flex items-center text-gray-600 hover:text-orange-600">
                <Phone className="w-4 h-4 mr-2" />
                +234 812 345 6789
              </a>
              <a href="mailto:info@manbeecars.com" className="flex items-center text-gray-600 hover:text-orange-600">
                <Mail className="w-4 h-4 mr-2" />
                info@manbeecars.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
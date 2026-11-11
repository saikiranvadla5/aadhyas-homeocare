'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/#hero' },
  { name: 'About', href: '/#about' },
  { name: 'Treatments', href: '/#services' },
  { name: 'Doctor', href: '/#doctor' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'FAQs', href: '/#faqs' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-deepTeal sticky top-0 z-50 shadow-md transition-all">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-cream/30 shadow-sm bg-darkTeal flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Aadhya's Homoeo Care Logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-lg sm:text-xl tracking-tight leading-tight group-hover:text-softBeige transition-colors">
              Aadhya&apos;s Homoeo Care
            </span>
            <span className="text-cream/80 text-xs tracking-wider uppercase font-medium">
              Mind &bull; Body &bull; Remedy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-cream/90 hover:text-white text-sm font-medium transition-colors hover:border-b-2 hover:border-mutedOrange pb-0.5"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Primary CTA Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="https://wa.me/916305285083?text=Hello%20Dr.%20Shivani%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Aadhya%27s%20Homoeo%20Care."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-darkTeal/80 hover:bg-darkTeal text-cream border border-cream/20 px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5"
            title="Chat directly on WhatsApp"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            WhatsApp
          </a>
          <Link
            href="/#contact"
            className="bg-mutedOrange hover:bg-[#b56938] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center space-x-2">
          <Link
            href="/#contact"
            className="sm:hidden bg-mutedOrange text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-sm"
          >
            Book
          </Link>
          <button
            type="button"
            className="text-cream p-1.5 rounded-md hover:bg-darkTeal transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-darkTeal border-t border-deepTeal/40 px-4 pt-3 pb-5 space-y-2.5 shadow-xl animate-fadeIn">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-cream hover:text-white hover:bg-deepTeal/60 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-cream/10 flex flex-col space-y-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-mutedOrange hover:bg-[#b56938] text-white font-medium py-2.5 rounded-full shadow-sm text-sm"
            >
              Book a Consultation
            </Link>
            <a
              href="https://wa.me/916305285083?text=Hello%20Dr.%20Shivani%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Aadhya%27s%20Homoeo%20Care."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#25D366]/20 text-[#9bf0bc] hover:bg-[#25D366]/30 border border-[#25D366]/40 font-medium py-2 rounded-full text-sm flex items-center justify-center gap-2"
            >
              Chat on WhatsApp (+91 63052 85083)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

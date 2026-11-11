import Link from 'next/link';
import Image from 'next/image';

const navigationLinks = [
  { name: 'Home', href: '/#hero' },
  { name: 'About the Practice', href: '/#about' },
  { name: 'Treatments & Care', href: '/#services' },
  { name: 'Meet Dr. Shivani', href: '/#doctor' },
  { name: 'How Consultation Works', href: '/#how-it-works' },
  { name: 'Frequently Asked Questions', href: '/#faqs' },
  { name: 'Book Consultation', href: '/#contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Staff / Admin Login', href: '/admin/login' },
];

export function Footer() {
  return (
    <footer className="bg-darkTeal text-cream pt-16 pb-12 border-t border-deepTeal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-deepTeal/80">
          
          {/* Brand & Doctor Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-cream/30 relative bg-white/10 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Aadhya's Homoeo Care Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">
                  Aadhya&apos;s Homoeo Care
                </span>
                <span className="text-xs text-mutedOrange font-semibold tracking-wider uppercase block">
                  Mind &bull; Body &bull; Remedy
                </span>
              </div>
            </Link>

            <p className="text-sm text-cream/80 max-w-sm leading-relaxed">
              Personalised, holistic homoeopathy focused on treating the individual as a whole through compassionate listening, constitutional evaluation, and gentle care.
            </p>

            <div className="pt-2 text-xs text-cream/70 space-y-1">
              <p>
                <strong className="text-white">Dr. Shivani Amoji</strong> &bull; BHMS, MSc Psychology
              </p>
              <p>State Medical Registration: <span className="font-mono text-cream font-medium">Reg. No: 740/H/22</span></p>
              <p>Phone / WhatsApp: <a href="https://wa.me/916305285083" className="text-white hover:text-mutedOrange underline">+91 63052 85083</a></p>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-mutedOrange transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Clinic Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Consultation &amp; Social
            </h4>
            
            <div className="space-y-2 text-sm text-cream/80">
              <p className="flex items-center gap-2">
                <span className="text-mutedOrange">&bull;</span>
                <span>In-person Consultations by Appointment</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-mutedOrange">&bull;</span>
                <span>Online Consultations Available Pan-India</span>
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://wa.me/916305285083"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-deepTeal hover:bg-[#25D366] text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/aadhyas_homoecare/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-deepTeal hover:bg-[#E1306C] text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <div className="pt-3 border-t border-deepTeal/80">
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-cream/70">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-mutedOrange transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/70 gap-3">
          <p>&copy; 2026 Aadhya&apos;s Homoeo Care. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed with care &bull; Reg. No: 740/H/22
          </p>
        </div>

      </div>
    </footer>
  );
}

import Link from 'next/link';

export function CTASection() {
  return (
    <section className="bg-deepTeal text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-darkTeal/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block text-xs uppercase font-bold tracking-widest text-mutedOrange bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
          Take Charge of Your Health
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Ready to take the next step?
        </h2>

        <p className="text-base sm:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed">
          Book a consultation with Aadhya&apos;s Homoeo Care and experience personalised, holistic healthcare dedicated to seeing the whole you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/#contact"
            className="w-full sm:w-auto bg-mutedOrange hover:bg-[#b56938] text-white font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-base"
          >
            Book Consultation
          </Link>

          <a
            href="https://wa.me/916305285083?text=Hello%20Dr.%20Shivani%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Aadhya%27s%20Homoeo%20Care."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-base flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp Us (+91 63052 85083)
          </a>
        </div>
      </div>
    </section>
  );
}


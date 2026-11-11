'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/solid';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#F7F1E6] via-[#FAF6EE] to-[#EDE2CF] py-14 sm:py-20 lg:py-24">
      {/* Subtle organic background blur shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-softBeige/70 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#E5D7BF]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softBeige/80 border border-[#D9CDB7] text-deepTeal text-xs sm:text-sm font-semibold tracking-wide">
              <SparklesIcon className="w-4 h-4 text-mutedOrange" />
              <span>Mind &bull; Body &bull; Remedy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-deepTeal leading-[1.18] tracking-tight">
              Your health deserves care that{' '}
              <span className="text-mutedOrange font-serif italic">sees the whole you.</span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-lg sm:text-xl text-darkText font-medium max-w-2xl mx-auto lg:mx-0">
              Personalised homoeopathic care for your mind, body and wellbeing.
            </p>

            {/* Short Description */}
            <p className="text-base text-darkText/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Aadhya&apos;s Homoeo Care is dedicated to providing personalised care with a holistic, compassionate approach to health and long-term wellbeing.
            </p>

            {/* Doctor Credential Tag */}
<div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-xl bg-white/70 border border-[#DDD3C1] shadow-sm backdrop-blur-sm">
  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
  <p className="text-xs sm:text-sm text-darkText">
    Led by <strong className="text-deepTeal">Dr. Shivani Amoji</strong>, <span className="text-darkText/70">BHMS, MSc Psychology</span> &bull; <span className="text-xs font-mono text-mutedOrange">Reg. No: 740/H/22</span>
  </p>
</div>
            {/* Clinic Hours Badge */}
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/60 border border-[#DDD3C1] text-xs text-darkText/80">
  <span className="w-2 h-2 rounded-full bg-deepTeal"></span>
  <span>Consultations: <strong>Mon – Sat</strong> (10:00 AM – 08:00 PM)</span>
</div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/#contact"
                className="w-full sm:w-auto text-center bg-deepTeal hover:bg-darkTeal text-white font-medium px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-base"
              >
                Book a Consultation
              </Link>
              <a
                href="https://wa.me/916305285083?text=Hello%20Dr.%20Shivani%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Aadhya%27s%20Homoeo%20Care."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-base flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Core Values / Micro-Trust points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-darkText/80">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircleIcon className="w-4 h-4 text-deepTeal" />
                Trust &amp; Privacy
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircleIcon className="w-4 h-4 text-deepTeal" />
                Personalised Care
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircleIcon className="w-4 h-4 text-deepTeal" />
                Holistic Approach
              </span>
            </div>
          </div>

          {/* Right Column: Doctor Visual Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Backing decorative frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-deepTeal/15 border-2 border-deepTeal/20 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
              
              <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-xl border border-cream/80">
                <div className="relative h-[420px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-softBeige">
                  <Image
                    src="/images/doctor.jpg"
                    alt="Dr. Shivani Amoji - Homeopathic Practitioner and Psychologist"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle overlay gradient at the bottom for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-darkTeal/90 via-darkTeal/50 to-transparent p-4 flex flex-col justify-end text-white">
                    <p className="font-semibold text-base sm:text-lg tracking-wide">Dr. Shivani Amoji</p>
                    <p className="text-xs text-cream/90 font-light">BHMS &bull; MSc Psychology &bull; Reg. No: 740/H/22</p>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                {/* <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-[#E3D9C6] rounded-2xl p-3 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-softBeige flex items-center justify-center text-deepTeal font-bold">
                    🌿
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-deepTeal uppercase tracking-wider">Compassionate Care</p>
                    <p className="text-[11px] text-darkText/70">Physical &amp; Emotional Wellness</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

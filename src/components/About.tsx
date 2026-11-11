import Image from 'next/image';
import Link from 'next/link';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual & Quote */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Decorative background border */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-softBeige border border-[#DDD3C1] -z-10" />
              
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-[#E8DEC9] space-y-6">
                <div className="flex items-center space-x-3 pb-4 border-b border-cream">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-deepTeal">
                    <Image
                      src="/images/logo.png"
                      alt="Aadhya's Homoeo Care Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-deepTeal text-base">Aadhya&apos;s Homoeo Care</h4>
                    <p className="text-xs text-mutedOrange font-semibold tracking-wider uppercase">
                      Mind &bull; Body &bull; Remedy
                    </p>
                  </div>
                </div>

                <blockquote className="italic font-serif text-darkText/90 text-base sm:text-lg leading-relaxed">
                  &ldquo;Your story matters before your symptoms. True healing happens when we understand what you are going through as a whole individual.&rdquo;
                </blockquote>

                <div className="pt-2">
                  <p className="text-sm font-semibold text-deepTeal">Dr. Shivani Amoji</p>
                  <p className="text-xs text-darkText/70">BHMS, MSc Psychology (Reg. No: 740/H/22)</p>
                </div>

                <div className="pt-2 border-t border-cream/80 flex items-center justify-between text-xs text-darkText/70">
                  <span>Classical Homoeopathy</span>
                  <span>&bull;</span>
                  <span>Holistic Guidance</span>
                  <span>&bull;</span>
                  <span>Confidential</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D9CDB7] text-mutedOrange text-xs font-bold uppercase tracking-widest">
              About The Practice
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-deepTeal leading-tight">
              Care that begins with listening.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-darkText/85 leading-relaxed">
              <p>
                <strong>Aadhya&apos;s Homoeo Care</strong> is built around the fundamental belief that every person&apos;s health journey is different. In an era where healthcare often feels hurried and fragmented, we provide a warm, attentive space where you are seen and understood.
              </p>
              <p>
                Our clinical approach focuses on understanding the individual, their daily lifestyle, emotional stressors, and overall constitution before tailoring a personalised care plan. We don&apos;t just look at isolated symptoms; we look at the whole person.
              </p>
              <p className="text-sm sm:text-base text-darkText/75">
                Guided by the principles of <em>Mind &bull; Body &bull; Remedy</em>, Dr. Shivani Amoji integrates her medical background in homoeopathy with psychological insight, helping patients navigate acute and chronic concerns with empathy, scientific discipline, and personalized follow-ups.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-white/80 border border-[#E3D9C6]">
                <h4 className="font-bold text-deepTeal text-sm mb-1">A Calm, Safe Environment</h4>
                <p className="text-xs text-darkText/70">
                  Consultations are held at an unhurried pace, ensuring you have ample time to discuss all your concerns.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/80 border border-[#E3D9C6]">
                <h4 className="font-bold text-deepTeal text-sm mb-1">Safe &amp; Non-Invasive</h4>
                <p className="text-xs text-darkText/70">
                  Individualised natural remedies selected to support your body&apos;s innate vitality and gentle healing.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/#doctor"
                className="inline-flex items-center text-sm font-semibold text-deepTeal hover:text-mutedOrange transition-colors"
              >
                Learn more about Dr. Shivani Amoji &rarr;
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


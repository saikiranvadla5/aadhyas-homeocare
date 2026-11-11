import Image from 'next/image';
import Link from 'next/link';
import { AcademicCapIcon, IdentificationIcon, LightBulbIcon, HeartIcon } from '@heroicons/react/24/outline';

export function DoctorProfile() {
  return (
    <section id="doctor" className="py-16 sm:py-24 bg-white border-t border-[#EDE2CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-softBeige border border-[#D9CDB7] text-deepTeal text-xs font-bold uppercase tracking-widest mb-3">
            Physician Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-deepTeal">
            Meet Dr. Shivani Amoji
          </h2>
          <p className="text-base text-darkText/80 mt-3">
            Dedicated to personalised homoeopathic care that bridges physical health with emotional wellbeing.
          </p>
        </div>

        {/* Profile Card Layout */}
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#E8DEC9] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center">
            
            {/* Left Column: Doctor Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative h-[430px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src="/images/doctor.jpg"
                    alt="Dr. Shivani Amoji - BHMS, MSc Psychology"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                
                {/* Registration Seal */}
                <div className="mt-4 p-3 rounded-xl bg-white border border-[#E3D9C6] text-center shadow-sm">
                  <p className="text-xs text-darkText/70 font-medium">State Medical Council Registration</p>
                  <p className="text-sm font-bold text-deepTeal tracking-wider font-mono">
                    Reg. No: 740/H/22
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Qualifications, Areas of Interest & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-deepTeal">
                  Dr. Shivani Amoji
                </h3>
                <p className="text-base font-semibold text-mutedOrange mt-1">
                  BHMS, MSc Psychology
                </p>
                <p className="text-xs text-darkText/60 mt-0.5 font-medium uppercase tracking-wider">
                  Homoeopathic Physician &bull; Wellness Consultant
                </p>
              </div>

              {/* Education & Qualifications */}
              <div className="p-4 rounded-xl bg-white border border-[#E3D9C6] space-y-3">
                <div className="flex items-center gap-2 text-deepTeal font-bold text-sm">
                  <AcademicCapIcon className="w-5 h-5 text-mutedOrange" />
                  <h4>Education &amp; Credentials</h4>
                </div>
                <ul className="text-sm text-darkText/80 space-y-1.5 list-disc list-inside">
                  <li>
                    <strong>BHMS</strong> — Bachelor of Homeopathic Medicine and Surgery
                  </li>
                  <li>
                    <strong>MSc Psychology</strong> — Master of Science in Psychology
                  </li>
                  <li>
                    <strong>Registration</strong> — Reg. No: 740/H/22
                  </li>
                </ul>
              </div>

              {/* Consultation Philosophy */}
              <div className="p-4 rounded-xl bg-white border border-[#E3D9C6] space-y-2">
                <div className="flex items-center gap-2 text-deepTeal font-bold text-sm">
                  <HeartIcon className="w-5 h-5 text-mutedOrange" />
                  <h4>Consultation Philosophy</h4>
                </div>
                <p className="text-sm text-darkText/80 leading-relaxed italic">
                  &ldquo;A person is never just a collection of symptoms. Health is an ongoing balance between physical vitality, mental clarity, and daily environment. My consultation philosophy centers on listening closely, taking a thorough constitutional case history, and formulating gentle, personalised care plans.&rdquo;
                </p>
              </div>

              {/* Areas of Clinical Interest */}
              <div className="p-4 rounded-xl bg-white border border-[#E3D9C6] space-y-2">
                <div className="flex items-center gap-2 text-deepTeal font-bold text-sm">
                  <LightBulbIcon className="w-5 h-5 text-mutedOrange" />
                  <h4>Areas of Interest</h4>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    'Constitutional Homoeopathy',
                    "Women's Wellness & Hormonal Balance",
                    'Stress & Emotional Wellbeing',
                    'Digestive Health',
                    'Skin & Hair Care',
                    'Child & Family Care',
                    'Mind-Body Lifestyle Guidance',
                  ].map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#F2ECE1] text-darkTeal border border-[#DDD3C1]"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#contact"
                  className="text-center bg-deepTeal hover:bg-darkTeal text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
                >
                  Book a Consultation
                </Link>
                <a
                  href="https://wa.me/916305285083?text=Hello%20Dr.%20Shivani%2C%20I%20would%20like%20to%20discuss%20a%20consultation%20with%20Aadhya%27s%20Homoeo%20Care."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center border border-deepTeal text-deepTeal hover:bg-deepTeal hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-all"
                >
                  WhatsApp Consultation Enquiry
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


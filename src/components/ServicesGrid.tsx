import Link from 'next/link';
import {
  UserCircleIcon,
  SparklesIcon,
  FireIcon,
  HeartIcon,
  SunIcon,
  ShieldCheckIcon,
  FaceSmileIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'consultation',
    title: 'Consultation & Personalised Care',
    description:
      'In-depth individual case evaluation examining constitutional tendencies, past medical history, and lifestyle factors to tailor a dedicated care plan.',
    icon: UserCircleIcon,
    category: 'Core Practice',
  },
  {
    id: 'womens-wellness',
    title: "Women's Wellness",
    description:
      'Gentle, holistic support for hormonal transitions, menstrual regularities, emotional rhythm, and reproductive wellbeing through individualised homoeopathic care.',
    icon: SparklesIcon,
    category: 'Specialised Focus',
  },
  {
    id: 'digestive-concerns',
    title: 'Digestive & Lifestyle Concerns',
    description:
      'Supportive constitutional remedies for gut balance, acidity, sluggish digestion, and food intolerances combined with personalized daily dietary guidance.',
    icon: FireIcon,
    category: 'Vitality',
  },
  {
    id: 'stress-emotional',
    title: 'Stress & Emotional Wellbeing',
    description:
      'Grounded in both homoeopathy and psychological understanding to assist with chronic stress, mental fatigue, sleep disruption, and emotional burnout.',
    icon: HeartIcon,
    category: 'Mind & Body',
  },
  {
    id: 'skin-hair',
    title: 'Skin & Hair Concerns',
    description:
      'Internal constitutional care addressing the root imbalances that influence dermatological health, scalp nourishment, and natural vitality without harsh chemicals.',
    icon: SunIcon,
    category: 'External Health',
  },
  {
    id: 'general-wellness',
    title: 'General Wellness',
    description:
      'Preventive consultations aimed at strengthening immune vitality, chronic sluggishness, seasonal allergies, and recurring low-energy states.',
    icon: ShieldCheckIcon,
    category: 'Immunity',
  },
  {
    id: 'child-family',
    title: 'Child & Family Wellness',
    description:
      'Gentle, palatable natural remedies designed for children and family members of all ages, fostering healthy growth, immunity, and restful sleep.',
    icon: FaceSmileIcon,
    category: 'Family Care',
  },
  {
    id: 'lifestyle-guidance',
    title: 'Lifestyle & Holistic Guidance',
    description:
      'Comprehensive advice encompassing sleep hygiene, emotional grounding practices, hydration, and nutritional harmony aligned with your constitution.',
    icon: LifebuoyIcon,
    category: 'Holistic Living',
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-softBeige border border-[#D9CDB7] text-deepTeal text-xs font-bold uppercase tracking-widest mb-3">
            Treatments &amp; Consultation Areas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-deepTeal">
            Holistic Care Tailored To You
          </h2>
          <p className="text-base text-darkText/80 mt-3 leading-relaxed">
            Our practice focuses on understanding root causes and constitutional patterns rather than suppressing isolated symptoms. All care is tailored specifically to your unique health profile.
          </p>
        </div>

        {/* 8-Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const encodedTitle = encodeURIComponent(service.title);
            const whatsappLink = `https://wa.me/916305285083?text=Hello%20Dr.%20Shivani%2C%20I%20would%20like%20to%20discuss%20${encodedTitle}%20with%20Aadhya%27s%20Homoeo%20Care.`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-[#E8DEC9] hover:border-mutedOrange/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-softBeige/70 group-hover:bg-deepTeal group-hover:text-white text-deepTeal flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium text-darkText/60 bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-cream">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-deepTeal group-hover:text-mutedOrange transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-darkText/75 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-cream flex items-center justify-between">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-deepTeal hover:text-mutedOrange transition-colors flex items-center gap-1"
                  >
                    Discuss with Doctor &rarr;
                  </a>
                  <Link
                    href={`/#contact?reason=${encodeURIComponent(service.title)}`}
                    className="text-xs text-mutedOrange font-medium hover:underline"
                  >
                    Book
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-darkText/60 max-w-xl mx-auto">
            Not sure which area fits your requirements? We encourage booking an initial comprehensive consultation to review your whole health picture.
          </p>
        </div>

      </div>
    </section>
  );
}


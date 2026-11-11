import Link from 'next/link';
import { CalendarDaysIcon, ChatBubbleLeftRightIcon, DocumentCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    number: '01',
    title: 'Book',
    description: 'Choose your preferred consultation method (In-person or Online) and submit your appointment request.',
    icon: CalendarDaysIcon,
  },
  {
    number: '02',
    title: 'Consultation',
    description: 'Engage in a calm, in-depth discussion covering your medical background, lifestyle, and emotional factors with Dr. Shivani.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    number: '03',
    title: 'Personalised Guidance',
    description: 'Receive a dedicated care plan and tailored constitutional homoeopathic remedies formulated specifically for you.',
    icon: DocumentCheckIcon,
  },
  {
    number: '04',
    title: 'Follow-up',
    description: 'Assess constitutional response, review progress, and fine-tune your ongoing wellbeing with structured follow-ups.',
    icon: ArrowPathIcon,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-t border-[#EDE2CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-softBeige border border-[#D9CDB7] text-deepTeal text-xs font-bold uppercase tracking-widest mb-3">
            Clear &amp; Patient-Friendly
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-deepTeal">
            How Consultation Works
          </h2>
          <p className="text-base text-darkText/80 mt-3">
            A simple, transparent 4-step path designed to make your health journey calm, structured, and personalized.
          </p>
        </div>

        {/* Stepper / Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-[#E8DEC9] flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-mono font-bold text-mutedOrange">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-deepTeal text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cream" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-deepTeal mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-darkText/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DEC9] flex items-center justify-between text-xs text-darkText/60">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-deepTeal font-medium">&bull; Patient Care</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA prompt */}
        <div className="mt-14 text-center">
          <Link
            href="/#contact"
            className="inline-block bg-mutedOrange hover:bg-[#b56938] text-white font-medium px-8 py-3 rounded-full shadow-sm hover:shadow transition-all text-sm"
          >
            Schedule Your Step 01 Now &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}


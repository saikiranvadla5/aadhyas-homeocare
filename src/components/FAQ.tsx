'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How do I book a consultation?',
    answer:
      'You can easily submit the consultation request form on this website or reach out directly to Aadhya’s Homoeo Care through WhatsApp at +91 63052 85083. Our clinic will respond to schedule a suitable date and time slot.',
  },
  {
    question: 'Are online consultations available?',
    answer:
      'Yes, secure online consultations via video or phone are available for patients across India and abroad. Case taking is conducted thoroughly, and prescribed homoeopathic remedies can be dispatched directly to your address if required.',
  },
  {
    question: 'How long does a consultation take?',
    answer:
      'An initial constitutional consultation is comprehensive and typically takes 45 to 60 minutes. This allows Dr. Shivani to listen attentively to your medical history, emotional stress points, and daily lifestyle. Follow-up sessions are usually 20 to 30 minutes.',
  },
  {
    question: 'How do I contact the clinic?',
    answer:
      'You can reach Aadhya’s Homoeo Care via WhatsApp or call at +91 63052 85083, send a message through our website form, or connect with us on Instagram @aadhyas_homoecare.',
  },
  {
    question: 'Can I request a follow-up consultation?',
    answer:
      'Yes, follow-up evaluations are an essential part of homoeopathic care. Follow-up frequency will be guided by Dr. Shivani depending on your individual response and specific health goals.',
  },
  {
    question: 'Can homoeopathic remedies be taken alongside conventional treatments?',
    answer:
      'In many situations, individualised homoeopathic remedies can safely complement ongoing care. During your initial consultation, please mention all current medications and health plans so Dr. Shivani can evaluate your case comprehensively.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-t border-[#EDE2CF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-softBeige border border-[#D9CDB7] text-deepTeal text-xs font-bold uppercase tracking-widest mb-3">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-deepTeal">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-darkText/80 mt-3">
            Everything you need to know about our consultations, homoeopathic philosophy, and clinic appointments.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E8DEC9] bg-[#FAF7F2] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-deepTeal">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-[#DDD3C1] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-deepTeal text-white' : 'text-deepTeal'
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-darkText/80 leading-relaxed border-t border-[#EDE2CF]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-cream border border-[#DDD3C1] text-center sm:flex sm:items-center sm:justify-between gap-4">
          <div className="text-left mb-4 sm:mb-0">
            <h4 className="font-bold text-deepTeal text-base">Have a question not listed here?</h4>
            <p className="text-xs text-darkText/70 mt-0.5">Feel free to message Dr. Shivani directly on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/916305285083?text=Hello%20Dr.%20Shivani%2C%20I%20have%20a%20question%20regarding%20Aadhya%27s%20Homoeo%20Care."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-deepTeal hover:bg-darkTeal text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm transition-colors"
          >
            Ask on WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}


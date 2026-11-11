import { InformationCircleIcon } from '@heroicons/react/24/outline';

export function Disclaimer() {
  return (
    <section className="bg-[#F0EAE1] py-8 border-y border-[#DDD3C1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 bg-white/70 p-4 sm:p-5 rounded-2xl border border-[#DDD3C1] shadow-sm">
          <div className="p-2 rounded-xl bg-deepTeal/10 text-deepTeal flex-shrink-0">
            <InformationCircleIcon className="w-5 h-5 text-deepTeal" />
          </div>
          <div className="text-xs sm:text-[13px] text-darkText/80 leading-relaxed">
            <strong className="text-deepTeal font-semibold">Medical Disclaimer: </strong>
            Information on this website is provided for general informational and educational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment. Homoeopathic care is individualised, and outcomes may vary depending on constitutional factors. Always seek the advice of a qualified healthcare practitioner for any medical concerns.
          </div>
        </div>
      </div>
    </section>
  );
}


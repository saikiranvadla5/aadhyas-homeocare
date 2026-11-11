import { HeartIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const trustPoints = [
  {
    title: 'Personalised consultations',
    description: 'Every consultation is detailed and focused entirely on your individual constitution, history, and distinct symptoms.',
    icon: SparklesIcon,
  },
  {
    title: 'Mind & body focused care',
    description: 'Combining classical homoeopathy with psychological insight to address the emotional and physical aspects of wellbeing.',
    icon: HeartIcon,
  },
  {
    title: 'Patient-centred approach',
    description: 'A calm, unhurried space where your experience is genuinely heard and your care is guided by respect and empathy.',
    icon: UserGroupIcon,
  },
];

export function TrustSection() {
  return (
    <section className="bg-white py-12 sm:py-16 border-y border-[#EDE2CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Practitioner Credibility Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10 pb-8 border-b border-cream">
          <p className="text-xs font-bold tracking-widest text-mutedOrange uppercase mb-1">
            Registered Practitioner Credibility
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-deepTeal">
            Dr. Shivani Amoji
          </h2>
          <p className="text-sm sm:text-base text-darkText/80 mt-1 font-medium">
            BHMS &bull; MSc Psychology &bull; <span className="font-semibold text-deepTeal">Reg. No: 740/H/22</span>
          </p>
          <p className="text-xs text-darkText/60 mt-1">
            Homoeopathy &bull; Wellness &bull; Psychological Wellbeing
          </p>
        </div>

        {/* 3 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF7F2] hover:bg-[#F5EFE6] border border-[#E8DEC9] rounded-2xl p-6 sm:p-7 transition-all duration-200 hover:shadow-md flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-deepTeal text-white flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-6 h-6 text-cream" />
                </div>
                <h3 className="text-lg font-bold text-deepTeal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-darkText/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


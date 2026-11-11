import Image from 'next/image';

const instagramHighlights = [
  {
    tag: 'Mind & Body',
    quote: 'You don’t have to carry it alone.',
    subtitle: 'Holistic care that listens to your whole story.',
    bg: 'bg-gradient-to-br from-[#0F5550] to-[#0B4743] text-cream',
    textColor: 'text-cream',
    accentColor: 'text-[#E5D7BF]',
  },
  {
    tag: 'Care Philosophy',
    quote: 'Your story matters before your symptoms.',
    subtitle: 'Dr. Shivani Amoji &bull; BHMS, MSc Psychology',
    bg: 'bg-gradient-to-br from-[#1C4743] to-[#123633] text-white',
    textColor: 'text-white',
    accentColor: 'text-mutedOrange',
  },
  {
    tag: 'Aadhya’s Core',
    quote: 'Mind • Body • Remedy',
    subtitle: 'Gentle, constitutional healing for long-term health.',
    bg: 'bg-gradient-to-br from-[#EDE2CF] to-[#FAF7F2] text-darkText',
    textColor: 'text-darkText',
    accentColor: 'text-deepTeal',
  },
];

export function InstagramSection() {
  return (
    <section className="py-16 sm:py-20 bg-cream border-t border-[#EDE2CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D9CDB7] text-mutedOrange text-xs font-bold uppercase tracking-widest mb-3">
              Community &amp; Guidance
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-deepTeal">
              Follow Aadhya&apos;s Homoeo Care
            </h2>
            <p className="text-base text-darkText/80 mt-2">
              Daily wellness reflections, educational homoeopathy insights, and mental wellbeing tips on Instagram.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/aadhyas_homoecare/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-medium px-6 py-3 rounded-full text-sm shadow-sm transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* 3 Brand Post Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instagramHighlights.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/aadhyas_homoecare/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl p-7 shadow-sm border border-[#DDD3C1]/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[260px] group ${post.bg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest ${post.accentColor}`}>
                    {post.tag}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>

                <p className={`text-xl sm:text-2xl font-serif font-bold leading-snug group-hover:underline ${post.textColor}`}>
                  &ldquo;{post.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs opacity-85">
                <span>{post.subtitle}</span>
                <span className="font-semibold text-xs group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </a>
          ))}
        </div>

        {/* Profile handle banner */}
        <div className="mt-8 text-center text-xs text-darkText/70">
          Find us on Instagram:{' '}
          <a
            href="https://www.instagram.com/aadhyas_homoecare/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-deepTeal font-bold hover:underline"
          >
            @aadhyas_homoecare
          </a>
        </div>

      </div>
    </section>
  );
}


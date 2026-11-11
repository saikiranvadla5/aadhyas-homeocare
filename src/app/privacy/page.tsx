import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Aadhya's Homoeo Care",
  description: "Privacy policy for patients and visitors of Aadhya's Homoeo Care.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC9] shadow-sm space-y-8">
          
          <div>
            <Link href="/" className="text-xs font-semibold text-deepTeal hover:text-mutedOrange transition-colors">
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-deepTeal mt-3">
              Privacy Policy
            </h1>
            <p className="text-xs text-darkText/60 mt-1">
              Last updated: November 2026 &bull; Aadhya&apos;s Homoeo Care
            </p>
          </div>

          <div className="space-y-6 text-sm text-darkText/80 leading-relaxed border-t border-cream pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">1. Commitment to Patient Privacy</h2>
              <p>
                At <strong>Aadhya&apos;s Homoeo Care</strong> (headed by Dr. Shivani Amoji, BHMS, MSc Psychology, Reg. No: 740/H/22), we hold patient confidentiality and medical discretion with the highest standard of ethics. This Privacy Policy outlines how we collect, handle, and protect your personal and consultation enquiry information.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">2. Information We Collect</h2>
              <p>When you request a consultation through our website or WhatsApp link, we may collect:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Your full name and contact information (phone number, email address).</li>
                <li>Preferred appointment dates and consultation modes (in-person or online).</li>
                <li>General health concerns or notes you voluntarily share for appointment coordination.</li>
              </ul>
              <p className="text-xs text-darkText/70 italic">
                Note: We never ask for sensitive payment credentials or banking information through our online public contact form.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">3. How Your Information Is Used</h2>
              <p>Your details are used strictly for:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Scheduling and coordinating your clinical or online consultations.</li>
                <li>Direct communication regarding appointment timing, rescheduling, or case follow-ups.</li>
                <li>Maintaining confidential clinical records in accordance with healthcare standards.</li>
              </ul>
              <p>
                We do NOT sell, rent, or trade your contact information or consultation details to any third-party marketing companies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">4. Data Security &amp; Storage</h2>
              <p>
                All consultation requests submitted via our website are processed through secure, authenticated database protocols. Form submissions are strictly accessible only by authorized clinic administration and Dr. Shivani Amoji.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">5. Third-Party Links (WhatsApp &amp; Instagram)</h2>
              <p>
                Our website includes direct links to WhatsApp (+91 63052 85083) and Instagram (@aadhyas_homoecare). Any interaction on external platforms is governed by the respective privacy policies of those services. Please avoid sharing sensitive diagnostic documents publicly on social channels.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">6. Contact &amp; Questions</h2>
              <p>
                If you have questions about your personal data or wish to have your consultation enquiry record removed, please reach out to us at:
              </p>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9] text-xs space-y-1">
                <p><strong>Aadhya&apos;s Homoeo Care</strong></p>
                <p>Dr. Shivani Amoji (BHMS, MSc Psychology)</p>
                <p>Registration No: 740/H/22</p>
                <p>WhatsApp / Phone: +91 63052 85083</p>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}


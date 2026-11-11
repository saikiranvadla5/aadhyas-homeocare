import Link from 'next/link';

export const metadata = {
  title: "Terms & Conditions | Aadhya's Homoeo Care",
  description: "Terms and conditions for consulting with Aadhya's Homoeo Care.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC9] shadow-sm space-y-8">
          
          <div>
            <Link href="/" className="text-xs font-semibold text-deepTeal hover:text-mutedOrange transition-colors">
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-deepTeal mt-3">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-darkText/60 mt-1">
              Last updated: November 2026 &bull; Aadhya&apos;s Homoeo Care
            </p>
          </div>

          <div className="space-y-6 text-sm text-darkText/80 leading-relaxed border-t border-cream pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">1. Nature of Services</h2>
              <p>
                Aadhya&apos;s Homoeo Care provides professional homoeopathic and holistic wellness consultations led by Dr. Shivani Amoji, BHMS, MSc Psychology (Reg. No: 740/H/22).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">2. Medical Disclaimer</h2>
              <p>
                All informational materials, articles, and content published on this website are for educational and general informational purposes only. They do not constitute an emergency medical diagnosis or replace formal diagnostic evaluations by a licensed practitioner.
              </p>
              <p>
                In case of severe acute medical emergencies, sudden acute trauma, or life-threatening symptoms, patients must immediately contact local emergency healthcare facilities or hospital casualty wards.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">3. Individual Variation in Results</h2>
              <p>
                Homoeopathic care is based on individualised constitutional assessment. Because each patient presents unique metabolic, genetic, emotional, and lifestyle characteristics, response rates and therapeutic journeys vary between individuals. Aadhya&apos;s Homoeo Care does not make exaggerated promises of &ldquo;instant&rdquo; or &ldquo;guaranteed&rdquo; outcomes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">4. Appointments, Cancellations &amp; Rescheduling</h2>
              <p>
                Submitting an enquiry form requests a consultation slot; the clinic staff will connect with you to confirm the final scheduled time. If you need to reschedule or cancel your appointment, we kindly ask for reasonable advance notice (preferably via WhatsApp at +91 63052 85083) so another patient may be accommodated.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">5. Online Consultations</h2>
              <p>
                Patients engaging in online video or telephone consultations are responsible for providing clear, accurate descriptions of their symptoms, prior medical records, and current medications to ensure the physician can evaluate the case safely and accurately.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-deepTeal">6. Clinic Contact</h2>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC9] text-xs space-y-1">
                <p><strong>Aadhya&apos;s Homoeo Care</strong></p>
                <p>Dr. Shivani Amoji (BHMS, MSc Psychology &bull; Reg. No: 740/H/22)</p>
                <p>WhatsApp: +91 63052 85083</p>
                <p>Instagram: @aadhyas_homoecare</p>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}


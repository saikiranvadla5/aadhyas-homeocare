'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialReason = searchParams ? searchParams.get('reason') || '' : '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consultationDate: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    method: 'IN_PERSON' as 'IN_PERSON' | 'ONLINE',
    message: initialReason ? `Enquiry regarding: ${initialReason}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || 'Failed to submit enquiry. Please check your details and try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while submitting your consultation request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-softBeige border border-[#D9CDB7] text-deepTeal text-xs font-bold uppercase tracking-widest mb-3">
            Appointments &amp; Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-deepTeal">
            Request a Consultation
          </h2>
          <p className="text-base text-darkText/80 mt-2">
            Fill out the form below, and Dr. Shivani&apos;s clinic will review your request and confirm your appointment shortly.
          </p>
        </div>

        {/* Card Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC9] shadow-md">
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircleIcon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-deepTeal">
                Thank You!
              </h3>
              <p className="text-base text-darkText/80 max-w-lg mx-auto leading-relaxed">
                Your consultation request has been received. <strong>Aadhya&apos;s Homoeo Care</strong> will contact you shortly on your provided phone number to confirm the appointment.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/916305285083?text=${encodeURIComponent(
                    `Hello Dr. Shivani, I just submitted an appointment request on the website under the name ${formData.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium px-6 py-3 rounded-full text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Confirm Faster on WhatsApp &rarr;
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      consultationDate: '',
                      preferredTime: 'Morning (10:00 AM - 01:00 PM)',
                      method: 'IN_PERSON',
                      message: '',
                    });
                  }}
                  className="w-full sm:w-auto text-xs text-darkText/70 underline hover:text-darkText"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-deepTeal uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Rao"
                    className="w-full rounded-xl border-[#D9CDB7] bg-[#FAF7F2] p-3 text-sm text-darkText focus:bg-white focus:border-deepTeal focus:ring-1 focus:ring-deepTeal outline-none transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-deepTeal uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full rounded-xl border-[#D9CDB7] bg-[#FAF7F2] p-3 text-sm text-darkText focus:bg-white focus:border-deepTeal focus:ring-1 focus:ring-deepTeal outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email (Optional) */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-deepTeal uppercase tracking-wider mb-2">
                    Email Address <span className="text-darkText/50 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ananya@example.com"
                    className="w-full rounded-xl border-[#D9CDB7] bg-[#FAF7F2] p-3 text-sm text-darkText focus:bg-white focus:border-deepTeal focus:ring-1 focus:ring-deepTeal outline-none transition-all"
                  />
                </div>

                {/* Consultation Method */}
                <div>
                  <label htmlFor="method" className="block text-xs font-bold text-deepTeal uppercase tracking-wider mb-2">
                    Preferred Consultation Method <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="method"
                    name="method"
                    value={formData.method}
                    onChange={handleChange}
                    className="w-full rounded-xl border-[#D9CDB7] bg-[#FAF7F2] p-3 text-sm text-darkText focus:bg-white focus:border-deepTeal focus:ring-1 focus:ring-deepTeal outline-none transition-all"
                  >
                    <option value="IN_PERSON">In-person Clinic Consultation</option>
                    <option value="ONLINE">Online Video / Phone Consultation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div>
                  <label htmlFor="consultationDate" className="block text-xs font-bold text-deepTeal uppercase tracking-wider mb-2">
                    Preferred Consultation Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="consultationDate"
                    name="consultationDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.consultationDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border-[#D9CDB7] bg-[#FAF7F2] p-3 text-sm text-darkText focus:bg-white focus:border-deepTeal focus:ring-1 focus:ring-deepTeal outline-none transition-all"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-bold text-deepTeal uppercase tracking-wider mb-2">
                    Preferred Time Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full rounded-xl border-[#D9CDB7] bg-[#FAF7F2] p-3 text-sm text-darkText focus:bg-white focus:border-deepTeal focus:ring-1 focus:ring-deepTeal outline-none transition-all"
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                    <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Reason for Consultation / Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-deepTeal uppercase tracking-wider mb-2">
                  Reason for Consultation / Health Concerns <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe what you would like to consult Dr. Shivani about (e.g. chronic skin issues, women's wellness, stress and sleep challenges)..."
                  className="w-full rounded-xl border-[#D9CDB7] bg-[#FAF7F2] p-3 text-sm text-darkText focus:bg-white focus:border-deepTeal focus:ring-1 focus:ring-deepTeal outline-none transition-all resize-none"
                ></textarea>
                <p className="text-[11px] text-darkText/60 mt-1">
                  Your information is kept strictly confidential and will only be reviewed by Dr. Shivani Amoji.
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-deepTeal hover:bg-darkTeal text-white font-medium py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all text-base disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <span>Request Consultation</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Alternate Contact Callout */}
          <div className="mt-8 pt-6 border-t border-cream flex flex-col sm:flex-row items-center justify-between text-xs text-darkText/70 gap-3">
            <span>Prefer an immediate booking via text?</span>
            <a
              href="https://wa.me/916305285083?text=Hello%20Dr.%20Shivani%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Aadhya%27s%20Homoeo%20Care."
              target="_blank"
              rel="noopener noreferrer"
              className="text-deepTeal font-bold hover:text-mutedOrange transition-colors flex items-center gap-1"
            >
              Contact on WhatsApp (+91 63052 85083) &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}


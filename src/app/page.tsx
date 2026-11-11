import { Suspense } from 'react';
import { Hero } from '@/components/Hero';
import { TrustSection } from '@/components/TrustSection';
import { About } from '@/components/About';
import { DoctorProfile } from '@/components/DoctorProfile';
import { ServicesGrid } from '@/components/ServicesGrid';
import { Disclaimer } from '@/components/Disclaimer';
import { HowItWorks } from '@/components/HowItWorks';
import { CTASection } from '@/components/CTASection';
import { ContactForm } from '@/components/ContactForm';
import { FAQ } from '@/components/FAQ';
import { InstagramSection } from '@/components/InstagramSection';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: "Aadhya's Homoeo Care",
    alternateName: "Aadhyas Homoeo Care",
    description:
      "Aadhya's Homoeo Care by Dr. Shivani Amoji, BHMS, MSc Psychology. Explore personalised homoeopathic consultation and holistic wellness care.",
    telephone: '+916305285083',
    url: 'https://aadhyashomoeocare.com',
    image: 'https://aadhyashomoeocare.com/images/doctor.jpg',
    logo: 'https://aadhyashomoeocare.com/images/logo.png',
    medicalSpecialty: 'Homeopathic',
    physician: {
      '@type': 'Physician',
      name: 'Dr. Shivani Amoji',
      jobTitle: 'Homoeopathic Physician & Psychologist',
      medicalSpecialty: 'Homeopathic',
      honorificPrefix: 'Dr.',
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Bachelor of Homeopathic Medicine and Surgery (BHMS)',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Master of Science in Psychology (MSc Psychology)',
        },
      ],
      identifier: 'Reg. No: 740/H/22',
    },
    sameAs: [
      'https://www.instagram.com/aadhyas_homoecare/',
      'https://wa.me/916305285083',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustSection />
      <About />
      <DoctorProfile />
      <ServicesGrid />
      <Disclaimer />
      <HowItWorks />
      <CTASection />
      <Suspense fallback={<div className="py-12 text-center text-sm text-darkText/60">Loading consultation form...</div>}>
        <ContactForm />
      </Suspense>
      <FAQ />
      <InstagramSection />
      <WhatsAppButton />
    </>
  );
}

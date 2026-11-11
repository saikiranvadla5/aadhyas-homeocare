import '../styles/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  metadataBase: new URL('https://aadhyashomoeocare.com'),
  title: "Aadhya's Homoeo Care | Dr. Shivani Amoji | BHMS, MSc Psychology",
  description:
    "Aadhya's Homoeo Care by Dr. Shivani Amoji, BHMS, MSc Psychology (Reg. No: 740/H/22). Mind • Body • Remedy. Personalised homoeopathic care and holistic wellness consultation.",
  keywords: [
    "Aadhya's Homoeo Care",
    "Dr. Shivani Amoji",
    "Homeopathy",
    "Homoeopathy",
    "BHMS",
    "MSc Psychology",
    "Holistic Wellness",
    "Personalised Care",
    "Mind Body Remedy"
  ],
  authors: [{ name: "Dr. Shivani Amoji" }],
  openGraph: {
    title: "Aadhya's Homoeo Care | Mind • Body • Remedy",
    description:
      "Personalised homoeopathic care for your mind, body and wellbeing by Dr. Shivani Amoji (BHMS, MSc Psychology).",
    url: 'https://aadhyashomoeocare.com',
    siteName: "Aadhya's Homoeo Care",
    images: [
      {
        url: '/images/doctor.jpg',
        width: 800,
        height: 1000,
        alt: "Dr. Shivani Amoji - Aadhya's Homoeo Care",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-cream text-darkText font-sans antialiased min-h-screen flex flex-col selection:bg-mutedOrange selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

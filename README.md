# Aadhya's Homoeo Care 🌿

A simple, elegant, trustworthy, and fully responsive business website for **Aadhya's Homoeo Care**, a homoeopathy and holistic wellness practice led by **Dr. Shivani Amoji** (BHMS, MSc Psychology &bull; Reg. No: 740/H/22).

> **Tagline:** Mind • Body • Remedy  
> **Instagram:** [@aadhyas_homoecare](https://www.instagram.com/aadhyas_homoecare/)  
> **Contact / WhatsApp:** [+91 63052 85083](https://wa.me/916305285083)  

---

## ✨ Features

- **Single-Page Patient Experience:**
  - **Sticky Navbar:** Mobile hamburger navigation with direct consultation booking and WhatsApp links.
  - **Hero Section:** Warm wellness aesthetic presenting Dr. Shivani Amoji's clinical focus and credentials.
  - **Trust & Credibility Section:** Highlights 3 core pillars (*Personalised consultations*, *Mind & body focused care*, *Patient-centred approach*).
  - **About the Practice:** Narrative on empathetic, unhurried care (*"Care that begins with listening."*).
  - **Physician Profile:** Qualifications (BHMS, MSc Psychology), State Registration No: 740/H/22, consultation philosophy, and clinical areas of interest.
  - **Treatments & Consultation Grid:** 8 neutral, compliant care categories (Women's Wellness, Digestive & Lifestyle Concerns, Stress & Emotional Wellbeing, Skin & Hair Concerns, Child & Family Wellness, etc.) with *"Discuss with Doctor"* WhatsApp actions.
  - **Medical Disclaimer:** Clear, responsible healthcare disclaimer regarding individual outcomes.
  - **How It Works:** 4-step stepper (*01 Book &bull; 02 Consultation &bull; 03 Personalised Guidance &bull; 04 Follow-up*).
  - **Interactive Consultation Form:** Form supporting both In-Person and Online appointments, validated with Zod, and saving enquiries securely to PostgreSQL.
  - **FAQ Section:** Accordion covering consultation duration, online booking, remedy delivery, and follow-ups.
  - **Instagram Highlights:** Branded quote cards reflecting community guidance and philosophy.
  - **Floating Action Buttons:** Floating WhatsApp button + mobile floating appointment button.

- **Dedicated Legal Pages:**
  - `/privacy`: Healthcare Privacy Policy.
  - `/terms`: Terms & Conditions.

- **Secure Staff & Admin Portal:**
  - Route: `/admin/login` & `/admin/dashboard`
  - Guarded by Next.js Edge Middleware and NextAuth credentials authentication.
  - 5 Key Metric Counters (Total, New, Contacted, Confirmed, Completed).
  - Patient Enquiry Table with instant status updates (`NEW`, `CONTACTED`, `CONFIRMED`, `COMPLETED`, `CANCELLED`) and admin notes.
  - Services & Treatments Manager (`/admin/services`).
  - Doctor Profile Editor (`/admin/doctor`).
  - Appointment & Clinic Settings (`/admin/settings`).

- **SEO & Performance:**
  - Dynamic `sitemap.xml` (`/sitemap.xml`) and `robots.txt` (`/robots.txt`).
  - OpenGraph social cards and Schema.org `MedicalBusiness` / `Physician` JSON-LD structured data.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + PostCSS |
| **Database** | PostgreSQL (Neon DB) |
| **ORM** | Prisma |
| **Authentication** | NextAuth.js (Credentials Provider) |
| **Validation** | Zod |
| **Icons** | Heroicons |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/aadhyas-homoeocare.git
cd aadhyas-homoeocare
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```

Ensure the following variables are defined in `.env`:
- `DATABASE_URL`: Your PostgreSQL connection string.
- `NEXTAUTH_SECRET`: A random 32+ character string.
- `NEXTAUTH_URL`: `http://localhost:3005` (or your production URL).
- `ADMIN_EMAIL`: Admin login email (e.g., `saikiranvadla5@gmail.com`).
- `ADMIN_PASSWORD_HASH`: Hashed password for admin authentication.

### 4. Database Setup
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3005](http://localhost:3005) in your browser.

---

## 🔒 Changing Admin Password

To update the admin password at any time, run:
```bash
node scripts/set-admin-password.js "YourNewPassword"
```
This updates both your local `.env` and the PostgreSQL database `Setting` table with the new bcrypt hash.

---

## 📄 License
&copy; 2026 Aadhya's Homoeo Care. All rights reserved.


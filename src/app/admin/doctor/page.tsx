'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  InboxStackIcon,
  SparklesIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function AdminDoctorPage() {
  const router = useRouter();
  const { status: authStatus } = useSession();

  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.replace('/admin/login');
    }
  }, [authStatus, router]);

  const [doctor, setDoctor] = useState({
    name: 'Dr. Shivani Amoji',
    qualifications: 'BHMS, MSc Psychology',
    registration: '740/H/22',
    bio: "Dedicated to providing personalised care with a holistic approach to health and wellbeing.",
    education: 'BHMS - Bachelor of Homeopathic Medicine & Surgery, MSc Psychology',
    interests: 'Constitutional Homoeopathy, Women’s Wellness, Stress & Emotional Health, Skin & Hair',
    philosophy: 'Listening attentively, understanding root causes, and treating the individual as a whole.',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const res = await fetch('/api/admin/settings');
        if (res.ok) {
          const data = await res.json();
          if (data.doctor) {
            setDoctor((prev) => ({ ...prev, ...data.doctor }));
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoc();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDoctor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSavedSuccess(false);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doctor }),
      });

      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 4000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-darkText flex flex-col">
      <header className="bg-deepTeal text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-white/10 border border-cream/30 relative flex items-center justify-center">
              <Image src="/images/logo.png" alt="Logo" width={36} height={36} className="object-cover" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg block leading-tight">Aadhya&apos;s Homoeo Care</span>
              <span className="text-[11px] text-cream/70 block font-medium">Doctor Profile Editor</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              target="_blank"
              className="text-xs bg-darkTeal hover:bg-[#073330] text-cream px-3 py-1.5 rounded-full border border-cream/20"
            >
              View Site &rarr;
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="flex items-center gap-1.5 text-xs bg-red-800/60 hover:bg-red-800 text-white px-3 py-1.5 rounded-full"
            >
              <ArrowRightOnRectangleIcon className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        <div className="flex flex-wrap gap-2 border-b border-[#DDD3C1] pb-3">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-cream text-deepTeal text-xs font-semibold border border-[#DDD3C1] transition-colors"
          >
            <InboxStackIcon className="w-4 h-4" />
            <span>Enquiries &amp; Dashboard</span>
          </Link>
          <Link
            href="/admin/services"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-cream text-deepTeal text-xs font-semibold border border-[#DDD3C1] transition-colors"
          >
            <SparklesIcon className="w-4 h-4 text-mutedOrange" />
            <span>Services Management</span>
          </Link>
          <Link
            href="/admin/doctor"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-deepTeal text-white text-xs font-bold shadow-sm"
          >
            <UserCircleIcon className="w-4 h-4 text-cream" />
            <span>Doctor Profile</span>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-cream text-deepTeal text-xs font-semibold border border-[#DDD3C1] transition-colors"
          >
            <Cog6ToothIcon className="w-4 h-4 text-darkText/70" />
            <span>Appointment &amp; Site Settings</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DEC9] shadow-sm max-w-3xl">
          <h2 className="text-xl font-bold text-deepTeal mb-6">Doctor Professional Credentials</h2>

          {savedSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
              <span>Doctor profile details successfully saved to database!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Doctor Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={doctor.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Qualifications</label>
                <input
                  type="text"
                  name="qualifications"
                  value={doctor.qualifications}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Registration Number</label>
                <input
                  type="text"
                  name="registration"
                  value={doctor.registration}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Photo Asset Path</label>
                <input
                  type="text"
                  disabled
                  value="/images/doctor.jpg"
                  className="w-full rounded-xl border border-[#D9CDB7] bg-gray-100 p-2.5 text-sm text-gray-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Areas of Interest / Clinical Focus</label>
              <textarea
                name="interests"
                rows={2}
                value={doctor.interests}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Consultation Philosophy</label>
              <textarea
                name="philosophy"
                rows={3}
                value={doctor.philosophy}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="bg-deepTeal hover:bg-darkTeal text-white text-xs font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow"
            >
              {saving ? 'Saving...' : 'Update Doctor Profile'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}


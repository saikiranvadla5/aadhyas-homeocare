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

export default function AdminSettingsPage() {
  const router = useRouter();
  const { status: authStatus } = useSession();

  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.replace('/admin/login');
    }
  }, [authStatus, router]);

  const [settings, setSettings] = useState({
    clinicPhone: '+91 63052 85083',
    whatsappNumber: '916305285083',
    instagramUrl: 'https://www.instagram.com/aadhyas_homoecare/',
    availableDays: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday',
    morningSlot: '10:00 AM - 01:00 PM',
    afternoonSlot: '02:00 PM - 05:00 PM',
    eveningSlot: '05:00 PM - 08:00 PM',
    onlineConsultEnabled: 'true',
    inpersonConsultEnabled: 'true',
    heroHeadline: 'Your health deserves care that sees the whole you.',
    heroSubheadline: 'Personalised homoeopathic care for your mind, body and wellbeing.',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/admin/settings');
        if (res.ok) {
          const data = await res.json();
          if (data.settings && Object.keys(data.settings).length > 0) {
            setSettings((prev) => ({ ...prev, ...data.settings }));
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSavedSuccess(false);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings }),
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
              <span className="text-[11px] text-cream/70 block font-medium">Practice &amp; Appointment Settings</span>
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
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-cream text-deepTeal text-xs font-semibold border border-[#DDD3C1] transition-colors"
          >
            <UserCircleIcon className="w-4 h-4 text-deepTeal" />
            <span>Doctor Profile</span>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-deepTeal text-white text-xs font-bold shadow-sm"
          >
            <Cog6ToothIcon className="w-4 h-4 text-cream" />
            <span>Appointment &amp; Site Settings</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DEC9] shadow-sm max-w-3xl space-y-6">
          <h2 className="text-xl font-bold text-deepTeal">Clinic Appointment &amp; Public Settings</h2>

          {savedSuccess && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
              <span>Settings updated successfully!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="border-b border-cream pb-5 space-y-4">
              <h3 className="text-sm font-bold text-deepTeal uppercase tracking-wider">Contact Channels</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-deepTeal uppercase mb-1">WhatsApp Clean Number</label>
                  <input
                    type="text"
                    name="whatsappNumber"
                    value={settings.whatsappNumber}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
                  />
                  <span className="text-[10px] text-darkText/60">Country code + number without symbols (e.g. 916305285083)</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Display Clinic Phone</label>
                  <input
                    type="text"
                    name="clinicPhone"
                    value={settings.clinicPhone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Instagram Profile URL</label>
                <input
                  type="url"
                  name="instagramUrl"
                  value={settings.instagramUrl}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
                />
              </div>
            </div>

            <div className="border-b border-cream pb-5 space-y-4">
              <h3 className="text-sm font-bold text-deepTeal uppercase tracking-wider">Consultation Availability</h3>
              <div>
                <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Clinic Working Days</label>
                <input
                  type="text"
                  name="availableDays"
                  value={settings.availableDays}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-deepTeal uppercase mb-1">Morning Slot</label>
                  <input
                    type="text"
                    name="morningSlot"
                    value={settings.morningSlot}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-deepTeal uppercase mb-1">Afternoon Slot</label>
                  <input
                    type="text"
                    name="afternoonSlot"
                    value={settings.afternoonSlot}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-deepTeal uppercase mb-1">Evening Slot</label>
                  <input
                    type="text"
                    name="eveningSlot"
                    value={settings.eveningSlot}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2 text-xs"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="bg-deepTeal hover:bg-darkTeal text-white text-xs font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow"
            >
              {saving ? 'Saving...' : 'Save Configuration'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}


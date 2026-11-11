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
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

export default function AdminServicesPage() {
  const router = useRouter();
  const { status: authStatus } = useSession();

  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.replace('/admin/login');
    }
  }, [authStatus, router]);

  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/services');
      if (res.ok) {
        const data = await res.json();
        setServices(data.services || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    try {
      setSaving(true);
      const res = await fetch('/api/admin/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle,
          description: newDesc,
          icon: 'SparklesIcon',
          enabled: true,
          order: services.length + 1,
        }),
      });
      if (res.ok) {
        setNewTitle('');
        setNewDesc('');
        fetchServices();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    try {
      const res = await fetch(`/api/admin/services?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchServices();
      }
    } catch (err) {
      console.error(err);
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
              <span className="text-[11px] text-cream/70 block font-medium">Services &amp; Treatments Editor</span>
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
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-deepTeal text-white text-xs font-bold shadow-xs"
          >
            <SparklesIcon className="w-4 h-4 text-cream" />
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
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-cream text-deepTeal text-xs font-semibold border border-[#DDD3C1] transition-colors"
          >
            <Cog6ToothIcon className="w-4 h-4 text-darkText/70" />
            <span>Appointment &amp; Site Settings</span>
          </Link>
        </div>

        {/* Add New Service Form */}
        <div className="bg-white rounded-3xl p-6 border border-[#E8DEC9] shadow-sm">
          <h3 className="text-lg font-bold text-deepTeal mb-4 flex items-center gap-2">
            <PlusIcon className="w-5 h-5 text-mutedOrange" />
            <span>Add New Treatment or Service Category</span>
          </h3>

          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Service Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Skin & Hair Care"
                  className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-deepTeal uppercase mb-1">Short Description</label>
                <input
                  type="text"
                  required
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="1-2 sentences explaining the clinical focus..."
                  className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-2.5 text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="bg-deepTeal hover:bg-darkTeal text-white text-xs font-semibold px-5 py-2.5 rounded-full"
            >
              {saving ? 'Adding...' : 'Save & Publish Service'}
            </button>
          </form>
        </div>

        {/* Services List */}
        <div className="bg-white rounded-3xl p-6 border border-[#E8DEC9] shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-deepTeal">Current Practice Services</h3>
          {loading ? (
            <p className="text-xs text-darkText/60">Loading services...</p>
          ) : services.length === 0 ? (
            <p className="text-xs text-darkText/70">
              No custom services added in database yet. The website is currently displaying the 8 default vetted clinical categories. Add one above to create custom entries.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.id} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC9] flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-deepTeal text-sm">{s.title}</h4>
                    <p className="text-xs text-darkText/80 mt-1">{s.description}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete service"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


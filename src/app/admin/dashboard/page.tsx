'use client';

import { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  InboxStackIcon,
  SparklesIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ClockIcon,
  CheckCircleIcon,
  PhoneIcon,
  CalendarIcon,
  CheckBadgeIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

export default function AdminDashboardPage() {
  const router = useRouter();
  const { data: session, status: authStatus } = useSession();

  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.replace('/admin/login');
    }
  }, [authStatus, router]);

  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
  });
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'new' | 'confirmed'>('all');

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/enquiries');
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
        if (data.stats) {
          setStats(data.stats);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleStatusChange = async (id: number, status: string) => {
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        fetchEnquiries();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    if (activeTab === 'new') return e.status === 'NEW';
    if (activeTab === 'confirmed') return e.status === 'CONFIRMED';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-darkText flex flex-col">
      {/* Top Navbar */}
      <header className="bg-deepTeal text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-white/10 border border-cream/30 relative flex items-center justify-center">
              <Image src="/images/logo.png" alt="Logo" width={36} height={36} className="object-cover" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg block leading-tight">Aadhya&apos;s Homoeo Care</span>
              <span className="text-[11px] text-cream/70 block font-medium">Practice Admin Panel</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-block text-xs bg-darkTeal hover:bg-[#073330] text-cream px-3 py-1.5 rounded-full border border-cream/20"
            >
              View Public Website &rarr;
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="flex items-center gap-1.5 text-xs bg-red-800/60 hover:bg-red-800 text-white px-3 py-1.5 rounded-full transition-colors"
            >
              <ArrowRightOnRectangleIcon className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#DDD3C1] pb-3">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-deepTeal text-white text-xs font-bold shadow-sm"
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
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-cream text-deepTeal text-xs font-semibold border border-[#DDD3C1] transition-colors"
          >
            <Cog6ToothIcon className="w-4 h-4 text-darkText/70" />
            <span>Appointment &amp; Site Settings</span>
          </Link>
        </div>

        {/* 5 Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#E8DEC9] shadow-sm">
            <span className="text-xs font-bold uppercase text-darkText/60">Total Enquiries</span>
            <p className="text-3xl font-extrabold text-deepTeal mt-1.5">{stats.total}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-amber-700">New Requests</span>
            <p className="text-3xl font-extrabold text-amber-600 mt-1.5">{stats.new}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-blue-700">Contacted</span>
            <p className="text-3xl font-extrabold text-blue-600 mt-1.5">{stats.contacted}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-emerald-700">Confirmed</span>
            <p className="text-3xl font-extrabold text-emerald-600 mt-1.5">{stats.confirmed}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-purple-200 shadow-sm col-span-2 sm:col-span-1">
            <span className="text-xs font-bold uppercase text-purple-700">Completed</span>
            <p className="text-3xl font-extrabold text-purple-600 mt-1.5">{stats.completed}</p>
          </div>
        </div>

        {/* Enquiries Section */}
        <div className="bg-white rounded-3xl border border-[#E8DEC9] shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-cream flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-deepTeal">Patient Consultations &amp; Enquiries</h2>
              <p className="text-xs text-darkText/70 mt-0.5">Manage appointment requests, follow-ups, and notes</p>
            </div>

            {/* Quick Filter Pills */}
            <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-1 rounded-xl border border-[#DDD3C1]">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'all' ? 'bg-deepTeal text-white' : 'text-darkText/70 hover:text-darkText'
                }`}
              >
                All ({stats.total})
              </button>
              <button
                onClick={() => setActiveTab('new')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'new' ? 'bg-amber-600 text-white' : 'text-darkText/70 hover:text-darkText'
                }`}
              >
                New ({stats.new})
              </button>
              <button
                onClick={() => setActiveTab('confirmed')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'confirmed' ? 'bg-emerald-600 text-white' : 'text-darkText/70 hover:text-darkText'
                }`}
              >
                Confirmed ({stats.confirmed})
              </button>
            </div>
          </div>

          {/* Table */}
          {loading ? (
            <div className="py-12 text-center text-xs text-darkText/60">Loading consultations...</div>
          ) : filteredEnquiries.length === 0 ? (
            <div className="py-16 text-center text-sm text-darkText/70 space-y-2">
              <p className="font-semibold text-deepTeal">No enquiries found under this filter.</p>
              <p className="text-xs">Incoming consultation requests submitted on the website will appear here in real-time.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF7F2] text-deepTeal border-b border-[#E8DEC9] text-[11px] font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-4">Patient</th>
                    <th className="py-3.5 px-4">Phone / WhatsApp</th>
                    <th className="py-3.5 px-4">Date &amp; Slot</th>
                    <th className="py-3.5 px-4">Mode</th>
                    <th className="py-3.5 px-4">Reason / Notes</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DEC9]/60">
                  {filteredEnquiries.map((enquiry) => {
                    const statusColor =
                      enquiry.status === 'NEW'
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : enquiry.status === 'CONFIRMED'
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                        : enquiry.status === 'CONTACTED'
                        ? 'bg-blue-100 text-blue-800 border-blue-300'
                        : enquiry.status === 'COMPLETED'
                        ? 'bg-purple-100 text-purple-800 border-purple-300'
                        : 'bg-gray-100 text-gray-800 border-gray-300';

                    return (
                      <tr key={enquiry.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                        <td className="py-4 px-4 font-semibold text-deepTeal">
                          <div>{enquiry.name}</div>
                          {enquiry.email && <div className="text-[11px] text-darkText/60 font-normal">{enquiry.email}</div>}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <a
                            href={`https://wa.me/${enquiry.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-deepTeal font-medium hover:text-mutedOrange flex items-center gap-1"
                          >
                            <PhoneIcon className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{enquiry.phone}</span>
                          </a>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap text-xs">
                          <div className="font-semibold text-darkText">
                            {new Date(enquiry.consultationDate).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </div>
                          <div className="text-[11px] text-darkText/60">{enquiry.preferredTime}</div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              enquiry.method === 'IN_PERSON' ? 'bg-amber-50 text-amber-800' : 'bg-blue-50 text-blue-800'
                            }`}
                          >
                            {enquiry.method === 'IN_PERSON' ? 'In-Person' : 'Online'}
                          </span>
                        </td>
                        <td className="py-4 px-4 max-w-xs text-xs text-darkText/80">
                          <p className="line-clamp-2">{enquiry.message || 'No specific note provided.'}</p>
                          {enquiry.adminNote && (
                            <p className="text-[10px] text-mutedOrange italic mt-0.5 font-medium">
                              Note: {enquiry.adminNote}
                            </p>
                          )}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${statusColor}`}>
                            {enquiry.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap space-x-1.5">
                          <select
                            value={enquiry.status}
                            onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                            className="text-xs bg-[#FAF7F2] border border-[#DDD3C1] rounded-lg px-2 py-1 outline-none font-medium cursor-pointer"
                          >
                            <option value="NEW">New</option>
                            <option value="CONTACTED">Contacted</option>
                            <option value="CONFIRMED">Confirmed</option>
                            <option value="COMPLETED">Completed</option>
                            <option value="CANCELLED">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}


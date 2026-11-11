'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('saikiranvadla5@gmail.com');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError('Invalid admin credentials. Please verify your email and password.');
      } else {
        router.push('/admin/dashboard');
        router.refresh();
      }
    } catch (err) {
      setError('An error occurred during authentication.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-[#FAF6EE] to-softBeige flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-deepTeal relative bg-white flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Aadhya's Homoeo Care Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </Link>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deepTeal">
          Admin Portal Login
        </h2>
        <p className="mt-1 text-xs text-darkText/70 uppercase tracking-widest font-semibold">
          Aadhya&apos;s Homoeo Care &bull; Mind &bull; Body &bull; Remedy
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 sm:px-10 shadow-lg rounded-3xl border border-[#E8DEC9]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-deepTeal mb-1.5">
                Admin Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-3 text-sm text-darkText focus:bg-white focus:border-deepTeal focus:ring-1 focus:ring-deepTeal outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-deepTeal mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-[#D9CDB7] bg-[#FAF7F2] p-3 text-sm text-darkText focus:bg-white focus:border-deepTeal focus:ring-1 focus:ring-deepTeal outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-full bg-deepTeal hover:bg-darkTeal text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
            >
              <LockClosedIcon className="w-4 h-4 text-cream/80" />
              <span>{isLoading ? 'Verifying...' : 'Sign In to Dashboard'}</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-cream text-center">
            <Link href="/" className="text-xs text-mutedOrange hover:underline font-medium">
              &larr; Return to main clinic website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Admin Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'doctor@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('[Auth] Missing email or password in request');
          return null;
        }

        const inputEmail = credentials.email.toLowerCase().trim();
        const inputPassword = credentials.password;

        // 1. Retrieve expected email & hash from DB or ENV
        let expectedEmail = (process.env.ADMIN_EMAIL || '').toLowerCase().trim();
        let expectedHash = (process.env.ADMIN_PASSWORD_HASH || '').trim();

        try {
          const dbEmail = await prisma.setting.findUnique({ where: { key: 'adminEmail' } });
          if (dbEmail?.value) {
            expectedEmail = dbEmail.value.toLowerCase().trim();
          }

          const dbHash = await prisma.setting.findUnique({ where: { key: 'adminPasswordHash' } });
          if (dbHash?.value) {
            expectedHash = dbHash.value.trim();
          }
        } catch (dbErr) {
          console.warn('[Auth] Database settings lookup notice:', dbErr);
        }

        console.log('[Auth] Attempting login for:', inputEmail);
        console.log('[Auth] Expected email:', expectedEmail);
        console.log('[Auth] Hash available:', Boolean(expectedHash));

        if (!expectedEmail || !expectedHash) {
          console.error('[Auth] Missing expectedEmail or expectedHash');
          return null;
        }

        if (inputEmail !== expectedEmail) {
          console.log('[Auth] Email mismatch:', inputEmail, '!==', expectedEmail);
          return null;
        }

        // Compare using bcrypt
        let isValid = false;
        try {
          isValid = await bcrypt.compare(inputPassword, expectedHash);
          if (!isValid && inputPassword.trim() !== inputPassword) {
            // Also try trimmed password if user had accidental whitespace
            isValid = await bcrypt.compare(inputPassword.trim(), expectedHash);
          }
        } catch (compareErr) {
          console.error('[Auth] bcrypt compare error:', compareErr);
        }

        console.log('[Auth] Password match result:', isValid);

        if (!isValid) {
          return null;
        }

        return {
          id: '1',
          name: 'Clinic Administrator',
          email: expectedEmail,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || 'fbe27fe4641a3815b0f81cfdb70f7ac5c4e4cae87651af298fc0097aa7957f67',
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/admin/login',
  },
};

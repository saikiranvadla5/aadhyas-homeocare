import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const settingsList = await prisma.setting.findMany();
    const settings: Record<string, string> = {};
    settingsList.forEach((s) => {
      // Don't expose password hashes
      if (s.key !== 'adminPasswordHash') {
        settings[s.key] = s.value;
      }
    });

    let doctor = await prisma.doctor.findFirst();
    if (!doctor) {
      doctor = {
        id: 1,
        name: 'Dr. Shivani Amoji',
        qualifications: 'BHMS, MSc Psychology',
        registration: '740/H/22',
        bio: "Dedicated to holistic and constitutional homeopathic consultation.",
        photoUrl: '/images/doctor.jpg',
        education: 'BHMS, MSc Psychology',
        interests: "Constitutional Homoeopathy, Women's Wellness, Stress & Emotional Health",
        philosophy: 'Listening attentively, understanding root causes, and treating the individual as a whole.',
      };
    }

    return NextResponse.json({ settings, doctor });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { settings, doctor } = body;

    if (settings && typeof settings === 'object') {
      for (const [key, value] of Object.entries(settings)) {
        if (key !== 'adminPasswordHash') {
          await prisma.setting.upsert({
            where: { key },
            update: { value: String(value) },
            create: { key, value: String(value) },
          });
        }
      }
    }

    if (doctor && typeof doctor === 'object') {
      const existing = await prisma.doctor.findFirst();
      if (existing) {
        await prisma.doctor.update({
          where: { id: existing.id },
          data: {
            name: doctor.name,
            qualifications: doctor.qualifications,
            registration: doctor.registration,
            bio: doctor.bio,
            education: doctor.education,
            interests: doctor.interests,
            philosophy: doctor.philosophy,
          },
        });
      } else {
        await prisma.doctor.create({
          data: {
            name: doctor.name || 'Dr. Shivani Amoji',
            qualifications: doctor.qualifications || 'BHMS, MSc Psychology',
            registration: doctor.registration || '740/H/22',
            bio: doctor.bio || '',
            education: doctor.education || '',
            interests: doctor.interests || '',
            philosophy: doctor.philosophy || '',
          },
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Update settings error:', err);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}

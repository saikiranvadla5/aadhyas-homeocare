import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const EnquirySchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  phone: z.string().trim().min(6, 'Valid phone number is required'),
  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .optional()
    .or(z.literal('')),
  consultationDate: z.string().refine((d) => !isNaN(Date.parse(d)), 'Invalid consultation date'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  method: z.enum(['IN_PERSON', 'ONLINE']),
  message: z.string().trim().min(2, 'Reason for consultation is required'),
  recaptchaToken: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = EnquirySchema.parse(data);

    // Optional Turnstile / reCAPTCHA validation if token is passed
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (parsed.recaptchaToken && secretKey && secretKey.length > 5) {
      try {
        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: secretKey,
            response: parsed.recaptchaToken,
          }),
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          console.warn('Turnstile verification notice:', verifyData);
        }
      } catch (verifyErr) {
        console.warn('Turnstile network verification notice:', verifyErr);
      }
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        name: parsed.name,
        phone: parsed.phone,
        email: parsed.email ? parsed.email : null,
        consultationDate: new Date(parsed.consultationDate),
        preferredTime: parsed.preferredTime,
        method: parsed.method,
        message: parsed.message,
        status: 'NEW',
      },
    });

    return NextResponse.json({ success: true, id: enquiry.id });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues[0]?.message || 'Validation error' }, { status: 400 });
    }
    console.error('Contact submission error:', err);
    return NextResponse.json({ error: 'Failed to process consultation request. Please try again.' }, { status: 500 });
  }
}

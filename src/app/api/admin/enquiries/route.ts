import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';
    const method = searchParams.get('method') || '';

    const where: any = {};

    if (status && status !== 'ALL') {
      where.status = status;
    }

    if (method && method !== 'ALL') {
      where.method = method;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { message: { contains: search, mode: 'insensitive' } },
      ];
    }

    const enquiries = await prisma.enquiry.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    const stats = {
      total: await prisma.enquiry.count(),
      new: await prisma.enquiry.count({ where: { status: 'NEW' } }),
      contacted: await prisma.enquiry.count({ where: { status: 'CONTACTED' } }),
      confirmed: await prisma.enquiry.count({ where: { status: 'CONFIRMED' } }),
      completed: await prisma.enquiry.count({ where: { status: 'COMPLETED' } }),
      cancelled: await prisma.enquiry.count({ where: { status: 'CANCELLED' } }),
    };

    return NextResponse.json({ enquiries, stats });
  } catch (err: any) {
    console.error('Fetch enquiries error:', err);
    return NextResponse.json({ error: 'Failed to fetch enquiries' }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { id, status, adminNote } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing enquiry id' }, { status: 400 });
    }

    const updated = await prisma.enquiry.update({
      where: { id: Number(id) },
      data: {
        ...(status ? { status } : {}),
        ...(adminNote !== undefined ? { adminNote } : {}),
      },
    });

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (err: any) {
    console.error('Update enquiry error:', err);
    return NextResponse.json({ error: 'Failed to update enquiry' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing enquiry id' }, { status: 400 });
    }

    await prisma.enquiry.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Delete enquiry error:', err);
    return NextResponse.json({ error: 'Failed to delete enquiry' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ services });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, icon, enabled, order } = body;

    const newService = await prisma.service.create({
      data: {
        title: title || 'New Treatment Service',
        description: description || '',
        icon: icon || 'SparklesIcon',
        enabled: enabled ?? true,
        order: order ?? 0,
      },
    });

    return NextResponse.json({ success: true, service: newService });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { id, title, description, icon, enabled, order } = body;

    const updated = await prisma.service.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        icon,
        enabled,
        order,
      },
    });

    return NextResponse.json({ success: true, service: updated });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
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

    await prisma.service.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}

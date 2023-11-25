import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const body = await req.json();
    const ticket = await prisma.ticket.create({
      data: {
        title: body.title,
        description: body.description,
        category: body.category,
        priority: body.priority,
        progress: body.progress,
        status: body.status,
        active: body.active,
      },
    });
    return NextResponse.json(
      {
        data: {
          message: 'Create ticket success',
          data: ticket,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Fail CREATE ticket',
        error: error,
      },
      { status: 500 }
    );
  }
};

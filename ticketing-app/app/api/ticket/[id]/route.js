import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const DELETE = async (req, context) => {
  try {
    const { params } = context;
    await prisma.ticket.delete({
      where: {
        id: params.id,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const PATCH = async (req, context) => {
  try {
    const { params } = context;
    const body = await req.json();
    const newTicket = await prisma.ticket.update({
      where: {
        id: params.id,
      },
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
          message: 'Update ticket success',
          data: newTicket,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const GET = async (req, context) => {
  try {
    const { params } = context;
    const ticket = await prisma.ticket.findUnique({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(
      {
        message: 'Get ticket success',
        data: ticket,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

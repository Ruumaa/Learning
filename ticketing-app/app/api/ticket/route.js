import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const ticket = await prisma.ticket.findMany();
    return NextResponse.json(
      {
        message: 'Get Data Success',
        data: ticket,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Fail Get Data',
        error: error,
      },
      { status: 500 }
    );
  }
};

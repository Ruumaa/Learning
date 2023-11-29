import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { username, email, password } = await req.json();
    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingEmail) {
      return NextResponse.json(
        { message: 'Email already exist', user: null },
        { status: 409 }
      );
    }
    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: userPassword, ...rest } = newUser;
    return NextResponse.json(
      {
        user: rest,
        message: 'Register success',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: 'Register Failed',
        error,
      },
      { status: 500 }
    );
  }
};

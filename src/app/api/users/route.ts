import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const user = await prisma.user.create({ data: { name: body.name, email: body.email, password: hashedPassword } });
  return new Response(JSON.stringify(user), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const user = await prisma.user.delete({ where: { id } });

  if (user) {
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ error: "User not found" }), {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id } = body;
  const user = await prisma.user.update({ where: { id }, data: { name: body.name, email: body.email, password: body.password } });
  if (user) {
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ error: "User not found" }), {
    status: 404,
  });
}


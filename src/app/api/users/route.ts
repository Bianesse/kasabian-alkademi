import { PrismaClient } from '@prisma/client';

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
  const user = await prisma.user.create({ data: { name: body.name, email: 'test2@gmail.com', password: 'test2' } });
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
  const { id, name } = await request.json();
  const user = await prisma.user.update({ where: { id }, data: { name } });
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


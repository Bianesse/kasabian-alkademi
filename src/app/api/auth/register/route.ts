import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import {z} from 'zod';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const body = await request.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({ data: { name: body.username, email: body.email, password: hashedPassword } });
    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
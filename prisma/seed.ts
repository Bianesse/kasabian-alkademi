/* import { PrismaClient, Prisma } from "../src/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Alice",
        email: "alice@prisma.io",
        password: await bcrypt.hash("alice123", 10),
        Post: {
            create: [
                {
                    title: "Join the Prisma Discord",
                    content: "https://pris.ly/discord",
                    published: true,
                },
                {
                    title: "Prisma on YouTube",
                    content: "https://pris.ly/youtube",
                },
            ],
        },
        Comment: {
            create: [
                {
                    comment: "First comment",
                    Post: {
                        connect: {
                            id: 1,
                        },
                    },
                },
            ],
        },
    },
    {
        name: "Bob",
        email: "bob@prisma.io",
        password: await bcrypt.hash("bob123", 10),
        Post: {
            create: [
                {
                    title: "Follow Prisma on Twitter",
                    content: "https://www.twitter.com/prisma",
                    published: true,
                },
            ],
        },
        Comment: {
            create: [
                {
                    comment: "Second comment",
                    Post: {
                        connect: {
                            id: 1,
                        },
                    },
                },
            ],
        },
    },
];

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u });
    }
}

main(); */
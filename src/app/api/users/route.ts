const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Bob Smith" },
];

export async function GET() {
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function POST(request: Request) {
    const body = await request.json();

    users.push(body);
    return new Response(JSON.stringify(body), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function DELETE(request: Request) {
    const body = await request.json();

    users.splice(users.indexOf(body), 1);
    return new Response(JSON.stringify(body), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

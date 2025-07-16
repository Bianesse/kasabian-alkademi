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
    const { id } = await request.json();
  
    const index = users.findIndex((user) => user.id === id);
  
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
  
      return new Response(JSON.stringify(deletedUser), {
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
  const user = users.find(u => u.id === id);
  if (user) {
    user.name = name;
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ error: "User not found" }), {
    status: 404,
  });
}


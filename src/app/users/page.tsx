'use client';
import React, { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
};

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState("");

    const fetchUser = async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        console.log('fetched data:', data);
        setUsers(data);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const id = (Math.floor(Math.random() * 100) + 1) + (Math.floor(Math.random() * 100) + 1);
        const res = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id, name: newUser }),
        });
        const data = await res.json();
        setUsers([...users, data]);
        setNewUser("");
    };

    /* const handleDelete = async (id: number) => {
        const res = await fetch(`/api/users/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        setUsers(users.filter((user: User) => user.id !== id));
    }; */

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="px-6 py-12 bg-black min-h-screen mx-20">
            <h1 className="text-4xl font-bold text-center mb-10 text-white">Users</h1>

            <form className="flex items-center gap-2 py-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Add a new user..."
                    className="px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                />
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>


            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                {users.map((user: User) => (
                    <div key={user.id} className="break-inside-avoid bg-gray-800 p-6 rounded-xl shadow text-white">
                        <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                        <h3 className="text-sm text-gray-400 mb-2">User #{user.id}</h3>
                        <div className="flex items-center gap-2">
                            <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg bg-transparent hover:bg-blue-600 hover:text-white transition-colors duration-200">
                                Edit
                            </button>
                            <button className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded-lg bg-transparent hover:bg-red-600 hover:text-white transition-colors duration-200">
                                Delete
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
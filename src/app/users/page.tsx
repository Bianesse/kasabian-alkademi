'use client';
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const {data: session} = useSession();

    const fetchUser = async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);
    };

    const handleSubmit = async () => {
        const newUser: User = {
            name: newName,
            email: newEmail,
            password: newPassword,
            id: 0
        };

        const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });

        if (res.ok) {
            setUsers([...users, newUser]);
            setNewName("");
            setNewEmail("");
            setNewPassword("");
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this user?")) return;

        const res = await fetch("/api/users", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });

        if (res.ok) {
            setUsers(users.filter(user => user.id !== id));
        }
    };

    const openEditModal = (user: User) => {
        setEditingUser({ ...user });
        (document.getElementById(`edit_modal`) as HTMLDialogElement)?.showModal();
    };

    const handleEditSubmit = async () => {
        if (!editingUser) return;

        const res = await fetch("/api/users", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editingUser),
        });

        if (res.ok) {
            await fetchUser();
            setEditingUser(null);
            (document.getElementById(`edit_modal`) as HTMLDialogElement)?.close();
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="px-6 py-12 bg-black min-h-screen mx-20">
            <h1 className="text-4xl font-bold text-center mb-10 text-white">Users</h1>
            {session && (
                <p>You are logged in as {session.user?.name}</p>
            ) }

            <form className="flex flex-col sm:flex-row sm:items-center gap-2 py-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Name"
                    className="px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                    type="button"
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
                        <h3 className="text-sm text-gray-400 mb-1">{user.email}</h3>
                        <p className="text-xs text-gray-500 mb-2">User #{user.id}</p>
                        <div className="flex items-center gap-2">
                            <button
                                className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg bg-transparent hover:bg-blue-600 hover:text-white transition-colors duration-200"
                                onClick={() => openEditModal(user)}
                            >
                                Edit
                            </button>
                            <button
                                className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded-lg bg-transparent hover:bg-red-600 hover:text-white transition-colors duration-200"
                                onClick={() => handleDelete(user.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <dialog id={`edit_modal`} className="modal">
                <div className="modal-box bg-gray-900 text-white">
                    <h3 className="font-bold text-lg mb-4">Edit User</h3>
                    <input
                        type="text"
                        className="w-full mb-2 px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name"
                        value={editingUser?.name || ""}
                        onChange={(e) =>
                            setEditingUser((prev) =>
                                prev ? { ...prev, name: e.target.value } : null
                            )
                        }
                    />
                    <input
                        type="email"
                        className="w-full mb-2 px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                        value={editingUser?.email || ""}
                        onChange={(e) =>
                            setEditingUser((prev) =>
                                prev ? { ...prev, email: e.target.value } : null
                            )
                        }
                    />
                    <input
                        type="password"
                        className="w-full mb-4 px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                        value={editingUser?.password || ""}
                        onChange={(e) =>
                            setEditingUser((prev) =>
                                prev ? { ...prev, password: e.target.value } : null
                            )
                        }
                    />
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-2">
                            <button
                                type="button"
                                onClick={handleEditSubmit}
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    (document.getElementById(`edit_modal`) as HTMLDialogElement)?.close()
                                }
                                className="btn"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

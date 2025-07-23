"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (result?.error) {
          alert(result.error);
          console.error(result.error);
        } else {
          router.push("/");
        }
      };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Daftar
          </a>
        </p>
      </div>
    </div>
    )
}
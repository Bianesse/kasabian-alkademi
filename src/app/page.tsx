'use client';

import { useSession } from 'next-auth/react';


export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <div className="h-screen flex items-center justify-center flex-col">
        <h1 className="text-6xl font-extrabold text-white text-center">
          Welcome
        </h1>
        <h2 className="text-xl font-bold text-gray-400 text-center mt-3">{session?.user?.name}</h2>
      </div>
    </main>
  );
}


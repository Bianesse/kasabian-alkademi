import Link from "next/link";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Posts",
        href: "/posts",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
]
export default function Navbar() {
    return (
        <>
            <nav className="bg-black shadow-md px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <a href="#" className="text-2xl font-bold text-white">
                        Kasabian Alkademi
                    </a>

                    <div className="hidden md:flex space-x-6 text-white font-medium">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-blue-400"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Login
                    </button>
                </div>

                <div className="md:hidden">
                    <button className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

        </>

    );
}
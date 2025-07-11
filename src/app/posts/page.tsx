import Link from 'next/link';

const posts = [
    { id: 1, title: "Post Title 1", author: "Alice" },
    { id: 2, title: "Post Title 2", author: "Bob" },
    { id: 3, title: "Post Title 3", author: "Charlie" },
    { id: 4, title: "Post Title 4", author: "Diana" },
    { id: 5, title: "Post Title 5", author: "Edward" },
];
export default function Posts() {
    return (
        <div className="min-h-screen py-12 px-6 mx-20">
            <h1 className="text-4xl font-bold text-center mb-10 text-white">Posts</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {posts.map((post) => (
                    <Link href={`/posts/${post.id}`} key={post.id}>
                        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 text-white cursor-pointer">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <h3 className="text-sm text-gray-400 mb-2">By {post.author}</h3>
                            <p className="text-gray-300">
                                This is a brief description for {post.title}.
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
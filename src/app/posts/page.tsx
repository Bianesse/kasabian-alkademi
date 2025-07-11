import Link from 'next/link';

/* const posts = [
    { id: 1, title: "Post Title 1", author: "Alice" },
    { id: 2, title: "Post Title 2", author: "Bob" },
    { id: 3, title: "Post Title 3", author: "Charlie" },
    { id: 4, title: "Post Title 4", author: "Diana" },
    { id: 5, title: "Post Title 5", author: "Edward" },
]; */

export async function getPost() {
    const data = await fetch('https://dummyjson.com/posts');
    return data.json();
}

export default async function Posts() {
    const posts = await getPost();
    return (
        <div className="px-6 py-12 bg-black min-h-screen mx-20">
            <h1 className="text-4xl font-bold text-center mb-10 text-white">Posts</h1>

            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                {posts.posts.map((post) => (

                    <div key={post.id} className="break-inside-avoid bg-gray-800 p-6 rounded-xl shadow text-white">
                        <Link href={`/posts/${post.id}`} key={post.id}>
                            <h2 className="text-xl font-bold mb-1">{post.title}</h2>
                            <h3 className="text-sm text-gray-400 mb-2">By {post.author || post.userId || '-'}</h3>
                            <p className="text-gray-300">
                                This is a brief description for {post.title}.
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>




    );
}
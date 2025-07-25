import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

type PostsResponse = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};

async function getPost(): Promise<PostsResponse> {
  const res = await fetch('https://dummyjson.com/posts');
  return res.json();
}

export default async function Posts() {
  const posts = await getPost();

  return (
    <div className="px-6 py-12 bg-black min-h-screen mx-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">Posts</h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {posts.posts.map((post) => (
          <div
            key={post.id}
            className="break-inside-avoid bg-gray-800 p-6 rounded-xl shadow text-white"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-bold mb-1">{post.title}</h2>
              <h3 className="text-sm text-gray-400 mb-2">By User #{post.userId}</h3>
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

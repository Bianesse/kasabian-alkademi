async function getPostDetail(id: string) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  return res.json();
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  const post = await getPostDetail(id);
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-6 capitalize">{post.title}</h1>

        <div className="text-sm text-gray-400 mb-8 border-b border-gray-700 pb-4">
          <span>By <span className="text-white font-semibold">{post.userId}</span></span> · <span>-</span>
        </div>

        <article className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            {post.body}
          </p>
        </article>
      </div>
    </div>
  )
}

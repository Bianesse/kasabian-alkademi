'use client'
import { use } from 'react'

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-6 capitalize">Post title {id}</h1>

        <div className="text-sm text-gray-400 mb-8 border-b border-gray-700 pb-4">
          <span>By <span className="text-white font-semibold">-</span></span> · <span>-</span>
        </div>

        <article className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem vel lacus convallis
            vehicula a ut felis. Integer sed luctus est.
          </p>
          <p>
            Proin tincidunt, nunc sit amet volutpat volutpat, tortor arcu rhoncus ex, at sollicitudin dolor
            urna sed nisl. Sed efficitur dolor vitae lectus fringilla gravida.
          </p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-400">
            This is a sample quote that might be used inside the blog post to highlight something important.
          </blockquote>
          <p>
            Aenean at ante sed erat finibus tincidunt. Integer tincidunt vestibulum tortor, nec porta nulla
            malesuada nec.
          </p>
        </article>
      </div>
    </div>
  )
}

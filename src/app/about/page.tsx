export default function About() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold mb-4">About This Website</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to <span className="text-white font-semibold">-</span> This website is a personal project for Alkademi's bootcamp project.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            This platform is built using <span className="text-blue-400 font-semibold">Next.js</span> and
            <span className="text-blue-400 font-semibold"> Tailwind CSS.</span>
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            The goal is to write posts that are practical, easy to understand.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Feel free to explore the blog, check out the latest posts, and reach out via the contact page if
            you have any questions or feedback.
          </p>
        </div>
      </div>
    );
  }
  
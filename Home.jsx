function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-24">

      <h1 className="text-6xl font-extrabold mb-6">
        Microsoft Club 🚀
      </h1>

      <p className="max-w-2xl text-xl text-black-200 mb-10">
        A community of passionate developers building innovative
        projects using modern technologies and Microsoft tools.
      </p>

      <div className="flex gap-6 mb-16">
        <a
          href="/projects"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Explore Projects
        </a>

        <a
          href="/team"
          className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          Meet the Team
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">

        <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-3">Workshops 💡</h3>
          <p>Hands-on sessions on AI, Cloud, and Web Development.</p>
        </div>

        <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-3">Projects 🚀</h3>
          <p>Build innovative real-world applications with teammates.</p>
        </div>

        <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-3">Community 🌐</h3>
          <p>Connect with developers and grow your tech network.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;
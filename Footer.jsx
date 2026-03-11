function Footer() {
  return (
    <footer className="bg-black text-white mt-16">

      <div className="max-w-6xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-3">Microsoft Club 🚀</h2>
          <p className="text-gray-400">
            A community of developers passionate about learning,
            building projects, and exploring Microsoft technologies.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/team" className="hover:text-white">Team</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Connect</h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              GitHub
            </a>

            <a
              href="#"
              className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-700"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="bg-pink-500 px-3 py-2 rounded hover:bg-pink-600"
            >
              Instagram
            </a>

          </div>
        </div>

      </div>

      <div className="text-center py-4 border-t border-gray-800 text-gray-400">
        © 2026 Microsoft Club | DARIS REBEKHA S
      </div>

    </footer>
  );
}

export default Footer;
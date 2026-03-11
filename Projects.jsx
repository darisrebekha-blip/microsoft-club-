function Projects() {

  const projects = [
    {
      title: "AI Chatbot 🤖",
      description: "An AI assistant that answers student questions about club events and activities.",
      tech: "React, API, AI",
      github: "#"
    },
    {
      title: "Smart Attendance System 📷",
      description: "QR-based attendance system for students and workshops.",
      tech: "React, Firebase",
      github: "#"
    },
    {
      title: "Event Management Platform 📅",
      description: "A website to manage club events, registrations, and announcements.",
      tech: "React, Node.js, MongoDB",
      github: "#"
    },
    {
      title: "AI Resume Analyzer 📄",
      description: "Upload resumes and get AI suggestions to improve them.",
      tech: "Python, React",
      github: "#"
    },
    {
      title: "Study Resource Hub 📚",
      description: "Students can upload and download notes, study materials, and guides.",
      tech: "React, Firebase",
      github: "#"
    },
    {
      title: "Microsoft Learning Hub 💡",
      description: "Tutorial platform to learn Azure, Power BI, and GitHub tools.",
      tech: "React, Tailwind",
      github: "#"
    }
  ];

  return (
    <div className="px-8 py-16">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Projects 🚀
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >

            <h2 className="text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="mb-4">
              {project.description}
            </p>

            <p className="text-sm mb-4 text-gray-600">
              Tech: {project.tech}
            </p>

            <a
              href={project.github}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Project
            </a>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Projects;
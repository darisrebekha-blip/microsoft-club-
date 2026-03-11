function Team() {

  const members = [
    {
      name: "Daris Rebekha S",
      role: "Learner",
      github: "#",
      linkedin: "https://www.linkedin.com/in/daris-rebekha-448081395"
    },
    {
      name: "Adil Bin Haris Khan",
      role: "President",
      github: "#",
      linkedin: "https://www.linkedin.com/in/adilbhk/"
    },
    {
      name: "Reshma G V S",
      role: "vice president",
      github: "#",
      linkedin: "https://www.linkedin.com/in/reshma-g-v-s-740906295"
    },
    {
      name: "Vedas Kudalkar",
      role: "cluster coordinator",
      github: "#",
      linkedin: "https://www.linkedin.com/in/vedas-k/"
    },
    {
      name: "adhik ighthishaam",
      role: "Lead Developer",
      github: "#",
      linkedin: "https://www.linkedin.com/in/adhik-igthishaam"
    },
    {
      name: "archita S Nair",
      role: "co-lead",
      github: "#",
      linkedin: "https://www.linkedin.com/in/archita-nair-b12905311/"
    }
  ];

  return (
    <div className="px-8 py-16">

      <h1 className="text-4xl font-bold text-center mb-12">
        Meet Our Team 👨‍💻
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-xl shadow-lg text-center hover:scale-105 transition"
          >

          

            <h2 className="text-xl font-bold">
              {member.name}
            </h2>

            <p className="text-gray-600 mb-4">
              {member.role}
            </p>

            <div className="flex justify-center gap-4">

              <a
                href={member.github}
                className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
              >
                GitHub
              </a>

              <a
                href={member.linkedin}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                LinkedIn
              </a>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Team;
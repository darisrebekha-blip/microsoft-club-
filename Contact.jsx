function Contact() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20">

      <h1 className="text-4xl font-bold mb-10">Contact Us 📩</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">

        {/* Contact Form */}

        <form className="bg-white text-black p-8 rounded-xl shadow-lg flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 border rounded-lg"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

        {/* Contact Info */}

        <div className="flex flex-col gap-6">

          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>microsoftclub@email.com</p>
          </div>

          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p>College Campus, India</p>
          </div>

          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Social</h3>
            <p>LinkedIn • GitHub • Instagram</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;
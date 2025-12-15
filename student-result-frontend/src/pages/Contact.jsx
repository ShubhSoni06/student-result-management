import PublicLayout from "../components/PublicLayout";

function Contact() {
  return (
    <PublicLayout>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="bg-white/80 backdrop-blur p-10 rounded-2xl border border-slate-200">
          <h2 className="text-3xl font-semibold tracking-tight mb-6 text-slate-900">
            Get in Touch
          </h2>

          <p className="text-slate-600 mb-6">
            Have a question, suggestion, or feedback?  
            Fill out the form below and I’ll get back to you.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="button"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm"
            >
              Send Message
            </button>
          </form>

          <p className="text-xs text-slate-500 mt-4">
            * Form submission will be enabled after backend integration.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="bg-slate-100/70 p-10 rounded-2xl flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            Contact Information
          </h3>

          <p className="text-slate-600 mb-4">
            You can also reach out directly through the following:
          </p>

          <p className="text-slate-700 mb-2">
            📧 <strong>Email:</strong> support@studentresultsystem.com
          </p>

          <p className="text-slate-700 mb-6">
            👨‍💻 <strong>Developer:</strong> Shubh Soni
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-indigo-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-indigo-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </PublicLayout>
  );
}

export default Contact;

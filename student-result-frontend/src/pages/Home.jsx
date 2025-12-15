import PublicLayout from "../components/PublicLayout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <PublicLayout>
      <div className="space-y-28">

        {/* HERO SECTION */}
        <section className="text-center py-24 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-transparent" />

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
            Student Result{" "}
            <span className="text-indigo-600">Management</span> System
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg">
            A modern, role-based academic portal to manage students, subjects,
            marks, and performance metrics like{" "}
            <span className="font-medium text-slate-800">SPI</span> and{" "}
            <span className="font-medium text-slate-800">GPA</span>.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition transform hover:-translate-y-0.5 shadow-md"
            >
              Login as Demo User
            </Link>

            <Link
              to="/about"
              className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl hover:bg-indigo-50 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 text-sm text-slate-500">
            Demo access:{" "}
            <span className="font-medium">student@mail.com</span> /{" "}
            <span className="font-medium">admin@mail.com</span>
            <span className="ml-1">(any password)</span>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-center mb-14">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Role-Based Access",
                desc: "Separate dashboards for Admin and Students with secure access control.",
              },
              {
                title: "Result & SPI Calculation",
                desc: "Automatic SPI calculation using credit-weighted grade points.",
              },
              {
                title: "Admin Control Panel",
                desc: "Admins can manage subjects, enter marks, and update results dynamically.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition group"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-slate-100/70 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-center mb-14">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { title: "Admin", desc: "Adds subjects and enters marks for students." },
                { title: "System", desc: "Processes data and calculates grades & SPI." },
                { title: "Student", desc: "Views results and performance instantly." },
              ].map((step, index) => (
                <div key={index}>
                  <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2 text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER / DEVELOPER INFO */}
        <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
          <p className="font-medium text-slate-700">
            Developed by Shubh Soni
          </p>
          <p className="mt-1">
            Computer Engineering Student • Full-Stack Developer
          </p>

          <div className="mt-3 flex justify-center gap-4">
            <a
              href="#"
              className="hover:text-indigo-600 transition"
            >
              GitHub
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 transition"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} Student Result Management System
          </p>
        </footer>

      </div>
    </PublicLayout>
  );
}

export default Home;

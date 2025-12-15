import PublicLayout from "../components/PublicLayout";

function About() {
  return (
    <PublicLayout>
      <div className="space-y-20">

        {/* INTRO SECTION */}
        <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur p-10 rounded-2xl border border-slate-200">
          <h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900">
            About This Project
          </h2>

          <p className="text-slate-600 leading-relaxed">
            The <span className="font-medium text-slate-800">
            Student Result Management System
            </span> is a full-stack academic web application designed to
            digitally manage student records, subjects, marks, and performance
            indicators such as SPI and GPA.
          </p>
        </section>

        {/* PURPOSE & PROBLEM */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            Why This System Exists
          </h3>

          <p className="text-slate-600 leading-relaxed">
            In many educational institutions, academic data is still managed
            using fragmented tools or manual processes. This system aims to
            centralize result management, reduce errors, and provide instant
            access to academic performance for both administrators and students.
          </p>
        </section>

        {/* ARCHITECTURE */}
        <section className="max-w-5xl mx-auto bg-slate-100/70 p-10 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            System Architecture
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <h4 className="font-semibold mb-2 text-indigo-600">
                Frontend
              </h4>
              <p className="text-slate-600 text-sm">
                React, Tailwind CSS, component-based UI, role-based routing
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <h4 className="font-semibold mb-2 text-indigo-600">
                Backend
              </h4>
              <p className="text-slate-600 text-sm">
                RESTful APIs, authentication, authorization, business logic
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <h4 className="font-semibold mb-2 text-indigo-600">
                Database
              </h4>
              <p className="text-slate-600 text-sm">
                Relational schema for students, subjects, marks, and results
              </p>
            </div>
          </div>
        </section>

        {/* LEARNING OUTCOMES */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            What I Learned
          </h3>

          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>Designing role-based user interfaces and routing</li>
            <li>Implementing dynamic data flow between admin and student views</li>
            <li>Structuring scalable frontend architecture</li>
            <li>Applying modern UI/UX principles using Tailwind CSS</li>
          </ul>
        </section>

        {/* FUTURE SCOPE */}
        <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur p-10 rounded-2xl border border-slate-200">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            Future Enhancements
          </h3>

          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>GPA calculation across multiple semesters</li>
            <li>PDF and CSV result export</li>
            <li>Backend integration with real authentication</li>
            <li>Performance analytics and charts</li>
          </ul>
        </section>

      </div>
    </PublicLayout>
  );
}

export default About;

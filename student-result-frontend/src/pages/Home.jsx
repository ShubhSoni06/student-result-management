import PublicLayout from "../components/PublicLayout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <PublicLayout>
      <div className="space-y-20">

        {/* HERO SECTION */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">
            Student Result Management System
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            A modern, role-based academic portal to manage students, subjects,
            marks, and performance metrics like SPI and GPA.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">
                Role-Based Access
              </h3>
              <p className="text-gray-600">
                Separate dashboards for Admin and Students with secure access control.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">
                Result & SPI Calculation
              </h3>
              <p className="text-gray-600">
                Automatic SPI calculation using credit-weighted grade points.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">
                Admin Control
              </h3>
              <p className="text-gray-600">
                Admins can manage subjects, enter marks, and update results dynamically.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">Admin</h3>
                <p className="text-gray-600">
                  Adds subjects and enters marks for students.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">System</h3>
                <p className="text-gray-600">
                  Calculates grades and SPI automatically.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Student</h3>
                <p className="text-gray-600">
                  Views results and performance instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK + CTA */}
        <section className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">
            Built With Modern Technologies
          </h2>
          <p className="text-gray-600 mb-6">
            React • Tailwind CSS • REST Architecture • Relational Database Design
          </p>

          <Link
            to="/login"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Try the Demo
          </Link>
        </section>

      </div>
    </PublicLayout>
  );
}

export default Home;

import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">
        Student Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Result Card */}
        <Link
          to="/student/result"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            View Results
          </h3>
          <p className="text-gray-600">
            Check your subject-wise marks, grades, and SPI.
          </p>
        </Link>

        {/* Placeholder for future features */}
        <div className="bg-white p-6 rounded-xl shadow opacity-60">
          <h3 className="text-xl font-semibold mb-2">
            Profile (Coming Soon)
          </h3>
          <p className="text-gray-600">
            View and manage your student profile.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow opacity-60">
          <h3 className="text-xl font-semibold mb-2">
            Download Result (Coming Soon)
          </h3>
          <p className="text-gray-600">
            Download your official marksheet in PDF format.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default StudentDashboard;

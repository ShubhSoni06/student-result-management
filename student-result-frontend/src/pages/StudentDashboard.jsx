import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">
        Student Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* My Profile */}
        <Link
          to="/student/profile"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            My Profile
          </h3>
          <p className="text-gray-600">
            View your personal and academic details.
          </p>
        </Link>

        {/* View Results */}
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

        {/* Performance Trend */}
        <Link
          to="/student/performance"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            Performance Trend
          </h3>
          <p className="text-gray-600">
            Analyze your semester-wise performance over time.
          </p>
        </Link>

      </div>
    </Layout>
  );
}

export default StudentDashboard;

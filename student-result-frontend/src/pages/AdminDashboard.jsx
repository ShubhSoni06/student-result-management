import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/admin/subjects"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            Manage Subjects
          </h3>
          <p className="text-gray-600">
            Add, view, and manage subjects and credits.
          </p>
        </Link>

        <Link
          to="/admin/marks"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            Enter Marks
          </h3>
          <p className="text-gray-600">
            Assign marks to students and update results.
          </p>
        </Link>
      </div>
    </Layout>
  );
}

export default AdminDashboard;

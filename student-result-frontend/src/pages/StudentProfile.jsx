import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { getStudents } from "../services/students";

function StudentProfile() {
  const { user } = useAuth();
  const students = getStudents();

  const student = students.find(
    (s) => s.id === user?.studentId
  );

  if (!student) {
    return (
      <Layout>
        <p className="text-center text-red-500">
          Student profile not found.
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Student Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">

          <div>
            <p className="text-sm text-slate-500">Name</p>
            <p className="font-medium">{student.name}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Email</p>
            <p className="font-medium">{student.email}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Enrollment Number</p>
            <p className="font-medium">{student.enrollment}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Course</p>
            <p className="font-medium">{student.course}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Branch</p>
            <p className="font-medium">{student.branch}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Current Semester</p>
            <p className="font-medium">{student.semester}</p>
          </div>

        </div>

        <div className="mt-8 text-sm text-slate-500 text-center">
          Profile information is managed by the administrator.
        </div>
      </div>
    </Layout>
  );
}

export default StudentProfile;

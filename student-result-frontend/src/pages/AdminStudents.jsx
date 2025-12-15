import { useState } from "react";
import Layout from "../components/Layout";
import { getStudents, addStudent } from "../services/students";

function AdminStudents() {
  const [students, setStudents] = useState(getStudents());
  const [form, setForm] = useState({
    name: "",
    enrollment: "",
    course: "",
    branch: "",
    semester: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (
      !form.name ||
      !form.enrollment ||
      !form.course ||
      !form.branch ||
      !form.semester
    ) {
      alert("Please fill all fields");
      return;
    }

    addStudent({
      ...form,
      semester: Number(form.semester),
    });

    setStudents(getStudents());
    setForm({
      name: "",
      enrollment: "",
      course: "",
      branch: "",
      semester: "",
    });
  };

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6">
        Manage Students
      </h2>

      {/* Add Student Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="name"
            placeholder="Student Name"
            className="border rounded px-3 py-2"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="enrollment"
            placeholder="Enrollment Number"
            className="border rounded px-3 py-2"
            value={form.enrollment}
            onChange={handleChange}
          />

          <select
            name="course"
            className="border rounded px-3 py-2"
            value={form.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Diploma">Diploma</option>
            <option value="Degree">Degree</option>
          </select>

          <input
            name="branch"
            placeholder="Branch"
            className="border rounded px-3 py-2"
            value={form.branch}
            onChange={handleChange}
          />

          <input
            name="semester"
            type="number"
            placeholder="Semester"
            className="border rounded px-3 py-2"
            value={form.semester}
            onChange={handleChange}
          />

          <button
            onClick={handleAdd}
            className="bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700 transition"
          >
            Add Student
          </button>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-white rounded-xl shadow overflow-hidden max-w-4xl">
        <table className="w-full border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2">Enrollment</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Branch</th>
              <th className="border px-4 py-2">Semester</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id} className="hover:bg-slate-50">
                <td className="border px-4 py-2">{stu.name}</td>
                <td className="border px-4 py-2 text-center">{stu.enrollment}</td>
                <td className="border px-4 py-2 text-center">{stu.course}</td>
                <td className="border px-4 py-2 text-center">{stu.branch}</td>
                <td className="border px-4 py-2 text-center">{stu.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default AdminStudents;

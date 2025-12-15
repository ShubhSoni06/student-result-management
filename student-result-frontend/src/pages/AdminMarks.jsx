import { useState } from "react";
import Layout from "../components/Layout";
import { getStudents } from "../services/students";
import { getSubjects } from "../services/subjects";
import { saveMarks } from "../services/marks";
import { useAuth } from "../context/AuthContext";

function AdminMarks() {
  const { user } = useAuth();
  const isDemo = user?.isDemo;

  const students = getStudents().filter(
    (s) => !s.isDemo
  ); // prevent demo student mutation

  const subjects = getSubjects();

  const [studentId, setStudentId] = useState("");
  const [marks, setMarks] = useState({});

  const handleChange = (subjectId, value) => {
    if (isDemo) return;
    setMarks({ ...marks, [subjectId]: value });
  };

  const handleSave = () => {
    if (isDemo) return;

    if (!studentId) {
      alert("Select a student");
      return;
    }

    const data = subjects.map((sub) => ({
      subjectId: sub.id,
      marks: Number(marks[sub.id] || 0),
    }));

    saveMarks(studentId, data);
    alert("Marks saved successfully");
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">
        Enter Marks
      </h2>

      {/* Demo Mode Banner */}
      {isDemo && (
        <div className="mb-6 bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg">
          Demo Mode: Marks entry is disabled.
        </div>
      )}

      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
        <select
          className="border rounded px-3 py-2 mb-4 w-full disabled:bg-slate-100"
          onChange={(e) => setStudentId(e.target.value)}
          disabled={isDemo}
        >
          <option value="">Select Student</option>
          {students.map((stu) => (
            <option key={stu.id} value={stu.id}>
              {stu.name}
            </option>
          ))}
        </select>

        {studentId && (
          <div className="space-y-3">
            {subjects.map((sub) => (
              <div
                key={sub.id}
                className="flex justify-between items-center"
              >
                <span>{sub.name}</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="border rounded px-3 py-1 w-24 text-center disabled:bg-slate-100"
                  onChange={(e) =>
                    handleChange(sub.id, e.target.value)
                  }
                  disabled={isDemo}
                />
              </div>
            ))}

            <button
              onClick={handleSave}
              disabled={isDemo}
              className={`mt-4 px-4 py-2 rounded transition text-white ${
                isDemo
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              Save Marks
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default AdminMarks;

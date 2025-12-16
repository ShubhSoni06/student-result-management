import { useState } from "react";
import Layout from "../components/Layout";
import { getStudents } from "../services/students";
import { getSubjects } from "../services/subjects";
import { saveMarks } from "../services/marks";
import {
  isResultPublished,
  publishResult,
} from "../services/resultStatus"; // ✅ NEW
import { useAuth } from "../context/AuthContext";

function AdminMarks() {
  const { user } = useAuth();
  const isDemo = user?.isDemo;

  const students = getStudents().filter(
    (s) => !s.isDemo
  ); // protect demo student

  const subjects = getSubjects();

  const [studentId, setStudentId] = useState("");
  const [semester, setSemester] = useState("");
  const [marks, setMarks] = useState({});

  const published =
    studentId && semester
      ? isResultPublished(Number(studentId), Number(semester))
      : false;

  const handleChange = (subjectId, value) => {
    if (isDemo || published) return;
    setMarks({ ...marks, [subjectId]: value });
  };

  const handleSave = () => {
    if (isDemo || published) return;

    if (!studentId || !semester) {
      alert("Select student and semester");
      return;
    }

    const data = subjects.map((sub) => ({
      subjectId: sub.id,
      marks: Number(marks[sub.id] || 0),
    }));

    saveMarks(Number(studentId), Number(semester), data);
    alert(`Marks saved for Semester ${semester}`);
  };

  const handlePublish = () => {
    if (!studentId || !semester) return;

    const confirmPublish = window.confirm(
      `Publish results for Semester ${semester}?\nThis action cannot be undone.`
    );

    if (!confirmPublish) return;

    publishResult(Number(studentId), Number(semester));
    alert(`Results published for Semester ${semester}`);
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

      {/* Published Banner */}
      {published && (
        <div className="mb-6 bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg">
          Results for this semester are published and locked.
        </div>
      )}

      <div className="bg-white p-6 rounded-xl shadow max-w-2xl space-y-4">

        {/* Student Selector */}
        <select
          className="border rounded px-3 py-2 w-full disabled:bg-slate-100"
          onChange={(e) => {
            setStudentId(e.target.value);
            setSemester("");
            setMarks({});
          }}
          disabled={isDemo}
        >
          <option value="">Select Student</option>
          {students.map((stu) => (
            <option key={stu.id} value={stu.id}>
              {stu.name}
            </option>
          ))}
        </select>

        {/* Semester Selector */}
        <select
          className="border rounded px-3 py-2 w-full disabled:bg-slate-100"
          onChange={(e) => {
            setSemester(e.target.value);
            setMarks({});
          }}
          disabled={isDemo || !studentId}
        >
          <option value="">Select Semester</option>
          {[1, 2, 3, 4, 5, 6].map((sem) => (
            <option key={sem} value={sem}>
              Semester {sem}
            </option>
          ))}
        </select>

        {/* Marks Inputs */}
        {studentId && semester && (
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
                  disabled={isDemo || published}
                />
              </div>
            ))}

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSave}
                disabled={isDemo || published}
                className={`px-4 py-2 rounded transition text-white ${
                  isDemo || published
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Save Marks
              </button>

              {!published && (
                <button
                  onClick={handlePublish}
                  className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  Publish Result
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default AdminMarks;

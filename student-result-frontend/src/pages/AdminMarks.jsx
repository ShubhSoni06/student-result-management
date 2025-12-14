import { useState } from "react";
import Layout from "../components/Layout";
import { getStudents } from "../services/students";
import { getSubjects } from "../services/subjects";
import { saveMarks } from "../services/marks";

function AdminMarks() {
  const students = getStudents();
  const subjects = getSubjects();

  const [studentId, setStudentId] = useState("");
  const [marks, setMarks] = useState({});

  const handleChange = (subjectId, value) => {
    setMarks({ ...marks, [subjectId]: value });
  };

  const handleSave = () => {
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
      <h2 className="text-2xl font-bold mb-6">
        Enter Marks
      </h2>

      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
        <select
          className="border rounded px-3 py-2 mb-4 w-full"
          onChange={(e) => setStudentId(e.target.value)}
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
                  className="border rounded px-3 py-1 w-24 text-center"
                  onChange={(e) =>
                    handleChange(sub.id, e.target.value)
                  }
                />
              </div>
            ))}

            <button
              onClick={handleSave}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
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

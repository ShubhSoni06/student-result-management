import { useState } from "react";
import { getStudents } from "../services/students";
import { getSubjects } from "../services/subjects";
import { saveMarks } from "../services/marks";

function AdminMarks() {
  const students = getStudents();
  const subjects = getSubjects();

  const [selectedStudent, setSelectedStudent] = useState("");
  const [marks, setMarks] = useState({});

  const handleMarkChange = (subjectId, value) => {
    setMarks({ ...marks, [subjectId]: value });
  };

  const handleSave = () => {
    if (!selectedStudent) {
      alert("Select a student");
      return;
    }

    const formattedMarks = subjects.map((sub) => ({
      subjectId: sub.id,
      marks: Number(marks[sub.id] || 0)
    }));

    saveMarks(selectedStudent, formattedMarks);
    alert("Marks saved successfully");
  };

  return (
    <div>
      <h2>Enter Marks</h2>

      <select onChange={(e) => setSelectedStudent(e.target.value)}>
        <option value="">Select Student</option>
        {students.map((stu) => (
          <option key={stu.id} value={stu.id}>
            {stu.name}
          </option>
        ))}
      </select>

      {selectedStudent && (
        <div>
          <h3>Subjects</h3>

          {subjects.map((sub) => (
            <div key={sub.id}>
              <label>
                {sub.name}:{" "}
                <input
                  type="number"
                  min="0"
                  max="100"
                  onChange={(e) =>
                    handleMarkChange(sub.id, e.target.value)
                  }
                />
              </label>
            </div>
          ))}

          <button onClick={handleSave}>Save Marks</button>
        </div>
      )}
    </div>
  );
}

export default AdminMarks;

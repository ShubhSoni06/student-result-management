import { useState } from "react";
import { getSubjects, addSubject } from "../services/subjects";

function AdminSubjects() {
  const [subjects, setSubjects] = useState(getSubjects());
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");

  const handleAdd = () => {
    if (!name || !credits) {
      alert("Fill all fields");
      return;
    }

    addSubject({ name, credits: Number(credits) });
    setSubjects(getSubjects());
    setName("");
    setCredits("");
  };

  return (
    <div>
      <h2>Manage Subjects</h2>

      <input
        placeholder="Subject name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Credits"
        type="number"
        value={credits}
        onChange={(e) => setCredits(e.target.value)}
      />

      <button onClick={handleAdd}>Add Subject</button>

      <ul>
        {subjects.map((sub) => (
          <li key={sub.id}>
            {sub.name} — {sub.credits} credits
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSubjects;

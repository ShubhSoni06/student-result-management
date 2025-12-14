import { useState } from "react";
import Layout from "../components/Layout";
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
    <Layout>
      <h2 className="text-2xl font-bold mb-6">
        Manage Subjects
      </h2>

      <div className="bg-white p-6 rounded-xl shadow mb-6 max-w-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            className="border rounded px-3 py-2"
            placeholder="Subject name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border rounded px-3 py-2"
            type="number"
            placeholder="Credits"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden max-w-xl">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Subject</th>
              <th className="border px-4 py-2 text-center">Credits</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((sub) => (
              <tr key={sub.id}>
                <td className="border px-4 py-2">{sub.name}</td>
                <td className="border px-4 py-2 text-center">
                  {sub.credits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default AdminSubjects;

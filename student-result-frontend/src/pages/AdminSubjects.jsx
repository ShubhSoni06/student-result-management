import { useState } from "react";
import Layout from "../components/Layout";
import { getSubjects, addSubject } from "../services/subjects";
import { useAuth } from "../context/AuthContext";

function AdminSubjects() {
  const { user } = useAuth();
  const isDemo = user?.isDemo;

  const [subjects, setSubjects] = useState(getSubjects());
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");

  const handleAdd = () => {
    if (isDemo) return;

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
      <h2 className="text-2xl font-bold mb-4">
        Manage Subjects
      </h2>

      {/* Demo Mode Banner */}
      {isDemo && (
        <div className="mb-6 bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg">
          Demo Mode: Subject management is read-only.
        </div>
      )}

      {/* Add Subject Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 max-w-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            className="border rounded px-3 py-2 disabled:bg-slate-100"
            placeholder="Subject name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isDemo}
          />

          <input
            className="border rounded px-3 py-2 disabled:bg-slate-100"
            type="number"
            placeholder="Credits"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            disabled={isDemo}
          />

          <button
            onClick={handleAdd}
            disabled={isDemo}
            className={`rounded px-4 py-2 transition text-white ${
              isDemo
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
      </div>

      {/* Subject List */}
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
              <tr key={sub.id} className="hover:bg-gray-50">
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

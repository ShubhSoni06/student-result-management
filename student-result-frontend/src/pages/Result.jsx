import { useState } from "react";
import Layout from "../components/Layout";
import { getMarksByStudentAndSemester } from "../services/marks";
import { getSubjects } from "../services/subjects";
import { getStudents } from "../services/students";
import { useAuth } from "../context/AuthContext";
import { getCGPAByStudent } from "../services/semesterResults"; // ✅ NEW
import jsPDF from "jspdf";
import "jspdf-autotable";

function Result() {
  const { user } = useAuth();
  const subjects = getSubjects();
  const students = getStudents();

  const student = students.find(
    (s) => s.id === user.studentId
  );

  const [semester, setSemester] = useState(
    student?.semester || 1
  );

  const marksList = getMarksByStudentAndSemester(
    user.studentId,
    semester
  );

  const getGradePoint = (marks) => {
    if (marks >= 90) return 10;
    if (marks >= 80) return 9;
    if (marks >= 70) return 8;
    if (marks >= 60) return 7;
    if (marks >= 50) return 6;
    return 0;
  };

  const finalData = subjects.map((sub) => {
    const markObj = marksList.find(
      (m) => m.subjectId === sub.id
    );

    const marks = markObj ? markObj.marks : 0;

    return {
      ...sub,
      marks,
      gradePoint: getGradePoint(marks),
    };
  });

  let totalCredits = 0;
  let weightedPoints = 0;

  finalData.forEach((item) => {
    totalCredits += item.credits;
    weightedPoints += item.gradePoint * item.credits;
  });

  const spi =
    totalCredits > 0
      ? (weightedPoints / totalCredits).toFixed(2)
      : "0.00";

  // ✅ CGPA calculation
  const cgpa = getCGPAByStudent(
    student.id,
    student.semester
  );

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Student Result Marksheet", 105, 15, { align: "center" });

    doc.setFontSize(11);
    doc.text(`Name: ${student.name}`, 14, 30);
    doc.text(`Enrollment: ${student.enrollment}`, 14, 38);
    doc.text(`Semester: ${semester}`, 14, 46);

    const tableData = finalData.map((item) => [
      item.name,
      item.marks,
      item.credits,
      item.gradePoint,
    ]);

    doc.autoTable({
      startY: 55,
      head: [["Subject", "Marks", "Credits", "Grade Point"]],
      body: tableData,
      styles: { halign: "center" },
      headStyles: { fillColor: [79, 70, 229] },
    });

    doc.text(`SPI: ${spi}`, 14, doc.lastAutoTable.finalY + 10);
    doc.text(`CGPA: ${cgpa}`, 14, doc.lastAutoTable.finalY + 18); // ✅ NEW
    doc.save(`result-semester-${semester}.pdf`);
  };

  const downloadCSV = () => {
    const headers = ["Subject", "Marks", "Credits", "Grade Point"];
    const rows = finalData.map((item) => [
      item.name,
      item.marks,
      item.credits,
      item.gradePoint,
    ]);

    const csvContent =
      headers.join(",") +
      "\n" +
      rows.map((r) => r.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `result-semester-${semester}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!student) {
    return (
      <Layout>
        <p className="text-center text-red-500">
          Student record not found.
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Semester Result
        </h2>

        {/* Student Info + Semester Selector */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-sm text-slate-700 items-end">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Enrollment:</strong> {student.enrollment}</p>
          <p><strong>Current Sem:</strong> {student.semester}</p>

          <select
            className="border rounded px-3 py-2"
            value={semester}
            onChange={(e) => setSemester(Number(e.target.value))}
          >
            {Array.from(
              { length: student.semester },
              (_, i) => i + 1
            ).map((sem) => (
              <option key={sem} value={sem}>
                Semester {sem}
              </option>
            ))}
          </select>
        </div>

        {/* Result Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-slate-300">
            <thead className="bg-slate-100">
              <tr>
                <th className="border px-4 py-2 text-left">Subject</th>
                <th className="border px-4 py-2 text-center">Marks</th>
                <th className="border px-4 py-2 text-center">Credits</th>
                <th className="border px-4 py-2 text-center">Grade Point</th>
              </tr>
            </thead>
            <tbody>
              {finalData.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2 text-center">{item.marks}</td>
                  <td className="border px-4 py-2 text-center">{item.credits}</td>
                  <td className="border px-4 py-2 text-center">{item.gradePoint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Actions + SPI + CGPA */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <button
              onClick={downloadPDF}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Download PDF
            </button>

            <button
              onClick={downloadCSV}
              className="bg-emerald-600 text-white px-4 py-2 rounded"
            >
              Download CSV
            </button>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 px-6 py-3 rounded-lg text-right">
            <p>
              <strong>SPI:</strong>{" "}
              <span className="text-indigo-700">{spi}</span>
            </p>
            <p className="mt-1">
              <strong>CGPA:</strong>{" "}
              <span className="text-indigo-700">{cgpa}</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Result;

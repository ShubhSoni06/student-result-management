import Layout from "../components/Layout";
import { getMyResults } from "../services/results";
import { getMarksByStudent } from "../services/marks";
import { getSubjects } from "../services/subjects";

function Result() {
  const student = getMyResults(); // mock logged-in student
  const subjects = getSubjects();
  const marksList = getMarksByStudent(1); // studentId = 1 (mock)

  const getGradePoint = (marks) => {
    if (marks >= 90) return 10;
    if (marks >= 80) return 9;
    if (marks >= 70) return 8;
    if (marks >= 60) return 7;
    if (marks >= 50) return 6;
    return 0;
  };

  // Merge subjects with marks
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

  return (
    <Layout>
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
        {/* Header */}
        <div className="mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-center">
            Semester Result
          </h2>
        </div>

        {/* Student Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Enrollment:</strong> {student.enrollment}</p>
          <p><strong>Semester:</strong> {student.semester}</p>
        </div>

        {/* Result Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Subject</th>
                <th className="border px-4 py-2 text-center">Marks</th>
                <th className="border px-4 py-2 text-center">Credits</th>
                <th className="border px-4 py-2 text-center">
                  Grade Point
                </th>
              </tr>
            </thead>
            <tbody>
              {finalData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {item.marks}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {item.credits}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {item.gradePoint}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SPI Box */}
        <div className="mt-6 flex justify-end">
          <div className="bg-blue-50 border border-blue-200 px-6 py-4 rounded-lg">
            <p className="text-lg font-semibold">
              SPI:{" "}
              <span className="text-blue-700">
                {spi}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Result;

import { getMyResults } from "../services/results";

function Result() {
  const data = getMyResults();

  const getGradePoint = (marks) => {
    if (marks >= 90) return 10;
    if (marks >= 80) return 9;
    if (marks >= 70) return 8;
    if (marks >= 60) return 7;
    if (marks >= 50) return 6;
    return 0;
  };

  let totalCredits = 0;
  let weightedPoints = 0;

  data.subjects.forEach((sub) => {
    const gp = getGradePoint(sub.marks);
    totalCredits += sub.credits;
    weightedPoints += gp * sub.credits;
  });

  const spi = (weightedPoints / totalCredits).toFixed(2);

  return (
    <div>
      <h2>Student Result</h2>

      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Enrollment:</strong> {data.enrollment}</p>
      <p><strong>Semester:</strong> {data.semester}</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Credits</th>
            <th>Grade Point</th>
          </tr>
        </thead>
        <tbody>
          {data.subjects.map((sub, index) => (
            <tr key={index}>
              <td>{sub.name}</td>
              <td>{sub.marks}</td>
              <td>{sub.credits}</td>
              <td>{getGradePoint(sub.marks)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>SPI: {spi}</h3>
    </div>
  );
}

export default Result;

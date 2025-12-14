import { getMyResults } from "../services/results";
import { getMarksByStudent } from "../services/marks";
import { getSubjects } from "../services/subjects";

function Result() {
    const student = getMyResults(); // student info
    const subjects = getSubjects();
    const marksList = getMarksByStudent(1); // studentId = 1 (mock login)

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
            gradePoint: getGradePoint(marks)
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
        <div>
            <h2>Student Result</h2>

            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Enrollment:</strong> {student.enrollment}</p>
            <p><strong>Semester:</strong> {student.semester}</p>

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
                    {finalData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.marks}</td>
                            <td>{item.credits}</td>
                            <td>{item.gradePoint}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>SPI: {spi}</h3>
        </div>
    );
}

export default Result;

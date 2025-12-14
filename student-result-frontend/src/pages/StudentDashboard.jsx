import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div>
      <h2>Student Dashboard</h2>

      <ul>
        <li>
          <Link to="/student/result">View Result</Link>
        </li>
      </ul>
    </div>
  );
}

export default StudentDashboard;

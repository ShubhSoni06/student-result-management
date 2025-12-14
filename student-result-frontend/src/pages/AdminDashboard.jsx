import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>

      <ul>
        <li><Link to="/admin/subjects">Manage Subjects</Link></li>
        <li><Link to="/admin/marks">Enter Marks</Link></li>
      </ul>
    </div>
  );
}

export default AdminDashboard;

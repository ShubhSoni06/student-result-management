import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Result from "./pages/Result";
import { useAuth } from "./context/AuthContext";
import AdminSubjects from "./pages/AdminSubjects";
import AdminMarks from "./pages/AdminMarks";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/student"
        element={
          user?.role === "STUDENT" ? <StudentDashboard /> : <Navigate to="/" />
        }
      />

      <Route
        path="/student/result"
        element={
          user?.role === "STUDENT" ? <Result /> : <Navigate to="/" />
        }
      />

      <Route
        path="/admin"
        element={
          user?.role === "ADMIN" ? <AdminDashboard /> : <Navigate to="/" />
        }
      />

      <Route
        path="/admin/subjects"
        element={
          user?.role === "ADMIN" ? <AdminSubjects /> : <Navigate to="/" />
        }
      />

      <Route
        path="/admin/marks"
        element={
          user?.role === "ADMIN" ? <AdminMarks /> : <Navigate to="/" />
        }
      />

    </Routes>
  );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import StudentDashboard from "./pages/StudentDashboard";
import Result from "./pages/Result";

import AdminDashboard from "./pages/AdminDashboard";
import AdminSubjects from "./pages/AdminSubjects";
import AdminMarks from "./pages/AdminMarks";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* ===== Public Routes ===== */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      {/* ===== Student Routes ===== */}
      <Route
        path="/student"
        element={
          user?.role === "STUDENT" ? (
            <StudentDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/student/result"
        element={
          user?.role === "STUDENT" ? (
            <Result />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* ===== Admin Routes ===== */}
      <Route
        path="/admin"
        element={
          user?.role === "ADMIN" ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/admin/subjects"
        element={
          user?.role === "ADMIN" ? (
            <AdminSubjects />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/admin/marks"
        element={
          user?.role === "ADMIN" ? (
            <AdminMarks />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* ===== Fallback ===== */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

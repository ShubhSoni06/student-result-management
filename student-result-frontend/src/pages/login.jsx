import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getStudentByEmail } from "../services/students";
import PublicLayout from "../components/PublicLayout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    /* =========================
       DEMO ADMIN LOGIN
       ========================= */
    if (
      email === "demo-admin@mail.com" &&
      password === "demo123"
    ) {
      login({
        role: "ADMIN",
        email,
        isDemo: true,
        token: "demo-token",
      });
      navigate("/admin");
      return;
    }

    /* =========================
       REAL ADMIN (DEV)
       ========================= */
    if (email === "admin@mail.com") {
      login({
        role: "ADMIN",
        email,
        isDemo: false,
        token: "fake-token",
      });
      navigate("/admin");
      return;
    }

    /* =========================
       DEMO / REAL STUDENT LOGIN
       ========================= */
    const student = getStudentByEmail(email);

    if (!student) {
      alert("No student found with this email");
      return;
    }

    // Demo student password check
    if (student.isDemo && password !== "demo123") {
      alert("Invalid demo password");
      return;
    }

    login({
      role: "STUDENT",
      studentId: student.id,
      email: student.email,
      isDemo: student.isDemo,
      token: student.isDemo ? "demo-token" : "fake-token",
    });

    navigate("/student");
  };

  return (
    <PublicLayout>
      <div className="flex items-center justify-center py-16">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Login
          </h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </div>

          <div className="text-sm text-gray-500 text-center mt-4 space-y-1">
            <p>
              <b>Demo Admin:</b> demo-admin@mail.com / demo123
            </p>
            <p>
              <b>Demo Student:</b> demo-student@mail.com / demo123
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default Login;

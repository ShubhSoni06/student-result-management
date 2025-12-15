import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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

    const user =
      email === "admin@mail.com"
        ? { role: "ADMIN", token: "fake-token" }
        : { role: "STUDENT", token: "fake-token" };

    login(user);
    navigate(user.role === "ADMIN" ? "/admin" : "/student");
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
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            Use <b>admin@mail.com</b> or <b>student@mail.com</b>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}

export default Login;

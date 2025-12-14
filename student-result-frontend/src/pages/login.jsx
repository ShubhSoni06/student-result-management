import { login } from "../services/auth";

function Login() {
  const handleLogin = () => {
    const res = login("student@mail.com", "123");
    alert(`Logged in as ${res.role}`);
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

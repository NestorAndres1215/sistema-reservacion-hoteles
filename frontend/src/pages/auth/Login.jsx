import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
 import { useAuth } from "../../context/useAuth";

const roleRedirect = {
  Admin: "/admin",
  Recepcionista: "/recepcion",
};

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userData = await login(form);
      navigate(roleRedirect[userData.rol] || "/");
    } catch (err) {
      setError(err.response?.data?.message || "Credenciales inválidas");
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />
        <button type="submit">Entrar</button>
        <p>
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </div>
  );
}
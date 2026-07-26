import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

export default function Register() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Error al registrarse");
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />
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
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
}
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./Login.css";

const roleRedirect = {
  Admin: "/admin",
  Recepcionista: "/recepcion",
};

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userData = await login(form);
      navigate(roleRedirect[userData.rol] || "/");
    } catch (err) {
      setError(err.response?.data?.message || "Credenciales inválidas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        {/* Panel izquierdo — identidad */}
        <div className="login-brand">
          <div className="login-brand-mark">
            <i className="fas fa-calendar-check"></i>
          </div>
          <h1 className="login-brand-title">Panel de Reservas</h1>
          <p className="login-brand-subtitle">
            Acceso administrativo para la gestión de reservaciones,
            habitaciones y recepción.
          </p>
          <ul className="login-brand-list">
            <li>
              <i className="fas fa-check"></i> Control de disponibilidad
            </li>
            <li>
              <i className="fas fa-check"></i> Gestión de recepción
            </li>
            <li>
              <i className="fas fa-check"></i> Reportes en tiempo real
            </li>
          </ul>
        </div>

        {/* Panel derecho — formulario */}
        <div className="login-form-panel">
          <form onSubmit={handleSubmit} className="login-form" noValidate>
            <div className="login-form-header">
              <span className="login-eyebrow">Bienvenido</span>
              <h2>Iniciar sesión</h2>
              <p className="login-hint">
                Ingresa tus credenciales de administrador o recepción.
              </p>
            </div>

            {error && (
              <p className="login-error" role="alert">
                <i className="fas fa-triangle-exclamation"></i> {error}
              </p>
            )}

            <label className="login-field" htmlFor="email">
              <span className="login-label">Correo electrónico</span>
              <span className="login-input-wrap">
                <i className="fas fa-envelope login-input-icon"></i>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tucorreo@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </span>
            </label>

            <label className="login-field" htmlFor="password">
              <span className="login-label">Contraseña</span>
              <span className="login-input-wrap">
                <i className="fas fa-lock login-input-icon"></i>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="login-toggle-visibility"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </span>
            </label>

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-circle-notch fa-spin"></i> Ingresando...
                </>
              ) : (
                <>
                  <i className="fas fa-right-to-bracket"></i> Entrar
                </>
              )}
            </button>

            <p className="login-register">
              ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
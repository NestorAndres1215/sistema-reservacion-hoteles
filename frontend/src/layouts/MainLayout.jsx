import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const menuByRole = {
  Administrador: [
    { label: "Dashboard", path: "/admin" },
    { label: "Habitaciones", path: "/admin/habitaciones" },
    { label: "Reservas", path: "/admin/reservas" },
    { label: "Clientes", path: "/admin/clientes" },
    { label: "Servicios", path: "/admin/servicios" },
    { label: "Pagos", path: "/admin/pagos" },
    { label: "Reportes", path: "/admin/reportes" },
    { label: "Usuarios", path: "/admin/usuarios" },
  ],
  Recepcionista: [
    { label: "Dashboard", path: "/recepcion" },
    { label: "Check-in / Check-out", path: "/recepcion/check" },
    { label: "Nueva reserva", path: "/recepcion/reservas" },
    { label: "Clientes", path: "/recepcion/clientes" },
  ],
};

export default function MainLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const menu = menuByRole[user?.rol] || [];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "220px",
          background: "#1e293b",
          color: "#fff",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>🏨 Hotel Manager</h3>
        <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
          {user?.username} · {user?.rol}
        </p>

        <nav style={{ marginTop: "1.5rem", flex: 1 }}>
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                padding: "0.5rem 0",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
          Cerrar sesión
        </button>
      </aside>

      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
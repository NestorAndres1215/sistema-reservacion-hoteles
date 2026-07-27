import { useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "./MainLayout.css";

const menuByRole = {
  Administrador: [
    { label: "Dashboard", path: "/admin", icon: "fa-gauge-high" },
    { label: "Habitaciones", path: "/admin/habitaciones", icon: "fa-bed" },
    { label: "Reservas", path: "/admin/reservas", icon: "fa-calendar-check" },
    { label: "Clientes", path: "/admin/clientes", icon: "fa-users" },
    { label: "Servicios", path: "/admin/servicios", icon: "fa-concierge-bell" },
    { label: "Pagos", path: "/admin/pagos", icon: "fa-credit-card" },
    { label: "Reportes", path: "/admin/reportes", icon: "fa-chart-pie" },
    { label: "Usuarios", path: "/admin/usuarios", icon: "fa-user-gear" },
  ],

  Recepcionista: [
    { label: "Dashboard", path: "/recepcion", icon: "fa-gauge-high" },
    { label: "Habitaciones", path: "/recepcion/habitaciones", icon: "fa-bed" },
    { label: "Reservas", path: "/recepcion/reservas", icon: "fa-calendar-check" },
    { label: "Check-in / Check-out", path: "/recepcion/check", icon: "fa-right-left" },
    { label: "Clientes", path: "/recepcion/clientes", icon: "fa-users" },
    { label: "Servicios", path: "/recepcion/servicios", icon: "fa-concierge-bell" },
    { label: "Pagos", path: "/recepcion/pagos", icon: "fa-credit-card" },
  ],
};

export default function MainLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const menu = menuByRole[user?.rol] || [];

  const currentPage =
    menu.find((item) => item.path === location.pathname) ||
    [...menu].reverse().find((item) => location.pathname.startsWith(item.path));

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="layout-screen">
      <aside className="layout-sidebar">
        <div className="layout-brand">
          <span className="layout-brand-mark">
            <i className="fas fa-hotel"></i>
          </span>
          <span className="layout-brand-name">Hotel Manager</span>
        </div>



        <nav className="layout-nav">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin" || item.path === "/recepcion"}
              className={({ isActive }) =>
                "layout-nav-link" + (isActive ? " active" : "")
              }
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <button className="layout-logout" onClick={handleLogout}>
          <i className="fas fa-right-from-bracket"></i>
          <span>Cerrar sesión</span>
        </button>
      </aside>

      <main className="layout-main">
        <header className="layout-toolbar">
          <div className="layout-toolbar-title">
            <i className={`fas ${currentPage?.icon || "fa-gauge-high"}`}></i>
            <h1>{currentPage?.label || "Panel"}</h1>
          </div>

          <div className="layout-toolbar-actions">
            <label className="layout-toolbar-search">
              <i className="fas fa-magnifying-glass"></i>
              <input
                type="search"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>

            <button className="layout-toolbar-icon-btn" aria-label="Notificaciones">
              <i className="fas fa-bell"></i>
              <span className="layout-toolbar-badge"></span>
            </button>

            <div className="layout-toolbar-divider"></div>

            <div className="layout-toolbar-user">
              <span className="layout-toolbar-avatar">
                <i className="fas fa-user"></i>
              </span>
              <div className="layout-toolbar-user-info">
                <span className="layout-toolbar-user-name">{user?.username}</span>
                <span className="layout-toolbar-user-role">{user?.rol}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="layout-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
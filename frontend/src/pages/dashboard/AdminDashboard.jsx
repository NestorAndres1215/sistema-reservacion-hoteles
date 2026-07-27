import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./Dashboard.css";

const accesosRapidos = [
  {
    label: "Habitaciones",
    path: "/admin/habitaciones",
    icon: "fa-bed",
    desc: "Gestiona el estado y disponibilidad de las habitaciones",
  },
  {
    label: "Reservas",
    path: "/admin/reservas",
    icon: "fa-calendar-check",
    desc: "Revisa y administra las reservaciones activas",
  },
  {
    label: "Clientes",
    path: "/admin/clientes",
    icon: "fa-users",
    desc: "Consulta el historial y datos de huéspedes",
  },
  {
    label: "Servicios",
    path: "/admin/servicios",
    icon: "fa-concierge-bell",
    desc: "Administra los servicios adicionales del hotel",
  },
  {
    label: "Pagos",
    path: "/admin/pagos",
    icon: "fa-credit-card",
    desc: "Controla cobros, facturas y transacciones",
  },
  {
    label: "Reportes",
    path: "/admin/reportes",
    icon: "fa-chart-pie",
    desc: "Visualiza ocupación, ingresos y estadísticas",
  },
  {
    label: "Usuarios",
    path: "/admin/usuarios",
    icon: "fa-user-gear",
    desc: "Administra las cuentas del sistema",
  },
];

export default function AdminDashboard() {
  const { user } = useAuth();
  const today = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-heading">
          <span className="dashboard-heading-icon">
            <i className="fas fa-gauge-high"></i>
          </span>
          <div>
            <h1>Panel de Administración</h1>
            <p>Bienvenido, {user?.username}</p>
          </div>
        </div>

        <div className="dashboard-date">
          <i className="fas fa-calendar-day"></i>
          <span>{today}</span>
        </div>
      </div>

      <p className="dashboard-section-label">Accesos rápidos</p>
      <div className="dashboard-grid">
        {accesosRapidos.map((item) => (
          <Link key={item.path} to={item.path} className="dashboard-card">
            <span className="dashboard-card-icon">
              <i className={`fas ${item.icon}`}></i>
            </span>
            <h3>{item.label}</h3>
            <p>{item.desc}</p>
            <span className="dashboard-card-arrow">
              Ir <i className="fas fa-arrow-right"></i>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
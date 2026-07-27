import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./Dashboard.css";

const accesosRapidos = [
  {
    label: "Check-in / Check-out",
    path: "/recepcion/check",
    icon: "fa-right-left",
    desc: "Registra el ingreso o salida de un huésped",
  },
  {
    label: "Reservas",
    path: "/recepcion/reservas",
    icon: "fa-calendar-check",
    desc: "Consulta y gestiona las reservaciones del día",
  },
  {
    label: "Habitaciones",
    path: "/recepcion/habitaciones",
    icon: "fa-bed",
    desc: "Revisa la disponibilidad y el estado de las habitaciones",
  },
  {
    label: "Clientes",
    path: "/recepcion/clientes",
    icon: "fa-users",
    desc: "Consulta la información general de huéspedes",
  },
  {
    label: "Servicios",
    path: "/recepcion/servicios",
    icon: "fa-concierge-bell",
    desc: "Agrega servicios adicionales a una estadía",
  },
  {
    label: "Pagos",
    path: "/recepcion/pagos",
    icon: "fa-credit-card",
    desc: "Registra cobros y consulta facturas",
  },
];

export default function RecepcionistaDashboard() {
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
            <h1>Panel de Recepción</h1>
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
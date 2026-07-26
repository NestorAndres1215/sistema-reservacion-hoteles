import { useAuth } from "../../context/useAuth";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido, {user?.username} 👋</p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
        <div style={cardStyle}>
          <h3>Equipos</h3>
          <p>Gestiona los equipos registrados</p>
        </div>
        <div style={cardStyle}>
          <h3>Jugadores</h3>
          <p>Gestiona los jugadores</p>
        </div>
        <div style={cardStyle}>
          <h3>Usuarios</h3>
          <p>Administra cuentas del sistema</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #e2e8f0",
  borderRadius: 8,
  padding: "1rem",
  width: 200,
};
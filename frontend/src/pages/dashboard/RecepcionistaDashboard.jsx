import { useAuth } from "../../context/useAuth";

export default function RecepcionistaDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Panel de Recepción</h1>
      <p>Bienvenido, {user?.username} 👋</p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
        <div style={cardStyle}>
          <h3>Registrar visita</h3>
          <p>Registra el ingreso de una persona</p>
        </div>
        <div style={cardStyle}>
          <h3>Consultas</h3>
          <p>Consulta información general</p>
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
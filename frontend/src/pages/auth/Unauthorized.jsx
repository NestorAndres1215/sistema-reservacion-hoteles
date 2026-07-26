import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h2>🚫 No tienes permiso para ver esta página</h2>
      <Link to="/login">Volver al login</Link>
    </div>
  );
}
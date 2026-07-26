import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { roleRedirect } from "../utils/roleRedirect";

export default function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  if (user) {
    return <Navigate to={roleRedirect[user.rol] || "/login"} replace />;
  }

  return children;
}
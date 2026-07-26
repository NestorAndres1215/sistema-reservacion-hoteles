import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading, hasRole } = useAuth();

  if (loading) return <p>Cargando...</p>;

  if (!user) return <Navigate to="/login" replace />;

  if (allowedRoles && !hasRole(allowedRoles)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
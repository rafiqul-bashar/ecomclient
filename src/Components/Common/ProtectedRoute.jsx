import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({ user, children }) {
  const location = useLocation();
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

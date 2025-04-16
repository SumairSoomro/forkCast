import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

function isTokenValid(token: string | null): boolean {
  if (!token) return false;

  try {
    const { exp } = jwtDecode<{ exp: number }>(token);
    return Date.now() < exp * 1000;
  } catch {
    return false;
  }
}

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("access_token");
  return isTokenValid(token) ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

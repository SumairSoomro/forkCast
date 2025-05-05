import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const type = params.get("type");
    const token = params.get("access_token");

    if (type === "recovery" && token) {
      localStorage.setItem("access_token", token);
      navigate("/reset-password", { replace: true });
    } else if (type === "signup" || type === "magiclink") {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return null;
};

export default RedirectHandler;

import { useEffect } from "react";
import "./styles.css";

import { Outlet, useNavigate } from "react-router-dom";

export default function Layout({ connected, loggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
        navigate("/login")
    }
    if (!connected) {
      navigate("/");
    } 
  }, [connected]);

  return (
    <main>
      <Outlet />
    </main>
  );
}

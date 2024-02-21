import { useEffect } from "react";
import "./styles.css";

import { Outlet, useNavigate } from "react-router-dom";

export default function Layout({ connected }) {
  const navigate = useNavigate();

  useEffect(() => {
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

import { useEffect } from "react";
import "./styles.css";

import { Outlet, useNavigate } from "react-router-dom";

export default function Layout({ connected, loggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      if (connected) {
        navigate('/workout')
      } else {
        navigate('/')
      }
    } else {
      navigate('/login')
    }
  }, [connected, loggedIn]);
  console.log("connected, loggedIn:", connected, loggedIn)
  return (
    <main>
      <Outlet />
    </main>
  );
}

import { useEffect } from "react";
import "./styles.css";

import { Outlet, useNavigate } from "react-router-dom";
import LogOut from "../buttons/server/logout";

export default function Layout({ connected, setLoggedIn, loggedIn }) {
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
      <nav>
        <ul>
          <li>
            <LogOut setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}

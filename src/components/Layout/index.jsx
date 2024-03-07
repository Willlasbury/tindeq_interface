import "./styles.css";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import LogOut from "../buttons/server/logout";
import ChooseWorkout from "../workouts/ChooseWorkout";

export default function Layout({ connected, setConnected, setLoggedIn, loggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!connected) {
      navigate("/connect");
    }
    if (!loggedIn) {
      navigate("/login");
    }
  }, [connected, loggedIn]);

  return (
    <main>
      <nav>
        <ul>
          <li>
            <LogOut setLoggedIn={setLoggedIn} loggedIn={loggedIn} setConnected={setConnected} connected={connected} />
          </li>
        </ul>
      </nav>

      <Outlet />
    </main>
  );
}

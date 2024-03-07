import "./styles.css";
import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import LogOut from "../buttons/server/logout";
import ChooseWorkout from "../workouts/WorkoutContainer";

export default function Layout({
  connected,
  setConnected,
  setLoggedIn,
  loggedIn,
}) {
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
      <nav id="navbar">
        {connected && (
          <ul id="workout-ul">
            <NavLink
              to="/rpe"
              className='nav-tab'
            >
              RPE
            </NavLink>
            <NavLink
              to="/max_pull"
              className='nav-tab'
            >
              Max Pull
            </NavLink>
          </ul>
        )}
        <LogOut
          setLoggedIn={setLoggedIn}
          loggedIn={loggedIn}
          setConnected={setConnected}
          connected={connected}
        />
      </nav>
      <section id="bulk">
      <Outlet />
      </section>    
    </main>
  );
}

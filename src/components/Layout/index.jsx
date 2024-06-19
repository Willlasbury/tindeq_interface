import "./styles.css";
import { NavLink, Outlet } from "react-router-dom";
import LoginModal from "../../components/Login/modal";
import ConnectTindeq from "../Landing/modal";
import LogOut from "../buttons/server/logout";

export default function Layout({
  connected,
  setConnected,
  setLoggedIn,
  loggedIn,
  setSendChar,
  setWeight,
}) {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!connected) {
  //     navigate("/connect");
  //   }
  //   if (!loggedIn) {
  //     navigate("/login");
  //   }
  // }, [connected, loggedIn]);

  return (
    <>
      {!loggedIn && <LoginModal setLoggedIn={setLoggedIn} />}
      {loggedIn && !connected && (
        <ConnectTindeq
          setConnected={setConnected}
          setSendChar={setSendChar}
          setWeight={setWeight}
        />
      )}

      <header id="header">
        {connected && (
          <nav id="navbar">
            <NavLink to="rpe" className="nav-tab">
              RPE
            </NavLink>
            <NavLink to="max_pull" className="nav-tab">
              Max Pull
            </NavLink>
          </nav>
        )}
        <LogOut
          setLoggedIn={setLoggedIn}
          loggedIn={loggedIn}
          setConnected={setConnected}
          connected={connected}
        />
      </header>
      <main id="bulk">
        <Outlet />
      </main>
    </>
  );
}

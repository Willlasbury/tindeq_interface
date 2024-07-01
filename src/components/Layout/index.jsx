import "./styles.css";
import { NavLink, Outlet } from "react-router-dom";

import FingerFormModal from "../workouts/FingerForm/modal";
import LoginModal from "../Login/modal";
import ConnectTindeqModal from "../connectTindeq/modal";

import LogOut from "../buttons/server/logout";

export default function Layout({
  connected,
  setConnected,
  setLoggedIn,
  loggedIn,
  setSendChar,
  setWeight,
  styleData,
  setStyleData,
  showFingerForm,
  setShowFingerForm
}) {
  return (
    <>
      {!loggedIn && <LoginModal setLoggedIn={setLoggedIn} />}
      {loggedIn && !connected && (
        <ConnectTindeqModal
          setConnected={setConnected}
          setSendChar={setSendChar}
          setWeight={setWeight}
        />
      )}
      {showFingerForm && (
        <FingerFormModal
          styleData={styleData}
          setStyleData={setStyleData}
          setShowFingerForm={setShowFingerForm}
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

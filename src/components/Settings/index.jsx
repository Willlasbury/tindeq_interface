import "./styles.css";
import { useState } from "react";

export default function Settings({ children, setDisplaySettings, RPE, setRPE }) {

  const [toDisplay, setToDisplay] = useState("Grip");

  const handleClick = (e) => {
    setToDisplay(e.target.innerText);
  };
  return (
    <div className="settings-background">
      <div className="settings-wrapper">
        <button
          className="close-btn"
          onClick={() => {
            setDisplaySettings(false);
          }}
        >
          X
        </button>
        <nav>
          <ul>
            <li onClick={handleClick}>Grip</li>
            <li onClick={handleClick}>Time</li>
          </ul>
        </nav>

        {toDisplay === "Grip" && children.filter((el) => el.key === "FF")}
        {toDisplay === "Time" && children.filter((el) => el.key === "TS")}
      </div>
    </div>
  );
}

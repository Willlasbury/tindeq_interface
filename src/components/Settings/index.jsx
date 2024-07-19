import "./styles.css";
import { useState } from "react";

export default function Settings({ children, workout, setDisplaySettings }) {

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
            {workout === "RPE" && (
              <>
                <li onClick={handleClick}>RPE</li>
                <li onClick={handleClick}>Rest</li>
              </>
            )}
          </ul>
        </nav>
        {toDisplay === "Grip" && children.filter((el) => el.key === "FF")}
        {toDisplay === "RPE" && children.filter((el) => el.key === "RPE")}
      </div>
    </div>
  );
}

import "./styles.css";

import { useState } from "react";
import FingerCheckBox from "./FingerCheckBox";

export default function FingerForm({styleData, setStyleData}) {
  const handleChange = (event) => {
    setStyleData((prev) => {
      const { name, value, checked } = event.target;
      if (["index", "middle", "ring", "pinky"].includes(name)) {
        return { ...prev, [name]: checked };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  // only for loggin form data in console.
  const func = () => {
    console.log("\n");
    Object.entries(styleData).map(([key, val]) => console.log(key, ": ", val));
  };

  // defime values for options
  const edgeSizes = [20, 15, 12, 10, 8, 7, 6, 4];
  const gripType = ["open", "half", "full"];
  return (
    // <section id="finger-sec">
    <form id="finger-form">
      <section id="ff-drop-downs">
        <label className="finger-form-lbl" name="hand">
          Hand: 
          <select className="finger-form-sel" name="hand" onChange={handleChange}>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>

        <label className="finger-form-lbl" htmlFor="edge">
          Edge size: 
          <select className="finger-form-sel" name="edge" onChange={handleChange}>
            {edgeSizes.map((val) => {
              return (
                <option key={val} value={val}>
                  {val}
                </option>
              );
            })}
          </select>
        </label>

        <label className="finger-form-lbl" htmlFor="grip">
          Grip: 
          <select className="finger-form-sel" name="grip" onChange={handleChange}>
            {gripType.map((val) => {
              return (
                <option key={val} value={val}>
                  {val[0].toUpperCase() + val.substring(1)}
                </option>
              );
            })}
          </select>
        </label>
      </section>

      <ul id="finger-options">
        <h3 id="finger-options-header">Fingers: </h3>
        <FingerCheckBox finger="index" handleChange={handleChange} />
        <FingerCheckBox finger="middle" handleChange={handleChange} />
        <FingerCheckBox finger="ring" handleChange={handleChange} />
        <FingerCheckBox finger="pinky" handleChange={handleChange} />
      </ul>
    </form>
    //  <button onClick={func}>check form data</button>
    //  </section>
  );
}

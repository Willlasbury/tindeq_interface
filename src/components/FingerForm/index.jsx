import "./styles.css";

import { useState } from "react";
import FingerCheckBox from "./FingerCheckBox";

export default function FingerForm() {
  const [formData, setFormData] = useState({
    hand: "left",
    edge: 20,
    grip: "open",
    index: true,
    middle: true,
    ring: true,
    pinky: true,
  });
  const handleChange = (event) => {
    setFormData((prev) => {
      const { name, value, checked } = event.target;
      if (["index", "middle", "ring", "pinky"].includes(name)) {
        return { ...prev, [name]: checked };
      } else {
        // console.log('===\n\n\ntest\n\n\n===')
        // console.log("name, value:", name, value)
        return { ...prev, [name]: value };
      }
    });
  };

  const func = () => {
    console.log("\n");
    Object.entries(formData).map(([key, val]) => console.log(key, ": ", val));
  };
  const edgeSizes = [20, 15, 12, 10, 8, 7, 6, 4];
  const gripType = ["open", "half", "full"];
  return (
    <>
      <form id="finger-form">
        <label htmlFor="hand">Hand:</label>
        <select id="hand" name="hand" onChange={handleChange}>
          <option value="left">left</option>
          <option value="right">right</option>
        </select>

        <label htmlFor="edge">Edge size:</label>
        <select id="edge" name="edge" onChange={handleChange}>
          {edgeSizes.map((val) => {
            return (
              <option key={val} value={val}>
                {val}
              </option>
            );
          })}
        </select>

        <label htmlFor="grip">Grip: </label>
        <select id="grip" name="grip" onChange={handleChange}>
          {gripType.map((val) => {
            return (
              <option key={val} value={val}>
                {val}
              </option>
            );
          })}
        </select>

        <ul id="finger-options">
          <FingerCheckBox finger="index" handleChange={handleChange} />
          <FingerCheckBox finger="middle" handleChange={handleChange} />
          <FingerCheckBox finger="ring" handleChange={handleChange} />
          <FingerCheckBox finger="pinky" handleChange={handleChange} />
        </ul>
        <button type="submit">Submit</button>
      </form>
      <button onClick={func}>check form data</button>
    </>
  );
}

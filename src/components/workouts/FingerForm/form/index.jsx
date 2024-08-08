import "./styles.css";

import FingerCheckBox from "../FingerCheckBox";

export default function FingerForm({ styleData, setStyleData, styleOptions }) {
  const handleChange = (event) => {
    setStyleData((prev) => {
      const { name, value, checked } = event.target;
      if (styleOptions.fingers.includes(name)) {
        return { ...prev, [name]: checked };
      } else {
        return { ...prev, [name]: value };
      }
    });
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
          <select
            className="finger-form-sel"
            name="hand"
            onChange={handleChange}
            value={styleData.hand}
          >
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>

        <label className="finger-form-lbl" htmlFor="edge">
          Edge size:
          <select
            className="finger-form-sel"
            name="edge"
            onChange={handleChange}
            value={styleData.edge_size_mm}
          >
            {styleOptions.edges.map((val) => {
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
          <select
            className="finger-form-sel"
            name="grip"
            onChange={handleChange}
            value={styleData.grip}
          >
            {styleOptions.grips.map((val) => {
              return (
                <option key={val} value={val}>
                  {val[0].toUpperCase() + val.substring(1)}
                </option>
              );
            })}
          </select>
        </label>
      </section>
      <section>
        <h3 id="finger-options-header">Fingers: </h3>
        <ul id="finger-options">
          <FingerCheckBox
            finger="index"
            handleChange={handleChange}
            styleData={styleData}
          />
          <FingerCheckBox
            finger="middle"
            handleChange={handleChange}
            styleData={styleData}
          />
          <FingerCheckBox
            finger="ring"
            handleChange={handleChange}
            styleData={styleData}
          />
          <FingerCheckBox
            finger="pinky"
            handleChange={handleChange}
            styleData={styleData}
          />
        </ul>
      </section>
    </form>
    //  <button onClick={func}>check form data</button>
    //  </section>
  );
}

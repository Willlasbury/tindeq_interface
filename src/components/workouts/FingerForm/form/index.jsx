import "./styles.css";

import FingerCheckBox from "../FingerCheckBox";

export default function FingerForm({ styleData, setStyle, styleOptions }) {
  const handleChange = (event) => {
    const { name, checked, value } = event.target;
    if (checked != undefined) {
      return setStyle(name, checked);
    } else {
      return setStyle(value);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    setStyle("reset fingers");
  };

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
            {styleOptions.hands.map((val) => {
              return (
                <option key={val} value={val}>
                  {val[0].toUpperCase() + val.substring(1)}
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
        {/* You are working when edge is null stuff  */}
        <label className="finger-form-lbl" htmlFor="edge">
          Edge size:
          <select
            className="finger-form-sel"
            name="edge"
            onChange={handleChange}
            value={styleData.edge_size_mm}
            disabled={!styleData.edge}
          >
            {styleOptions.edges.map((val) => {
              // if statement removes null value as option
              if (val) {
                return (
                  <option key={val} value={val}>
                    {val}
                  </option>
                );
              }
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
          <li>
            <button onClick={handleClick}>Check All</button>
          </li>
        </ul>
      </section>
    </form>
    //  <button onClick={func}>check form data</button>
    //  </section>
  );
}

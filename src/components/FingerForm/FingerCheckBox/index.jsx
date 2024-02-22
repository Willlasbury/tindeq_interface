import "./styles.css";

export default function FingerCheckBox({finger, handleChange}) {
  return (
    <li className="finger-box">
      <label htmlFor={finger}>{finger[0].toUpperCase() + finger.substring(1)} Finger </label>
      <input
        id={finger}
        type="checkbox"
        name={finger}
        onChange={handleChange}
        defaultChecked={true}
      />
    </li>
  );
}

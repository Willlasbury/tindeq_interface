export default function FingerCheckBox({finger, handleChange}) {
  return (
    <li className="finger-box">
      <label className="finger-lbl" htmlFor={finger}> {finger[0].toUpperCase() + finger.substring(1)}
      <input
        className='finger-cb'
        type="checkbox"
        name={finger}
        onChange={handleChange}
        defaultChecked={true}
        />
        </label>
    </li>
  );
}

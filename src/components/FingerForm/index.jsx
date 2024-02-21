import { useState } from "react";

export default function FingerForm() {
  const [formData, setFormData] = useState({
    hand: "",
    edge: "",
    grip: "",
    index: true,
    middle: true,
    ring: true,
    pinky: true,
  });
  console.log("formData:", formData)
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData((prev)=> ({...prev, [name]:value}))
  }
  return (
    <form>
      <label htmlFor="hand">Hand:</label>
      <input
        type="text"
        id="hand"
        name="hand"
        value={formData.hand}
        onChange={handleChange}
      />

      <label htmlFor="edge">Edge size:</label>
      <input
        type="edge"
        id="edge"
        name="edge"
        value={formData.edge}
        onChange={handleChange}
      />
      <label htmlFor="fingers">Fingers</label>
      <input type="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
}

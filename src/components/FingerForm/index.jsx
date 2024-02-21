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
        hand="hand"
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

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

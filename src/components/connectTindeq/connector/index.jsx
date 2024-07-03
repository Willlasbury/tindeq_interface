import "./styles.css";
import CreateConnection from "../CreateConnectionBtn";

export default function Tindeq({ setConnected, setSendChar, setWeight }) {

  return (
    <section id="connector">
      <h2>Connect to your Tindeq</h2>
      <CreateConnection
        setSendChar={setSendChar}
        setConnected={setConnected}
        setWeight={setWeight}
      />
    </section>
  );
}

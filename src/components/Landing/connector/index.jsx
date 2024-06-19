import "./styles.css";
import CreateConnection from "../../CreateConnectionBtn";

export default function Tindeq({ setConnected, setSendChar, setWeight }) {

  return (
    <section id="connector">
      <h1 id="title">Connect to your Tindeq</h1>
      <CreateConnection
        setSendChar={setSendChar}
        setConnected={setConnected}
        setWeight={setWeight}
      />
    </section>
  );
}

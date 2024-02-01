import "./styles.css";
import CreateConnection from "../CreateConnectionBtn";

export default function Landing({ setSendChar, setConnected, setWeight }) {
  return (
    <section id="landing">
      <h1 id="title">Tindeq Progressor</h1>
      <CreateConnection
        setSendChar={setSendChar}
        setConnected={setConnected}
        setWeight={setWeight}
      />
    </section>
  );
}

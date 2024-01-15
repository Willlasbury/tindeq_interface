import "./styles.css";
import CreateConnection from "../CreateConnectionBtn";

export default function Landing({ setServer, setSendChar, setConnected, setRecieveChar, setWeight}) {
  return (
    <section id="landing">
    <h1 id="title">Tindeq Progressor</h1>
      <CreateConnection
        setServer={setServer}
        setSendChar={setSendChar}
        setConnected={setConnected}
        setRecieveChar={setRecieveChar}
        setWeight={setWeight}
      />
    </section>
  );
}


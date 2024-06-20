import Tindeq from "../connector";
import "./styles.css";

export default function ConnectModal({ setConnected, setSendChar, setWeight }) {
  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <Tindeq
            setConnected={setConnected}
            setSendChar={setSendChar}
            setWeight={setWeight}
          />
        </div>
      </div>
    </>
  );
}

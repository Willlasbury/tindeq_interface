import sendCommand from "../../utils/tindeqApi/send_command";

export default function TareBtn({ sendChar, setMeasuring}) {
  function handleClick() {
    sendCommand(sendChar, "TARE_SCALE");
    setMeasuring(false)
  }

  return (
    <button className="control-board-btn" onClick={handleClick}>
      Tare Scale
    </button>
  );
}

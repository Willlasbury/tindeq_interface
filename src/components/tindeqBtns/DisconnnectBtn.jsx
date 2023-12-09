import sendCommand from "../../utils/tindeqApi/send_command";

export default function DisconnectBtn({ sendChar, setConnected }) {
  async function handleDisconnect() {
    try {
      const res = sendCommand(sendChar, "SLEEP");
      setConnected(false);
      // TODO: validate response
      return res;
    } catch (error) {
      return new Error("issue with disconnect: ", error);
    }
  }

  return (
    <button className="control-board-btn" onClick={handleDisconnect}>
      disconnect
    </button>
  );
}

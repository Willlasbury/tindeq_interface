import sendCommand from "../../../utils/tindeqApi/send_command";

export default function RPELoggingBtn({ sendChar, measuring, setMeasuring }) {
  async function startMeasurements() {
    try {
      measuring
        ? await sendCommand(sendChar, "STOP_WEIGHT_MEAS")
        : await sendCommand(sendChar, "START_WEIGHT_MEAS");

      setMeasuring(!measuring);
    } catch (error) {
      new Error("could not start weight measurements: ", error);
    }
  }
  return (
    <button className="control-board-btn" onClick={startMeasurements} >
      {measuring ? "Stop" : "Start"} Tindeq
    </button>
  );
}

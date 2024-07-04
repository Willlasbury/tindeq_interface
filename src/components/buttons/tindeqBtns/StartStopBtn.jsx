import sendCommand from "../../../utils/tindeqApi/send_command";

export default function StartStopBtn({ sendChar, measuring, setMeasuring }) {
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
    <>
      {measuring ? (
        <div className="glow-container">
          <div className="animated-border-box-glow"></div>
          <div className="animated-border-box">
            <button className={"stop-btn"} onClick={startMeasurements}>
              Stop Tindeq
            </button>
          </div>
        </div>
      ) : (
        <div className="glow-container">
          <button className="start-btn" onClick={startMeasurements}>
            Start Tindeq
          </button>
        </div>
      )}
    </>
  );
}

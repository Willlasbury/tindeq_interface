import sendCommand from "../../utils/tindeqApi/send_command";

export default function StopWBtn({ sendChar }) {
  async function stopMeasurements() {
    try {
      await sendCommand(sendChar, "STOP_WEIGHT_MEAS");
    } catch (error) {
      new Error("could not start weight measurements: ", error);
    }
  }
  return <button onClick={stopMeasurements}>Stop Weight Measurements</button>;
}
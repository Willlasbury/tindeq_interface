import sendCommand from "../../utils/tindeqApi/send_command";

export default function ContinuousWBtn({ sendChar }) {
  async function startMeasurements() {
    try {
      console.log("sendChar:", sendChar)
      await sendCommand(sendChar, "START_WEIGHT_MEAS");
    } catch (error) {
      new Error("could not start weight measurements: ", error);
    }
  }
  return <button onClick={startMeasurements}>Start Weight Measurements</button>;
}

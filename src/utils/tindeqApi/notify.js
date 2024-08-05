import handleTindeqRes from "../handleData/handleTindeqRes";

export default async function (recieveChar, setWeight) {
  async function notify(event, data) {
    try {
      const dataView = new DataView(event.target.value.buffer);
      const weight = dataView.getFloat32(2, true);
      let num = Math.round(weight * 10) / 10;
      if (num < 0) {
        num = 0;
      }
      setWeight(num);
    } catch (ex) {
      console.log("ERROR: " + ex.message);
    }
  }

  recieveChar?.addEventListener("characteristicvaluechanged", notify);
  await recieveChar?.startNotifications();
}

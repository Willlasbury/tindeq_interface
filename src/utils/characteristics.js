export default async function getCharacteristics(server) {
  // commands come from StaurtLittlefair's github repo PyTindeq
  const cmds = {
    TARE_SCALE: 0x64,
    START_WEIGHT_MEAS: 0x65,
    STOP_WEIGHT_MEAS: 0x66,
    START_PEAK_RFD_MEAS: 0x67,
    START_PEAK_RFD_MEAS_SERIES: 0x68,
    ADD_CALIB_POINT: 0x69,
    SAVE_CALIB: 0x6a,
    GET_APP_VERSION: 0x6b,
    GET_ERR_INFO: 0x6c,
    CLR_ERR_INFO: 0x6d,
    SLEEP: 0x6e,
    GET_BATT_VLTG: 0x6f,
  };

  try {
    // UUID's come from Tindeq's API 
    const primary_service = "7e4e1701-1ea6-40c9-9dcc-13d34ffead57";
    // notifyUuid is called progressor data point on tindeq api
    const notifyUuid = "7e4e1702-1ea6-40c9-9dcc-13d34ffead57";
    // writeUuid is called progressor control point on tindeq api
    const writeUuid = "7e4e1703-1ea6-40c9-9dcc-13d34ffead57";
    // use funcitons from web bluetooth aka BluetoothRemoteGATTServer and BluetoothRemoteGATTCharacteristics
    const service = await server.getPrimaryService(primary_service);
    const recieve = await service?.getCharacteristic(notifyUuid)
    const send = await service?.getCharacteristic(writeUuid)

    // TODO: test out diffent file structure to handle notifications
    // recieve.addEventListener("characteristicvaluechanged", notify)
    // await recieve.startNotifications()

    // TODO: abstract away send functionality
    // const start = new Uint8Array([cmds.START_WEIGHT_MEAS])
    // const stop = new Uint8Array([cmds.STOP_WEIGHT_MEAS])
    // await sendChar.writeValueWithResponse(start)
    // setTimeout(async () => {
    //   await sendChar.writeValueWithResponse(stop)
    // },5000)
    return {send, recieve}

  } catch (error) {
    return new Error(`some error: ${error}`);
  }
}

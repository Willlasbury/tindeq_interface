export default async function getCharacteristics(server) {
  const cmds = {
    TARE_SCALE: 0x64,
    START_WEIGHT_MEAS: 0x65,
    STOP_WEIGHT_MEAS: 0x66,
    START_PEAK_RFD_MEAS: 0x67,
    START_PEAK_RFD_MEAS_SERIES: 0x68,
    ADD_CALIB_POINT: 0x69,
    SAVE_CALIB: 0x6a,
    GET_APP_VERSION: '0x6b',
    GET_ERR_INFO: 0x6c,
    CLR_ERR_INFO: 0x6d,
    SLEEP: 0x6e,
    GET_BATT_VLTG: 0x6f,
  };
  try {
    const primary_service = "7e4e1701-1ea6-40c9-9dcc-13d34ffead57";
    const notifyUuid = "7e4e1702-1ea6-40c9-9dcc-13d34ffead57";
    const writeUuid = "7e4e1703-1ea6-40c9-9dcc-13d34ffead57";

    const service = await server.getPrimaryService(primary_service);
    // console.log("service:", service)
    const recieveChar = await service?.getCharacteristic(notifyUuid);

    await recieveChar.startNotifications()
    // console.log('===\n\n\ntest\n\n\n===')
    const sendChar = await service?.getCharacteristic(writeUuid)
    const pack = new Uint8Array([cmds.GET_APP_VERSION])
    console.log("pack:", pack)
    const data = await sendChar.writeValueWithResponse(pack)
    console.log("data:", data)
    return recieveChar
  } catch (error) {
    return new Error(`some error: ${error}`);
  }
}

export default async function sendCommand (sendChar, task) {
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
    console.log("task:", task)
      const command = cmds[task]
      console.log("command:", command)
      const pack = new Uint8Array([command])
      await sendChar.writeValueWithoutResponse(pack)
  } catch (error) {
    return new Error('Could not send command: ', error)
  }
}
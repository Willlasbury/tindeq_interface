export default async function getCharacteristics(server) {
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

   
    return {send, recieve}

  } catch (error) {
    return new Error(`some error: ${error}`);
  }
}

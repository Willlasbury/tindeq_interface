export default async function bluetoothConnect() {
  try {
    
    const primary_service = "7e4e1701-1ea6-40c9-9dcc-13d34ffead57";
    const data_point = "7e4e1702-1ea6-40c9-9dcc-13d34ffead57";
    const control_point = "7e4e1703-1ea6-40c9-9dcc-13d34ffead57";
    
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ services: [primary_service] }],
    });
  
    const server = await device.gatt?.connect();

    return server
  } catch (error) {
    return new Error(`some error: ${error}`)
  }
}


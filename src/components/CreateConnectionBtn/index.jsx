import blc from "../../../src/utils/tindeqApi/connection";
import getChar from "../../../src/utils/tindeqApi/characteristics";
import notify from "../../../src/utils/tindeqApi/notify";

export default function CreateConnection({ setServer, setSendChar, setConnected, setRecieveChar, setWeight}) {
  
    async function connect() {
    try {
      const server = await blc();
      setServer(server);
      // recieve and save the chatacteristics
      const { send, recieve } = await getChar(server);
      setSendChar(send);
      setRecieveChar(recieve);
      setConnected(true);
      // start the notifications
      notify(recieve, setWeight);
    } catch (error) {
      throw new Error("could not connect to tindeq: ", error);
    }
  }

  return (
    <button
      className="border-2 border-white rounded-md p-3 mb-3"
      onClick={connect}
    >
      {" "}
      Connect
    </button>
  );
}

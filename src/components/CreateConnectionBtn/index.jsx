import "./styles.css";
import { useNavigate } from "react-router-dom";

import blc from "../../../src/utils/tindeqApi/connection";
import getChar from "../../../src/utils/tindeqApi/characteristics";
import notify from "../../../src/utils/tindeqApi/notify";

export default function CreateConnection({
  setSendChar,
  setConnected,
  setWeight,
}) {
  const nav = useNavigate()
  // initiate the connection and obtain the server
  async function connect() {
    try {
      const server = await blc();

      if (!(server instanceof Error)) {
        // recieve and save the chatacteristics
        const { send, recieve } = await getChar(server);
        setSendChar(send);

        setConnected(true);

        // start the notifications
        notify(recieve, setWeight);
        nav("/")
      }
    } catch (error) {
      throw new Error("could not connect to tindeq: ", error);
    }
  }

  return (
    <button id="tin-connect" onClick={connect}>
      Connect
    </button>
  );

}

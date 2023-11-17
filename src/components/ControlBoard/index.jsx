import "./styles.css";

import StartLoggingBtn from "../../components/tindeqBtns/StartLoggingBtn";
import StopLoggingBtn from "../../components/tindeqBtns/StopLoggingBtn";
import TareBtn from "../../components/tindeqBtns/TareBtn";
import DisconnectBtn from "../tindeqBtns/DisconnnectBtn";

import fastApi from '../../utils/fastApi/crud'
import getMaxWeight from "../../utils/localMem/getMaxWeight";

export default function ControlBoard({ sendChar, setConnected }) {

  function handleMaxWeight () {
    // retrieve max weight from local storage
    const maxWeight = getMaxWeight()
    console.log("maxWeight:", maxWeight)
    fastApi.sendMaxWeight(maxWeight)
  }

  return (
    <ul id="tindeq-controls">
      <li className="tindeq-li">
        <StartLoggingBtn sendChar={sendChar}/>
      </li>
      <li className="tindeq-li">
        <StopLoggingBtn sendChar={sendChar}/>
      </li>
      <li className="tindeq-li">
        <TareBtn sendChar={sendChar} />
      </li>
      <li className="tindeq-li">
        <DisconnectBtn sendChar={sendChar} setConnected={setConnected} />
      </li>
      <li>
        <button onClick={handleMaxWeight}>
          send Max weight
        </button>
      </li>
    </ul>
  );
}

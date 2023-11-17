import "./styles.css";

import StartLoggingBtn from "../../components/tindeqBtns/StartLoggingBtn";
import StopLoggingBtn from "../../components/tindeqBtns/StopLoggingBtn";
import TareBtn from "../../components/tindeqBtns/TareBtn";
import DisconnectBtn from "../tindeqBtns/DisconnnectBtn";
import SaveMaxWeight from "../fastApiBtns/SaveMaxWeight";

export default function ControlBoard({ sendChar, setConnected }) {

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
        <SaveMaxWeight />
      </li>
    </ul>
  );
}

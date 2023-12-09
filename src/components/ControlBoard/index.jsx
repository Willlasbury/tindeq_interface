import "./styles.css";

import StartLoggingBtn from "../../components/tindeqBtns/StartLoggingBtn";
import TareBtn from "../../components/tindeqBtns/TareBtn";
import DisconnectBtn from "../tindeqBtns/DisconnnectBtn";
import SaveMaxWeight from "../fastApiBtns/SaveMaxWeight";

export default function ControlBoard({ sendChar, measuring, setConnected, setMeasuring }) {
  return (
    <ul id="tindeq-controls">
      <li className="tindeq-li">
        <StartLoggingBtn
          sendChar={sendChar}
          measuring={measuring}
          setMeasuring={setMeasuring}
        />
      </li>
      <li className="tindeq-li">
        <TareBtn sendChar={sendChar} />
      </li>
      <li className="tindeq-li">
        <DisconnectBtn sendChar={sendChar} setConnected={setConnected} />
      </li>
      <li className="tindeq-li">
        <SaveMaxWeight />
      </li>
    </ul>
  );
}

import "./styles.css";

import StartLoggingBtn from "../../components/buttons/tindeqBtns/StartLoggingBtn";
import TareBtn from "../../components/buttons/tindeqBtns/TareBtn";
import DisconnectBtn from "../buttons/tindeqBtns/DisconnnectBtn";
import SaveMaxWeight from "../buttons/server/SaveMaxWeight";

export default function ControlBoard({
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
  maxWeight
}) {
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
        <TareBtn sendChar={sendChar} setMeasuring={setMeasuring} />
      </li>
      <li className="tindeq-li">
        <DisconnectBtn
          sendChar={sendChar}
          setConnected={setConnected}
          setMeasuring={setMeasuring}
        />
      </li>
      <li className="tindeq-li">
        <SaveMaxWeight maxWeight={maxWeight}/>
      </li>
    </ul>
  );
}

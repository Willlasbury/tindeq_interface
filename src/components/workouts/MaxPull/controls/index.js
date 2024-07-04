import "./styles.css";
import { Outlet } from "react-router-dom";

import TareBtn from "../../components/buttons/tindeqBtns/TareBtn";
import DisconnectBtn from "../buttons/tindeqBtns/DisconnnectBtn";
import SaveMaxWeight from "../buttons/server/SaveMaxWeight";
import RPELoggingBtn from "../buttons/tindeqBtns/RPELoggingBtn";
import FingerFormBtn from "../workouts/FingerForm/FingerButton";

export default function Controls({
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
  showFingerForm,
  setShowFingerForm,
}) {
  return (
    <div className="control-modal">
      <ul>
        <li className="control-li">
          <TareBtn sendChar={sendChar} setMeasuring={setMeasuring} />
        </li>
        <li className="control-li">
          <FingerFormBtn
            showFingerForm={showFingerForm}
            setShowFingerForm={setShowFingerForm}
          />
        </li>
        <li className="control-li">
          <DisconnectBtn
            sendChar={sendChar}
            setConnected={setConnected}
            setMeasuring={setMeasuring}
          />
        </li>
      </ul>
    </div>
  );
}

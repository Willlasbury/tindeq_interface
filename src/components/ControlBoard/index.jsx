import "./styles.css";
import { Outlet } from "react-router-dom";

import StartLoggingBtn from "../../components/buttons/tindeqBtns/StartLoggingBtn";
import TareBtn from "../../components/buttons/tindeqBtns/TareBtn";
import DisconnectBtn from "../buttons/tindeqBtns/DisconnnectBtn";
import SaveMaxWeight from "../buttons/server/SaveMaxWeight";
import RPELoggingBtn from "../buttons/tindeqBtns/RPELoggingBtn";
import FingerFormBtn from "../workouts/FingerForm/FingerButton";


export default function ControlBoard({
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
  showFingerForm,
  setShowFingerForm
}) {
  return (
    <>
      <li className="control-li">
        <RPELoggingBtn
              sendChar={sendChar}
              measuring={measuring}
              setMeasuring={setMeasuring}
              />
      </li>
      <li className="control-li">
        <TareBtn sendChar={sendChar} setMeasuring={setMeasuring} />
      </li>
      <li className="control-li">
        <DisconnectBtn
          sendChar={sendChar}
          setConnected={setConnected}
          setMeasuring={setMeasuring}
          />
      </li>
      <li className="control-li">
        <FingerFormBtn showFingerForm={showFingerForm} setShowFingerForm={setShowFingerForm} />
      </li>
      </>
  );
}

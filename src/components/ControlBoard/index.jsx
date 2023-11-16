import "./styles.css";

import ContinuousWBtn from "../../components/tindeqBtns/StartLoggingBtn";
import StopLoggingBtn from "../../components/tindeqBtns/StopLoggingBtn";
import TareBtn from "../../components/tindeqBtns/TareBtn";

export default function ControlBoard({sendChar}) {
  return (
    <ul>
      <li>
        <ContinuousWBtn sendChar={sendChar} />
      </li>
      <li>
        <StopLoggingBtn sendChar={sendChar} />
      </li>
      <li>
        <TareBtn sendChar={sendChar} />
      </li>
    </ul>
  );
}

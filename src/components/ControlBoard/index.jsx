import "./styles.css";

import ContinuousWBtn from "../../components/tindeqBtns/StartLoggingBtn";
import StopLoggingBtn from "../../components/tindeqBtns/StopLoggingBtn";
import TareBtn from "../../components/tindeqBtns/TareBtn";

export default function ControlBoard({sendChar}) {
  return (
    <ul id="tindeq-controls">
      <li className="tindeq-btn">
        <ContinuousWBtn sendChar={sendChar} />
      </li>
      <li className="tindeq-btn">
        <StopLoggingBtn sendChar={sendChar} />
      </li>
      <li className="tindeq-btn">
        <TareBtn sendChar={sendChar} />
      </li>
    </ul>
  );
}

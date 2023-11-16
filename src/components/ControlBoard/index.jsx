import "./styles.css";

import ContinuousWBtn from "../../components/tindeqBtns/StartLoggingBtn";
import StopLoggingBtn from "../../components/tindeqBtns/StopLoggingBtn";
import TareBtn from "../../components/tindeqBtns/TareBtn";

export default function ControlBoard(props) {
  return (
    <ul>
      <li>
        <ContinuousWBtn sendChar={props.sendChar} />
      </li>
      <li>
        <StopLoggingBtn sendChar={props.sendChar} />
      </li>
      <li>
        <TareBtn sendChar={props.sendChar} />
      </li>
    </ul>
  );
}

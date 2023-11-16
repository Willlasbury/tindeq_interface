import './styles.css'

import ContinuousWBtn from "../../components/tindeqBtns/StartLoggingBtn";
import StopLoggingBtn from "../../components/tindeqBtns/StopLoggingBtn";
import TareBtn from "../../components/tindeqBtns/TareBtn";

export default function ControlBoard(props) {
    return (
        <ul>
        <ContinuousWBtn sendChar={props.sendChar} />
        <StopLoggingBtn sendChar={props.sendChar} />
        <TareBtn sendChar={props.sendChar} />
        </ul>
    )
}
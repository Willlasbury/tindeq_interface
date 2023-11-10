import sendCommand from "../../utils/tindeqApi/send_command"

export default function TareBtn ({sendChar}) {
    function handleClick () {
        sendCommand(
            sendChar, 
            'TARE_SCALE'
          )
    }

    return (
        <button onClick={handleClick}>Tare Scale</button>
    )
}
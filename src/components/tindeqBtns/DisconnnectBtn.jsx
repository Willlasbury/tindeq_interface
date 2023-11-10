import sendCommand from "../../utils/tindeqApi/send_command";

export default function DisconnectBtn ({sendChar}) {

    async function handleDisconnect () {
        try {
            const res = sendCommand(sendChar, 'SLEEP')
            // TODO: validate response
            console.log("res:", res)
            return res  
        } catch (error) {
            return new Error('issue with disconnect: ', error)
        }
        

    }

    return (
        <button onClick={handleDisconnect}>disconnect</button>
    )

}
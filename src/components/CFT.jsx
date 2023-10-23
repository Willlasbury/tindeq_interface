import { useState } from "react";

import sendCommand from "../utils/send_command";

export default function CFT ({sendChar}) {

    const [running, setrunning] = useState(false);
    
    async function startCFT () {
        try {
            await sendCommand(sendChar, 'START_WEIGHT_MEAS')
            const interval = setInterval(async ()=> {
                await sendCommand(sendChar, 'STOP_WEIGHT_MEAS')
                clearInterval(interval)
            }, 3000)
        } catch (error) {
            return new Error('issue with CFT: ', error)
        }
    }

    return (
        <>
            <button onClick={startCFT}> start CFT</button>
        </>
    )
}
import { useState } from "react";

import sendCommand from "../../../utils/tindeqApi/send_command";

// run critical force test
export default function CFT ({sendChar}) {
// TODO: add check for connection
    // set the time of the test run in milliseconds
    const duration = 3000

    async function runCFT () {
        try {
            await sendCommand(sendChar, 'START_WEIGHT_MEAS')
            const interval = setInterval(async ()=> {
                await sendCommand(sendChar, 'STOP_WEIGHT_MEAS')
                clearInterval(interval)
            }, duration)
        } catch (error) {
            return new Error('issue with CFT: ', error)
        }
    }

    

    return (
        <>
            <button onClick={runCFT}> start CFT</button>
        </>
    )
}
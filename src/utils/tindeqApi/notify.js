import handleTindeqRes from "../handleData/handleTindeqRes"

export default async function (recieveChar, setWeight) {
    async function notify (event, data) {
      try {
        // create array of ints from tindeq response
        const value = new Uint8Array(event.target.value.buffer)
        handleTindeqRes(value, setWeight)
        
    } catch (ex) {
        console.log("ERROR: " + ex.message);
    }
    }

    recieveChar?.addEventListener("characteristicvaluechanged", notify)
    await recieveChar?.startNotifications()
}
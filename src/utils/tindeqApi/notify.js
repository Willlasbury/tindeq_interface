import api from "../fastApi"

export default async function (recieveChar) {
    async function notify (event, data) {
      try {
        // TODO: add check on first byte from tindeq to validate what the response is

        // create array of ints from tindeq response
        const value = new Uint8Array(event.target.value.buffer)
    
        // turn array into string so it can be used as the body of the post
        const string = value.join(' ')

        const res = await api.post(string)

        console.log("res:", res)
    } catch (ex) {
        alert("ERROR: " + ex.message);
    }
    }

    recieveChar?.addEventListener("characteristicvaluechanged", notify)
    await recieveChar?.startNotifications()
}
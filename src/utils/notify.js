import api from "./api"

export default async function (recieveChar) {
    // TODO: customize notify event to handle personal uses 
    async function notify (event, data) {
      try {
                // populate data var with tindeq data
        // TODO: add check on first byte from tindeq to validate it is a weight value (0x01)
        // TODO: send data to server to be decoded and then do something
        var value = event.target.value;
        var len = value.byteLength;
        var bytes = [];
        for (var k = 0; k < len; k++)
        {
            var b = value.getInt8(k);

            bytes.push(b);
        }
        const string = bytes.join(' ')
        const res = await api.post(string)
        console.log("res:", res)
    } catch (ex) {
        alert("ERROR: " + ex.message);
    }
    }

    recieveChar?.addEventListener("characteristicvaluechanged", notify)
    await recieveChar?.startNotifications()
}
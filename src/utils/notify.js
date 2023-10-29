export default async function (recieveChar) {
    // TODO: customize notify event to handle personal uses 
    function notify (event) {
      try {
        var value = event.target.value;
        var len = value.byteLength;
        var bytes = [];
        for (var k = 0; k < len; k++)
        {
            var b = value.getInt8(k);

            bytes.push(b);
        }
        console.log("Data: ", value);
        const string = bytes.join(' ')
        console.log("string:", string)
    } catch (ex) {
        alert("ERROR: " + ex.message);
    }
    }

    recieveChar?.addEventListener("characteristicvaluechanged", notify)
    await recieveChar?.startNotifications()
}
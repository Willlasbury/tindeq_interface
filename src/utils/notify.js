export default async function (recieveChar) {
    // TODO: customize notify event to handle personal uses 
    function notify (event, setData) {
      try {
        // populate data var with tindeq data
        // TODO: add check on first byte from tindeq to validate it is a weight value (0x01)
        const value = event.target.value;
        setData(value)
    } catch (ex) {
        alert("ERROR: " + ex.message);
    }
    }

    recieveChar?.addEventListener("characteristicvaluechanged", notify)
    await recieveChar?.startNotifications()
}
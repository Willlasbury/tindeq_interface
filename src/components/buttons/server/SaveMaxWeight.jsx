import fastApi from '../../../utils/server/crud'

export default function SaveMaxWeight (maxWeight) {
    function handleMaxWeight () {
        // retrieve max weight from local storage
        const style = {
          "edge_size_mm": 20,
          "grip": "full",
          "hand": "right",
          "index": true,
          "middle": false,
          "ring": true,
          "pinky": false
            }
        const res = fastApi.sendMaxWeight(maxWeight, style)
        console.log("res:", res)
      }
      return (
        <button className='control-board-btn' onClick={handleMaxWeight}>
          Send Max Weight
        </button>
      )
}
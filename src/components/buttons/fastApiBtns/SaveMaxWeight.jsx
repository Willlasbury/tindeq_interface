import fastApi from '../../../utils/server/crud'
import getMaxWeight from "../../../utils/localMem/getMaxWeight";

export default function SaveMaxWeight () {
    function handleMaxWeight () {
        // retrieve max weight from local storage
        const maxWeight = getMaxWeight()
        fastApi.sendMaxWeight(maxWeight)
      }
      return (
        <button className='control-board-btn' onClick={handleMaxWeight}>
          Send Max Weight
        </button>
      )
}
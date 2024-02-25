import fastApi from '../../../utils/server/crud'

export default function SaveMaxWeight () {
    function handleMaxWeight () {
        // retrieve max weight from local storage
        fastApi.sendMaxWeight(maxWeight)
      }
      return (
        <button className='control-board-btn' onClick={handleMaxWeight}>
          Send Max Weight
        </button>
      )
}
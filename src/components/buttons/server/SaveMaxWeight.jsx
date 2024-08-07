import fastApi from '../../../utils/server/crud'
import { useOutletContext } from "react-router-dom";

export default function SaveMaxWeight ({maxWeight, styleData, loggedIn}) {
    function handleMaxWeight () {
        const style = {
          "hand": styleData.hand,
          "edge_size_mm": styleData.edge,
          "grip": styleData.grip,
          "index": styleData.index,
          "middle": styleData.middle,
          "ring": styleData.ring,
          "pinky": styleData.pinky
            }
        const res = fastApi.sendMaxWeight(maxWeight, style)
        // TODO: add some response for successful or unsuccessful call
      }
      return (
        <button disabled={loggedIn == 'guest'? true:false} className='control-board-btn' onClick={() => handleMaxWeight()}>
          Send Max Weight
        </button>
      )
}
import fastApi from '../../../utils/server/crud'
import { useOutletContext } from "react-router-dom";

export default function SaveMaxWeight ({maxWeight, style, loggedIn}) {
    function handleMaxWeight () {
        const styleData = {
          "hand": style.hand,
          "edge_size_mm": style.edge,
          "grip": style.grip,
          "index": style.index,
          "middle": style.middle,
          "ring": style.ring,
          "pinky": style.pinky
            }
        const res = fastApi.sendMaxWeight(maxWeight, styleData)
        // TODO: add some response for successful or unsuccessful call
      }
      return (
        <button disabled={loggedIn == 'guest'? true:false} className='control-board-btn' onClick={() => handleMaxWeight()}>
          Send Max Weight
        </button>
      )
}
import fastApi from '../../../utils/server/crud'
import { useOutletContext } from "react-router-dom";

export default function SaveMaxWeight (maxWeight) {
    const styleData = useOutletContext()
  
    function handleMaxWeight () {
        // retrieve max weight from local storage
        const style = {
          "hand": styleData.hand,
          "edge_size_mm": styleData.edge,
          "grip": styleData.grip,
          "index": styleData.index,
          "middle": styleData.middle,
          "ring": styleData.ring,
          "pinky": styleData.pinky
            }
            console.log("style:", style)
        // const res = fastApi.sendMaxWeight(maxWeight, style)
      }
      return (
        <button className='control-board-btn' onClick={() => handleMaxWeight()}>
          Send Max Weight
        </button>
      )
}
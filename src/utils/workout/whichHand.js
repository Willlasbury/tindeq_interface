import { useState } from "react";

export default function whichHand() {
  const [hand, updateHand] = useState('left');
  const options = ["left", "right"];
  const setHand = (hand) => {
    if (options.includes(hand)) {
      updateHand(hand);
    } else {
      console.alert("not a hand option");
    }
  };
  const swapHand = () => {
    updateHand(hand == 'left' ? 'right':'left')
  }

  return [hand, setHand, swapHand];
}

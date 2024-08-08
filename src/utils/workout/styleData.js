import { useState } from "react";

export default function useStyleData() {
  const [styleData, setStyleData] = useState({
    hand: "left",
    edge: 20,
    grip: "open",
    index: true,
    middle: true,
    ring: true,
    pinky: true,
  });

  const styleOptions = {
    hands: ["left", "right"],
    edges: [20, 15, 12, 10, 8, 7, 6, 4, null],
    grips: ["open", "half", "full", "jug"],
    fingers: ["index", "middle", "ring", "pinky"],
  };

  //   manually upade hand
  const updateHand = (hand) => {
    if (styleOptions.hands.includes(hand)) {
      setStyleData((prev) => {
        return { ...prev, hand: hand };
      });
    } else {
      return console.error("not a style hand option");
    }
  };

  //   toggle between left and right hand
  const toggleHand = () => {
    updateHand(styleData.hand == "left" ? "right" : "left");
  };

  //   manually update edge size
  //   may need to add checks for null interaction with grip: jug at some point
  const updateEdge = (edge) => {
    if (styleOptions.edges.includes(edge)) {
      setStyleData((prev) => {
        return { ...prev, edge: edge };
      });
    } else {
      return console.error("not an edge option");
    }
  };

  //   manually update grip
  const updateGrip = (grip) => {
    if (styleOptions.grips.includes(grip)) {
      if (grip == "jug") {
        setStyleData((prev) => {
          return { ...prev, grip: grip, edge: null };
        });
      } else {
        setStyleData((prev) => {
          return { ...prev, grip: grip };
        });
      }
    } else {
      return console.error("not an grip option");
    }
  };

  // manually set finger
  const updateFinger = (finger, bool) => {
    if (typeof bool != "boolean") {
      return console.error("finger options can only be true or false");
    }
    if (styleOptions.fingers.includes(finger)) {
      setStyleData((prev) => {
        return { ...prev, [finger]: bool };
      });
    } else {
      return console.error("not an finger option");
    }
  };

  //   toggle between finger being true or false
  const toggleFinger = (finger) => {
    setStyleData((prev) => {
      return { ...prev, [finger]: !styleData[finger] };
    });
  };

  // set all fingers to true
  const resetAllFingers = () => {
    styleOptions.fingers.map((finger) => updateFinger(finger, true));
  };

  return [
    styleData,
    setStyleData,
    styleOptions,
    updateHand,
    toggleHand,
    updateEdge,
    updateGrip,
    updateFinger,
    toggleFinger,
    resetAllFingers,
  ];
}

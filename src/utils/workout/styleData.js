import { useState } from "react";

export default function useStyleData() {
  const [styleData, setStyleData] = useState({
    hand: "left",
    edge: 20,
    grip: "open",
    index: true,
    middle: false,
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
    return styleData
  };

  //   manually update edge size
  const updateEdge = (edge) => {
    if (styleOptions.edges.includes(edge)) {
      setStyleData((prev) => {
        return { ...prev, edge: edge };
      });
    } else {
      return console.error("not an edge option");
    }
  };

  // set all fingers to true
  const resetAllFingers = () => {
    styleOptions.fingers.map((finger) => updateFinger(finger, true));
    return styleData
  };

  //   manually update grip
  const updateGrip = (grip) => {
    if (styleOptions.grips.includes(grip)) {
      if (grip == "jug") {
        resetAllFingers()
        updateEdge(null)
        setStyleData((prev) => {
          return { ...prev, grip: grip, edge: null };
        });
      } else if (styleData.edge == null && styleData.grip == 'jug') {
        // adjust style from null edge to 20 when swapping style from jug to something else
        setStyleData((prev) => {
          return { ...prev, grip: grip, edge: 20 };
        });
      } else {
        setStyleData((prev) => {
          return {...prev, grip: grip}
        })
      }
    } else {
      return console.error("not a grip option");
    }
  };

  // manually set finger
  const updateFinger = (finger, bool) => {
    if (typeof bool != "boolean") {
      return console.error("finger options can only be true or false");
    }
    if (styleOptions.fingers.includes(finger)) {
      return setStyleData((prev) => {
        return { ...prev, [finger]: bool };
      });
    } else {
      return console.error("not a finger option");
    }
  };

  //   toggle between finger being true or false
  const toggleFinger = (finger) => {
    setStyleData((prev) => {
      return { ...prev, [finger]: !styleData[finger] };
    });
  };

  // create a master function to cut down on the amount of exports
  const setStyle = ( val, bool = null  ) => {

    // check for boolean to first determine if we are updating fingers
     if (bool != null) {
       return updateFinger(val, bool);
     }
     
    //  check for special calls
    if (val == "swap hand") {
      return toggleHand();
      }

    if (val == "reset fingers") {
      return resetAllFingers();
    }
    if (val == "toggle finger") {
      return toggleFinger()
    }

    // this is used to mirror setState's ability to update based on preveious states
    if (typeof val == "function") {
      const res = val(styleData)
      // prevent an infinite loop
      if (typeof res == "function") {
        return console.error("Can not return function from function \nDon't start an infinite loop")
      } else {
        return setStyle(res)
      }
    }
    // update based on receiving a style data object
    if (typeof val == "object") {
      for (let key in val) {
        // validate object before setting the style
        if (styleOptions.fingers.includes(key)) {
          if (typeof val[key] == "boolean") {
            continue;
          } else {
            console.error("could not update style from object");
            return styleData;
          }
        } else if (styleOptions[`${key}s`].includes(val[key])) {
          continue;
        } else {
          console.error("could not update style from object");
          return styleData;
        }
      }
      setStyleData(val);
      return styleData;
    }


    // This will check the value of val and look for its match in styleOptions
    // it will then grab the key from styleOptions and perform an associated update 
    // function
    const [key, value] = Object.entries(styleOptions).find(([k, v]) => {
      // Numbers are sent in as text, so we will check if we can update val to a number
      if (Number(val)) {
        val = Number(val)
      } 
      if (v.includes(val)) {
        return k;
      } 
    });

    // apply update function from key
    if (key == "hands") {
      return updateHand(val);
    } else if (key == "edges") {
      return updateEdge(val);
    } else if (key == "grips") {
      return updateGrip(val);
    } else {
      console.error("could not update");
    }

    return styleData;
  };

  return [styleData, styleOptions, setStyle];
}

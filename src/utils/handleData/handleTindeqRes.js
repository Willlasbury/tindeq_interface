import handleWeightRes from "../handleData/handleWeightRes";
import api from "../fastApi/crud";

export default async function handleTindeqRes(value, setWeight) {
  // check response type
  if (value[0] === 1) {
    // turn array into string so it can be used as the body of the post
    const string = value.join(" ");

    const res = await api.post(string);
    const weight = handleWeightRes(res[1]);
    // format weight
    let num = Math.round(weight * 10) / 10;
    if (num < 0) {
      num = 0
    }
    setWeight(num);
  }
  return new Error("response type not recognized");
}

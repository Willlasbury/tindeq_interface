// expects response of [int, object] where int is type of data and object is weight data

export default function handleWeightRes(res) {
  const weights = Object.keys(res);
  const avg =
    weights.reduce((acc, val, i) => {
      return acc + parseFloat(val);
    }, 0) / weights.length;

  return avg;
}

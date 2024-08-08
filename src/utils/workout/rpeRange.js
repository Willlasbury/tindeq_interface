export default function RPERange(RPE, maxPull) {
  const workingWeight = ((RPE / 10) * maxPull) >> 0;
  const range = {
    maxRange: workingWeight * 0.1 + workingWeight,
    minRange: workingWeight,
  };
  const rpes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return { range, rpes };
}

export default function checkMaxWeight(weight, maxWeight, setMaxWeight) {
    if (weight > maxWeight) {
        setMaxWeight(weight);
      } else if (!maxWeight && weight) {
        setMaxWeight(weight);
      }
}
export default function checkMaxWeight(weight, maxWeight, setMaxWeight) {
    if (weight > maxWeight) {
        setMaxWeight(weight);
        localStorage.setItem('maxWeight', weight)
    } else if (!maxWeight && weight) {
        setMaxWeight(weight);
        localStorage.setItem('maxWeight', weight)
      }
}
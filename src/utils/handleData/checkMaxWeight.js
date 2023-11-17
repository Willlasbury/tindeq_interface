import writeToLM from '../../utils/localMem/write'

export default function checkMaxWeight(weight, maxWeight, setMaxWeight) {
    if (weight > maxWeight) {
        setMaxWeight(weight);
        writeToLM('maxWeight', weight)
    } else if (!maxWeight && weight) {
        setMaxWeight(weight);
        writeToLM('maxWeight', weight)
      }
}
export default function getMaxWeight () {

    const max_weight = localStorage.getItem('maxWeight')

    if (max_weight) {
        return parseFloat(max_weight)
    } else {
        return new Error('could not get max weight', max_weight)
    }
}
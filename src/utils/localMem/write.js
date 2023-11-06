export default function writeToLM (data) {
    try {
        key = 'weight'
        // convert data to string
        data = JSON.stringify(data)
        localStorage.setItem(key, data)
    } catch (error) {
        return new Error('error occured while saving to local memory: ', error)
    }
}
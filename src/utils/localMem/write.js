export default function writeToLM (key, data) {
    try {
        // convert data to string
        const dataStr = JSON.stringify(data)
        localStorage.setItem(key, dataStr)
    } catch (error) {
        return new Error('error occured while saving to local memory: ', error)
    }
}
export default function writeToLM (key, data) {
    try {
        console.log("data:", typeof data)
        // convert data to string
        localStorage.setItem(key, data)
    } catch (error) {
        return new Error('error occured while saving to local memory: ', error)
    }
}
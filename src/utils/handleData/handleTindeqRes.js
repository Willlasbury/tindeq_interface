import handleWeightRes from "../handleData/handleWeightRes"
import api from "../fastApi/crud"


export default async function handleTindeqRes (value, setWeight) {
    if (value[0] === 1) {
        // turn array into string so it can be used as the body of the post
        const string = value.join(' ')
        const res = await api.post(string)
        console.log("res:", res)
        const weight = handleWeightRes(res[1])
        setWeight(weight)
    }
    return new Error('response type not recognized')
}
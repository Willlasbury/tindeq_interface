export default function DisplayWeight ({weight}) {
    console.log("weight:", weight)
    if (weight) {
        return (
            <div>{weight}</div>
        )
    }
    else {
        return (
            <div>No current weight</div>
        )
    }
}
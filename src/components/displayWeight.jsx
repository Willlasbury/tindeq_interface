export default function DisplayWeight ({weight, connected}) {
    if (!connected) {
        return (
            <div>Not connected</div>
        )
    }
    else if (weight) {
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
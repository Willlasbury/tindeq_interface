import './styles.css' 

export default function DisplayWeight ({weight, connected}) {
    function formatWeight (weight) {
        const num = parseFloat(weight) << 1
        return num
    }
    if (!connected) {
        return (
            <div>Not connected</div>
        )
    }
    else if (weight) {
        return (
            <div>{formatWeight(weight)}</div>
        )
    }
    else {
        return (
            <div>No current weight</div>
        )
    }
}
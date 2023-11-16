import './styles.css' 

export default function DisplayWeight ({weight, connected}) {
    function formatWeight (weight) {
        const num = parseFloat(weight) << 1
        return num
    }
    if (!connected) {
        return (
            <p>Not connected</p>
        )
    }
    else if (weight) {
        return (
            <p>{formatWeight(weight)}</p>
        )
    }
    else {
        return (
            <p>No current weight</p>
        )
    }
}
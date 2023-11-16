import './styles.css' 

export default function DisplayWeight ({weight, connected}) {
    function formatWeight (weight) {
        const num = parseFloat(weight) << 1
        return num
    }
    if (!connected) {
        return (
            <p className='weight-display'>Not connected</p>
        )
    }
    else if (weight) {
        return (
            <p className='weight-display'>{formatWeight(weight)}</p>
        )
    }
    else {
        return (
            <p className='weight-display'>No current weight</p>
        )
    }
}
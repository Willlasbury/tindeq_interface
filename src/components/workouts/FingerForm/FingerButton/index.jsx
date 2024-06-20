import './styles.css'

export default function FingerFormBtn ({showFingerForm, setShowFingerForm}) {
    return (
        <button onClick={()=>setShowFingerForm(!showFingerForm)}>Finger Set Up</button>
    )
}
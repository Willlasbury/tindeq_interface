import './styles.css'

export default function TimerSettings (setPullTime, setRestTime) {
    return (
        <>
        <label className="userSetVals" htmlFor="userSetMaxPull">
            Set Max:
            <input
              htmlFor="userSetMaxPull"
              defaultValue={maxPull}
              onChange={(e) => setMaxPull(Number(e.target.value))}
            ></input>
          </label>
        </>
    )
}
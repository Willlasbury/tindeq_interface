import './styles.css'

export default function TimerSettings ({maxPull, RPE, setRPE, pullTime, setPullTime, restTime, setRestTime}) {
  console.log("pullTime:", pullTime)
  
    return (
        <>
        {/* <label className="userSetVals" htmlFor="userSetMaxPull">
            Set Max:
            <input
              htmlFor="userSetMaxPull"
              defaultValue={maxPull}
              onChange={(e) => setMaxPull(Number(e.target.value))}
            ></input>
          </label>
        <label className="userSetVals" htmlFor="userSetMaxPull">
            RPE:
            <input
              htmlFor="userSetMaxPull"
              defaultValue={RPE}
              onChange={(e) => setRPE(Number(e.target.value))}
            ></input>
          </label> */}
        <label className="userSetVals" htmlFor="userSetMaxPull">
            Pull Time:
            <input
              htmlFor="userSetMaxPull"
              defaultValue={pullTime}
              onChange={(e) => setPullTime(Number(e.target.value))}
            ></input>
          </label>
        <label className="userSetVals" htmlFor="userSetMaxPull">
            Rest Time:
            <input
              htmlFor="userSetMaxPull"
              defaultValue={restTime}
              onChange={(e) => setRestTime(Number(e.target.value))}
            ></input>
          </label>
        </>
    )
}
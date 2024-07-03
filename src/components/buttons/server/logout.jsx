// import { useNavigate } from "react-router-dom"


export default function LogOut ({setLoggedIn, loggedIn, setConnected, connected}) {
    // const nav = useNavigate()

    function disconnect () {
       if (loggedIn) {
        setLoggedIn(false)
       }
       if (connected) {
        setConnected(false)
       }
      //  nav("/")
      }
      return (
        <>
        {loggedIn && <button className='logout-btn' onClick={disconnect}>
          Log out
        </button> }
        </>
      )
}
export default function LogOut ({setLoggedIn, loggedIn, setConnected, connected}) {
    function disconnect () {
       if (loggedIn) {
        setLoggedIn(false)
       }
       if (connected) {
        setConnected(false)
       }
      }
      return (
        <>
        {loggedIn && <button className='control-board-btn' onClick={disconnect}>
          Log out
        </button> }
        </>
      )
}
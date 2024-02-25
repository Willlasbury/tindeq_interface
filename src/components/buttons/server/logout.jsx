export default function LogOut ({setLoggedIn, loggedIn}) {
    function disconnect () {
       if (loggedIn) {
        setLoggedIn(false)
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
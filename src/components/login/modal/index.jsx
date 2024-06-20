import LoginForm from "../form";
import './styles.css'

export default function LoginModal({ setLoggedIn }) {

  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <LoginForm setLoggedIn={setLoggedIn} />
        </div>
      </div>
    </>
  );
}

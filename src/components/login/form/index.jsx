import "./styles.css";
import { useState, useEffect } from "react";

import usersApi from "../../../utils/server/users";
import validateToken from "../../../utils/server/validateToken";

export default function LoginForm({ setLoggedIn }) {
  const [inputs, setInputs] = useState({});
  const [signUp, setSignUp] = useState(false);

  // check if user has token local memory for login
  useEffect(() => {
    const checkToken = async () => {
      const localAccessToken = localStorage.getItem("access_token");
      const localRefreshToken = localStorage.getItem("refresh_token");
      
      if (localAccessToken != null && localRefreshToken != null) {
        const res = await validateToken(localAccessToken, localRefreshToken);
        
        if (res) {
          setLoggedIn(true)
        }

      }
    };
    checkToken()
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function login(event) {
    event.preventDefault();
    if (signUp) {
      const res = await usersApi.createUser(
        inputs.displayName,
        inputs.email,
        inputs.password
      );
      if (res.user.id) {
        setLoggedIn(true);
      }
    } else {
      const res = await usersApi.login(inputs.email, inputs.password);

      if (res.session.access_token) {
        localStorage.setItem("access_token", res.session.access_token);
        localStorage.setItem("refresh_token", res.session.refresh_token);
        setLoggedIn(true);
      } else {
        console.log("could not login in");
      }
    }
  }

  const continueGuest = () => {
    setLoggedIn("guest");
  };

  return (
    <section id="login-signup-wrapper">
      <h2>Welcome</h2>
      <form id="login-form" onSubmit={login}>
        <div id="login-fields">
          {signUp && (
            <label className="login-label" name="login-label">
              <span>Username</span>
              <input
                className="login-input"
                type="text"
                name="displayName"
                value={inputs.displayName || ""}
                onChange={handleChange}
              ></input>
            </label>
          )}
          <label className="login-label" name="login-label">
            <span>Email</span>
            <input
              className="login-input"
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            ></input>
          </label>
          <label className="login-label" name="login-label">
            <span>Password</span>
            <input
              className="login-input"
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <button id="login-signup-btn" type="submit">
          {signUp ? "SIGN UP" : "LOG IN"}
        </button>
      </form>
      <p id="toggle-login-signup" onClick={() => setSignUp(!signUp)}>
        {signUp
          ? "Already have an account: Login"
          : "SDont have and account: Sign Up"}
      </p>
      <div onClick={continueGuest}>
        Continue as <u>Guest</u>
      </div>
    </section>
  );
}

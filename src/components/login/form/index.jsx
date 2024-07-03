import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import usersApi from "../../../utils/server/users";

export default function LoginForm({ setLoggedIn }) {
  const [inputs, setInputs] = useState({});
  const [signUp, setSignUp] = useState(false);

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
          {signUp ? 'SIGN UP' : 'LOG IN'}
        </button>
      </form>
      <span id="toggle-login-signup" onClick={() => setSignUp(!signUp)}>
        Dont have and account? {signUp ? "Login" : "Sign Up"}
      </span>
    </section>
  );
}

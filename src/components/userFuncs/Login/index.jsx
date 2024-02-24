import "./styles.css";
import { useState } from "react";

import usersApi from "../../../utils/server/users";
import writeToLM from "../../../utils/localMem/write";

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
      console.log("res:", res)
      if (res.session.accesss_token) {
        writeToLM('token', res.session.accesss_token)
        setLoggedIn(true);
      }
    }
  }
  return (
    <div id="login-modal">
      <form id="login-form" onSubmit={login}>
        {signUp && (
          <label className="login-label" htmlFor="login-label">
            Username:{" "}
            <input
              className="login-input"
              type="text"
              name="displayName"
              value={inputs.displayName || ""}
              onChange={handleChange}
            ></input>
          </label>
        )}
        <label className="login-label" htmlFor="login-label">
          Email:{" "}
          <input
            className="login-input"
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="login-label">
          Password:{" "}
          <input
            className="login-input"
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setSignUp(!signUp)}>
        {" "}
        {signUp ? "Login" : "Sign Up"}
      </button>
    </div>
  );
}

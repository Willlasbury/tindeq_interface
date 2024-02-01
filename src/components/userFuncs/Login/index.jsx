import usersApi from "../../../utils/fastApi/users";
import "./styles.css";
import { useState } from "react";
import SignUp from "../SignUp";

export default function LoginForm({setLoggedIn}) {
  const [inputs, setInputs] = useState({});
  const [signUp, setSignUp] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function login(event) {
    event.preventDefault();
    const res = await usersApi.login(inputs.email, inputs.password);
    // TODO: check response from supabase
    if (res) {
      setLoggedIn(true)
    }
  }

  if (signUp) {
    return <SignUp setLoggedIn={setLoggedIn}/>;
  } else {
    return (
      <div id="login-modal">
        <form id="login-form" onSubmit={login}>
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
          <label onClick={() => setSignUp(!signUp)}>
            Sign Up
          </label>
        </form>
      </div>
    );
  }
}

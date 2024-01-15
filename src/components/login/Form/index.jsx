import usersApi from "../../../utils/fastApi/users";
import api from "../../../utils/fastApi/crud";
import "./styles.css";
import { useState } from "react";

export default function LoginForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const email = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [email]: value }));
  };

  async function login(event) {
    event.preventDefault();
    // const res = await usersApi.loginUser(inputs.email, inputs.password)
    // console.log('===\n\n\ntest\n\n\n===')
    // const res = await usersApi.getUserTest()
    const res = await api.testGet()
    console.log("res:", res)
  }

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
      </form>
    </div>
  );
}

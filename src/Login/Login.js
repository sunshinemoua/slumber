import React, { useState } from "react";
import PropTypes from "prop-types";
import LoginUser from "./LoginUser";

<LoginUser />;

export default function Login({ setToken }) {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const inputHandler = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await LoginUser({
      username,
      password,
    });
    console.log(token);
    setToken(token);
    console.log(token);
  };

  return (
    <div>
      <h3> Please log in</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" onChange={usernameHandler} />
        </label>
        <br />
        <label>
          Password <input type="password" onChange={passwordHandler} />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

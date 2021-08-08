import React, { useState } from "react";
import { useHistory } from "react-router";
import { signup } from "../Helpers";

const JoinUs = () => {
  const history = useHistory();
  const [credits, setCredits] = useState();
  const [failure, setFailure] = useState();
  const user = JSON.parse(sessionStorage.getItem("Ma7ally-token"));
  if (user) {
    history.push("/dashboard");
  }
  const handleClick = () => {
    const btn = document.getElementById("signup");
    btn.disabled = true;
    btn.style.backgroundColor = "#4caf50";
    btn.style.color = "#370640";
    btn.value = "Wait...";
  };

  const handleChange = (e) => {
    setCredits({ ...credits, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFailure();
    handleClick();
    const respond = await signup(credits);
    if (!respond.authentication_token) {
      setFailure(respond);
    }
    if (respond.authentication_token) {
      sessionStorage.setItem(
        "Ma7ally-token",
        JSON.stringify(respond.authentication_token)
      );
      history.push("/categories-select");
    }
  };

  if (failure) {
    const btn = document.getElementById("signup");
    btn.disabled = false;
    btn.style.backgroundColor = "#ff9800";
  }
  return (
    <div className="desktop-wrapper">
      <h3 className="text-center p-5 white bg-gradient">
        Grow your business up with just few clicks.
      </h3>
      <div>
        <h1 className="text-center m-5">Join Us</h1>

        <div className="flex-col center">
          {failure &&
            failure[0] &&
            failure.map((fail) => (
              <span key={fail} className="alert-bad">
                {fail}
              </span>
            ))}
        </div>
        <br />
        <form onSubmit={handleSubmit} className="flex-col p-3">
          <input
            onChange={handleChange}
            type="text"
            className="name input"
            name="tradername"
            placeholder="Your name"
            minLength="3"
            required
          />

          <input
            onChange={handleChange}
            type="email"
            className="name input"
            name="email"
            placeholder="Your email"
            minLength="4"
            required
          />

          <input
            onChange={handleChange}
            type="text"
            className="name input"
            name="storename"
            placeholder="Store name"
            minLength="3"
            required
          />

          <input
            onChange={handleChange}
            type="password"
            className="password input"
            name="password"
            minLength="6"
            placeholder="Password"
            required
          />
          <input
            type="submit"
            id="signup"
            className="submit btn active login p-2 bg-secondary"
            value="SIGN UP"
          />
        </form>
      </div>
    </div>
  );
};

export default JoinUs;

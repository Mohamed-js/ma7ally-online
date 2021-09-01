import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { signIn } from '../Helpers';

const Login = () => {
  const history = useHistory();
  const [credits, setCredits] = useState();
  const [failure, setFailure] = useState();
  const user = JSON.parse(sessionStorage.getItem('Ma7ally-token'));
  if (user) {
    history.push('/dashboard');
  }

  const handleChange = (e) => {
    setCredits({ ...credits, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const btn = document.getElementById('login');
    btn.disabled = true;
    btn.style.backgroundColor = '#4caf50';
    btn.value = 'Wait...';
    btn.textContent = 'Wait...';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFailure('');
    handleClick();
    const respond = await signIn(credits);
    if (respond && respond.failure) {
      const btn = document.getElementById('login');
      btn.disabled = false;
      btn.style.backgroundColor = '#ff9800';
      return setFailure(respond.failure);
    }
    setFailure('');
    sessionStorage.setItem(
      'Ma7ally-token',
      JSON.stringify(respond.authentication_token)
    );
    if (respond.first_visit) {
      return history.push('/categories-select');
    }
    history.push('/dashboard');
  };

  return (
    <div className="desktop-wrapper">
      <div className="flex-col">
        <h1 className="text-center m-5">Login</h1>
        <br />
        {failure && <span className="alert-bad">{failure}</span>}
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit} className="signup flex-col  p-3">
          <input
            onChange={handleChange}
            type="text"
            className="name input"
            name="email"
            placeholder="Email"
            required
          />
          <input
            onChange={handleChange}
            type="password"
            className="password input"
            name="password"
            placeholder="*******"
            required
          />

          <input
            type="submit"
            id="login"
            className="login btn p-2 bg-secondary"
            value="LOGIN"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

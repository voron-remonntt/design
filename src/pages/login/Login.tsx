import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export const Login: React.FC = () => (
  <div className="container">
    <div className="main-box login">
      <h1 className="title">Login</h1>
      <form action="">
        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-envelope" />
          </span>
          <input
            className="input"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-lock-alt" />
          </span>
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="check">
          <label htmlFor="checkbox">
            <input
              className="checkbox"
              type="checkbox"
              id="checkbox"
            />
            Remember me
          </label>
          <Link className="checkbox__link" to=" ">
            Forget Password
          </Link>
        </div>

        <button type="submit" className="main-btn">
          Login
        </button>

        <div className="link-container">
          <div className="link-container-item">
            <p>If you don&rsquo;t have an account?</p>
          </div>

          <div className="link-container-item">
            <Link to="/register" className="register-link">
              Register Here!
            </Link>
          </div>
        </div>
      </form>
    </div>

    <Link to="/" className="close-icon">
      <div className="bx bx-x" />
    </Link>
  </div>
);

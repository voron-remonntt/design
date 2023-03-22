import React from 'react';
import { Link } from 'react-router-dom';
import { AuthButton } from '../components/Buttons/AuthButton/AuthButton';
import { CloseButton } from '../components/Buttons/CloseButton/CloseButton';
import { Ininput } from '../components/Input/Input';
import '../styles/LoginRegister.scss';

export const Login: React.FC = () => (
  <div className="container">
    <div className="main-box login">
      <h1 className="title">Login</h1>
      <form action="">
        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-envelope" />
          </span>

          <Ininput
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-lock-alt" />
          </span>

          <Ininput
            type="password"
            placeholder="Password"
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

        <AuthButton text="Login" />

        <div className="link-container">
          <div className="link-container-item">
            <p>If you don&rsquo;t have an account?</p>
          </div>

          <div className="link-container-item">
            <Link to="/register" className="link">
              Register Here!
            </Link>
          </div>
        </div>
      </form>
    </div>

    <CloseButton />
  </div>
);

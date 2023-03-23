import React from 'react';
import { Link } from 'react-router-dom';
import { AuthButton } from '../components/Buttons/AuthButton/AuthButton';
import { CloseButton } from '../components/Buttons/CloseButton/CloseButton';
import '../styles/LoginRegister.scss';

export const Register: React.FC = () => (
  <div className="container">
    <div className="main-box register">
      <h1 className="title">Register</h1>
      <form action="">
        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-user" />
          </span>

          <input
            className="input"
            type="text"
            required
            placeholder="Username"
          />
        </div>

        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-envelope" />
          </span>

          <input
            className="input"
            type="email"
            required
            placeholder="Email"
          />
        </div>

        <div className="input-box">
          <span className="icon">
            <i className="bx bxs-lock-alt" />
          </span>

          <input
            className="input"
            type="password"
            required
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
            I accept all terms and conditions
          </label>
        </div>

        <AuthButton text="Register" />

        <div className="link-container">
          <div className="link-container-item">
            <p>Already have an account?</p>
          </div>
          <div className="link-container-item">
            <Link to="/login" className="link">
              Login!
            </Link>
          </div>
        </div>
      </form>
    </div>

    <CloseButton redirectTo="/" event={() => {}} />
  </div>
);

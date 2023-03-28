import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthButton } from '../components/Buttons/AuthButton/AuthButton';
import { CloseButton } from '../components/Buttons/CloseButton/CloseButton';
import '../styles/LoginRegister.scss';

export const Login: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const changePasswordState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changePassword = event.target.value.trim();
    setPassword(changePassword);

    if (changePassword === '') {
      setShowPassword(false);
    }
  };

  return (
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
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value.trim())}
            />
          </div>

          <div className="input-box">
            <span className="icon">
              <i
                className={showPassword ? 'bx bx-low-vision icon__eye' : 'bx bxs-low-vision icon__eye'}
                onClick={() => password.length > 0 && setShowPassword(!showPassword)}
              />
              <i className="bx bxs-lock-alt" />
            </span>

            <input
              className="input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(event) => changePasswordState(event)}
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

      <CloseButton redirectTo="/" />
    </div>
  );
};

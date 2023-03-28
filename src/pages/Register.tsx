import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AouthError } from '../components/AouthError/AouthError';
import { AuthButton } from '../components/Buttons/AuthButton/AuthButton';
import { CloseButton } from '../components/Buttons/CloseButton/CloseButton';
import '../styles/LoginRegister.scss';

export const Register: React.FC = () => {
  const [UserName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showError, togleEror] = useState<boolean>(false);
  const [titleError, setTitleEror] = useState<string>('');
  const [messageError, setMessageEror] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const errorConfigure = (title: string, message:string) => {
    togleEror(true);
    setTitleEror(title);
    setMessageEror(message);
  };

  const handleCheckUsername = () => {
    const chekUsername:string = UserName;
    const erorTitle = 'Invalid UserName';
    const checkUserNamePatern = /^[a-zA-Z0-9_.]*$/;

    if (!checkUserNamePatern.test(chekUsername)) {
      errorConfigure(erorTitle, 'email should conrain a-z, A-Z, 0-9. "_" or "."');
    }
  };

  const handleCheckEmail = () => {
    const chekEmail:string = email;
    const erorTitle = 'Invalid Email';
    const checkLowerUpperCasePatern = /^[a-zA-Z0-9._%+-]/;
    const checkAtPatern = /^[a-zA-Z0-9._%+-]+@/;
    const checkAfterAtPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!checkLowerUpperCasePatern.test(chekEmail)) {
      errorConfigure(erorTitle, 'email should conrain a-z A-Z or 0-9');
      return;
    }

    if (!checkAtPatern.test(chekEmail)) {
      errorConfigure(erorTitle, 'email should contain @');
      return;
    }

    if (!checkAfterAtPatern.test(chekEmail)) {
      errorConfigure(erorTitle, 'email should contain gogle.com or other mail dom');
    }
  };

  const togle = () => (togleEror(false));

  const handleCheckPassword = () => {
    const checkPassword:string = password;
    const erorTitle = 'Invalid Password';
    const checkLowerCasePatern = /^[^a-z]*$/;
    const checkUpperCasePatern = /^[^A-Z]*$/;
    const checkNumbersPatern = /^[^0-9]*$/;
    const checkSumbolsPatern = /^[^@$!%*?&/]*$/;

    if (checkPassword.length < 8) {
      errorConfigure(erorTitle, 'Password should contain min 8 symbols');
      return;
    }

    if (checkPassword.length > 32) {
      errorConfigure(erorTitle, 'Password should contain max 32 symbols');
      return;
    }

    if (checkLowerCasePatern.test(checkPassword)) {
      errorConfigure(erorTitle, 'Password should contain a-z');
      return;
    }

    if (checkUpperCasePatern.test(checkPassword)) {
      errorConfigure(erorTitle, 'Password should contain A-Z');
      return;
    }

    if (checkNumbersPatern.test(checkPassword)) {
      errorConfigure(erorTitle, 'Password should contain 0-9');
      return;
    }

    if (checkSumbolsPatern.test(checkPassword)) {
      errorConfigure(erorTitle, 'Password should contain sumbol @ $ ! % * ? &');
    }
  };

  const changePasswordState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changePassword = event.target.value.trim();
    setPassword(changePassword);

    if (changePassword === '') {
      setShowPassword(false);
    }
  };

  return (
    <div className="container">
      {showError
          && <AouthError title={titleError} message={messageError} RedirectTo="/register" event={togle} /> }

      <div className="main-box register">
        <h1 className="title">Register</h1>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            handleCheckEmail();
            handleCheckPassword();
            handleCheckUsername();
          }}
        >
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-user" />
            </span>

            <input
              className="input"
              type="text"
              placeholder="Username"
              value={UserName}
              onChange={(event) => setUserName(event.target.value.trim())}
              onBlur={handleCheckUsername}
            />
          </div>

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
              onBlur={handleCheckEmail}
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

      <CloseButton redirectTo="/" />
    </div>
  );
};

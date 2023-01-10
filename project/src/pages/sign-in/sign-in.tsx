import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useRef, useState} from 'react';
import {AuthData} from '../../types/auth-data';
import {login} from '../../store/api-actions';
import {Navigate} from 'react-router-dom';

function SignIn(): JSX.Element {
  const isAuthorised = useAppSelector((state) => state.isAuthorised);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(login(authData));
  };

  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  const checkEmail = (email: string) => {
    const result = /\S+@\S+\.\S+/.test(email);
    setEmailValid(result);

    return result;
  };

  const checkPassword = (password: string) => {
    const result = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/.test(password);
    setPasswordValid(result);

    return result;
  };

  if (isAuthorised) {
    return <Navigate to='/' />;
  }

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {
            !isEmailValid &&
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>
          }
          {
            !isPasswordValid &&
            <div className="sign-in__message">
              <p>Please enter a valid password</p>
            </div>
          }
          <div className="sign-in__fields">
            <div className={`sign-in__field  ${!isEmailValid && 'sign-in__field--error'}`}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={emailRef}
                onChange={() => setEmailValid(true)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${!isPasswordValid && 'sign-in__field--error'}`}>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
                onChange={() => setPasswordValid(true)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={(evt) => {
                evt.preventDefault();
                if (emailRef.current !== null
                  && passwordRef.current !== null
                  && checkEmail(emailRef.current?.value)
                  && checkPassword(passwordRef.current?.value)) {
                  onSubmit({
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                  });
                }
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default SignIn;

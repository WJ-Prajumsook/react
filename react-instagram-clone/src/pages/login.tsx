import React, { useEffect } from 'react';
import { useState } from 'react';
import { setInterval } from 'timers';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import { Footer } from '../component/footer';
import { useContext } from 'react';
import FirebaseContext from '../context/firebase-context';

export const Login = () => {
  const [imgIndex, setImageIndex] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();

  useEffect(() => {
    var index = 1;
    const interval = setInterval(() => {
      if (index >= 5) {
        index = 1;
      }
      index++;
      setImageIndex(index);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // firebase authentication here
      await firebase.auth().signInWithEmailAndPassword(username, password);
      history.push('/');
    } catch (error: any) {
      setUsername('');
      setPassword('');
      setError(error.message);
    }
  }

  return (
    <div className="container-fluid">
      <div className="login-container">
        <div className="login-content">
          <div className="left-container me-4">
            <div className="left-content">
              <img className={(imgIndex === 1) ? "active" : "inactive"} src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg" alt="" />
              <img className={(imgIndex === 2) ? "active" : "inactive"} src="https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg" alt="" />
              <img className={(imgIndex === 3) ? "active" : "inactive"} src="https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg" alt="" />
              <img className={(imgIndex === 4) ? "active" : "inactive"} src="https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg" alt="" />
              <img className={(imgIndex === 5) ? "active" : "inactive"} src="https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg" alt="" />
            </div>
          </div>
          <div className="right-container">
            <div className="form-box mb-2">
              <div className="logo"></div>
              <form onSubmit={handleLogin} method="POST">
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number, username, or email"
                    onChange={({ target }) => setUsername(target.value)}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block w-100 mb-3 mt-3">Log In</button>
              </form>
              <p className="or">OR</p>
              <div className="login-with-facebook">
                <Link to="/login">
                  <i className="fab fa-facebook-square me-2"></i>Log in with Facebook
                </Link>
              </div>
              {
                error && <div className="error m-2">
                  <p>{error}</p>
                </div>
              }
              <div className="forgotten-password mt-2">
                <Link to="/login">
                  Forgotten your password?
                </Link>
              </div>
            </div>
            <div className="form-box">
              <div className="signup-link">
                <p>Don't have an account?
                  <Link to="/signup" className="ms-2">Sign up</Link>
                </p>
              </div>
            </div>
            <div className="get-app">
              <p>Get the app.</p>
            </div>
            <div className="row get-the-app">
              <div className="text-center">
                <img className="me-2" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
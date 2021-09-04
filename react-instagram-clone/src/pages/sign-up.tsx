import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Footer } from '../component/footer';
import FirebaseContext from '../context/firebase-context';
import './sign-up.css';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [error, setError] = useState('');

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // create user
      const createdUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // add user detail to firestore database
      const userDetail = {
        userId: createdUser.user.uid,
        username: username.toLowerCase(),
        fullName: fullName,
        email: email,
        created: Date.now()
      };
      await firebase.firestore()
        .collection('users')
        .add(userDetail);

      // redirect to home
      history.push('/');
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <div className="container-fluid">
      <div className="login-container">
        <div className="login-content d-flex flex-column">
          <div className="signup-content bg-white border">
            <div className="logo" />
            <div className="fw-bold text-center text-secondary">
              Sign up to see photos and videos from your friends.
            </div>
            <button className="btn btn-primary mt-3">
              <i className="fab fa-facebook-square me-2"></i>Log in with Facebook
            </button>
            <p className="or mt-2 mb-2">OR</p>
            <form onSubmit={handleSignup} method="POST">
              <div className="form-group mb-2">
                <input type="text"
                  className="form-control"
                  placeholder="Mobile number or email address"
                  onChange={({ target }) => setEmail(target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <input type="text"
                  className="form-control"
                  placeholder="Full name"
                  onChange={({ target }) => setFullName(target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <input type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={({ target }) => setUsername(target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <input type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block w-100 mb-3 mt-2">Next</button>
              {
                error && <div className="error mt-2">
                  <p>{error}</p>
                </div>
              }
            </form>
            <div className="text-center text-secondary terms-text mb-4">
              By signing up, you agree to our <strong>Terms</strong>. Learn how we collect, use and share your data in our <strong>Data Policy</strong>, and how we use cookies and similar technology in our <strong>Cookie Policy</strong>.
            </div>
          </div>
          <div className="signup-content bg-white border mt-3">
            <div className="signup-link">
              <p>Hava an account?
                <Link to="/login" className="ms-2">Log in</Link>
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
      <Footer />
    </div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';

const outerLoginContainer = {
  width: '1080px',
  height: '600px',
  margin: '150px auto 0px auto',
  display: 'flex',
  flexDirection: 'row',
  boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
};

const mainLoginContainer = {
  width: '50%',
  textAlign: 'center',
  marginTop: '120px',
};

const loginImageContainer = {
  width: '50%',
  textAlign: 'center',
};

const loginButtonContainer = {
  marginTop: '75px',
};

const signInButton = {
  marginRight: '60px',
};

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div id="outer-login-container">
        <div id="main-login-container">
          {/* Using h1 tag as a substitue for logo */}
          <h1>inployd</h1>
          <h4>A better way to find professionals</h4>
          <div id="login-button-container">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
        <div id="login-image-container">
          <span>Image container</span>
        </div>
      </div>
    </>
  );
}

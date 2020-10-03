import React from 'react';
import { Helmet } from 'react-helmet-async';
import css from './HomePage.scss';
import { Button } from 'semantic-ui-react';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="outerLoginContainer">
        <div className="mainLoginContainer">
          <h1>inployd</h1>
          <h4>A better way to work</h4>
          <div className="loginButtonContainer">
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
        <div className={css.loginImageContainer}>
          <span>Image container</span>
        </div>
      </div>
    </>
  );
}

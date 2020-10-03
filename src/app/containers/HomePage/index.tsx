import React from 'react';
import { Helmet } from 'react-helmet-async';
import css from './HomePage.scss';
import { Button } from 'semantic-ui-react';
import { DiscoverBlock } from './components/DiscoverBlock';
// import { ProfilePlaceholder } from './components/ProfilePlaceholder';

export function HomePage() {
  let dummyText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Vulputate dignissim suspendisse in est ante in. Odio aenean sed adipiscing diam donec adipiscing tristique. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Euismod lacinia at quis risus sed vulputate. Mauris vitae ultricies leo integer. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Elementum nibh tellus molestie nunc non blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Amet consectetur adipiscing elit duis tristique sollicitudin. Quis auctor elit sed vulputate. Lorem ipsum dolor sit amet consectetur adipiscing. Congue nisi vitae suscipit tellus mauris. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Pharetra et ultrices neque ornare aenean euismod. Et netus et malesuada fames ac turpis egestas sed. Dolor morbi non arcu risus quis varius quam quisque id.....';

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

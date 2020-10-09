/**
 *
 * SplashPage
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Button, Divider, Form } from 'semantic-ui-react';
import { Footer } from '../../components/Footer';

import { useInjectSaga } from 'utils/redux-injectors';
import { splashPageSaga } from './saga';

interface Props {}

export function SplashPage(props: Props) {
  // useInjectSaga({ key: 'splashPage', saga: splashPageSaga });

  return (
    <>
      <Header>
        <Logo src="black_inployd.png" alt="none" />
      </Header>
      <Body>
        <InnerBody>
          <LoginBox>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input placeholder="name@example.com" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="" />
              </Form.Field>
              <Button
                primary
                color="blue"
                style={{ width: '100%', margin: '10px 0' }}
              >
                Sign In
              </Button>
            </Form>
            <Divider horizontal style={{ textTransform: 'lowercase' }}>
              don't have an account?
            </Divider>
            <Button
              positive
              color="green"
              style={{ width: '100%', margin: '10px 0' }}
            >
              Create Account
            </Button>
          </LoginBox>
          <ImageBox></ImageBox>
        </InnerBody>
      </Body>
      <Footer />
    </>
  );
}

const Header = styled.div`
  padding: 13px 170px;
  height: 90px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.075);
`;

const Logo = styled.img`
  height: 70px;
  width: 157px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Body = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
`;

const InnerBody = styled.div`
  width: 710px;
  height: 400px;
  margin: 4.5% auto;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  display: flex;
`;

const LoginBox = styled.div`
  width: 50%;
  padding: 40px;
`;

const ImageBox = styled.div`
  width: 50%;
  padding: 25px;
  background-color: black;
`;

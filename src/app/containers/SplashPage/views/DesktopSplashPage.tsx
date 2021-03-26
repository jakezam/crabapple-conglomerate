import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ButtonContainer,
  Container,
  Content,
  FormBox,
  ImageBox,
} from '../components/StyledComponents';
import { mobileMediaParameters } from '../../../../utils/env.config';
import { useMediaQuery } from 'react-responsive';
import { Button, Divider, Form } from 'semantic-ui-react';
import { push } from 'connected-react-router';

export const DesktopSplashPage = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(mobileMediaParameters);

  return (
    <Container>
      <Header />

      <Content>
        <FormBox>
          <Form>
            <Form.Field style={{ paddingRight: '1em' }}>
              <label>Username</label>
              <input placeholder="name@example.com" />
            </Form.Field>
            <Form.Field style={{ paddingRight: '1em' }}>
              <label>Password</label>
              <input placeholder="**************" />
            </Form.Field>

            <ButtonContainer>
              <Button primary color="blue" style={{ width: '80%' }}>
                Sign In
              </Button>
            </ButtonContainer>
          </Form>

          <Divider horizontal style={{ textTransform: 'lowercase' }}>
            {"don't have an account?"}
          </Divider>

          <ButtonContainer>
            <Button
              style={{ width: '80%' }}
              positive
              color="green"
              onClick={() => {
                dispatch(push('/signup'));
              }}
            >
              Create Account
            </Button>
          </ButtonContainer>
        </FormBox>

        {!isMobile && <ImageBox />}
      </Content>

      <Footer />
    </Container>
  );
};

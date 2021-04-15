import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ButtonContainer,
  Container,
  Content,
  FormBox,
  ImageBox,
} from './components/StyledComponents';
import { useMediaQuery } from 'react-responsive';
import { Button, Divider, Form } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import { mobileMediaParameters } from '../../../utils/env.config';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useHistory } from 'react-router-dom';

export const SplashPage = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
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
              <Button
                primary
                color="blue"
                style={{ width: '80%' }}
                onClick={(e, { name }) => {
                  dispatch(
                    push('/profile/628c1d1a-c115-43ed-7535-08d8ffb79d0d'),
                  );
                }}
              >
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

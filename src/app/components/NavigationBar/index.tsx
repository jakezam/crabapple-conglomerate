import { Button, Menu, Popup, Search } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useMediaQuery } from 'react-responsive';
import { smallerDesktopMediaParameters } from '../../../utils/env.config';
import { Logo, ProfilePic } from './components/StyledComponents';

export function NavigationBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isSmaller = useMediaQuery(smallerDesktopMediaParameters);

  let currActive = history.location.pathname.substring(1);

  // Set highlighted button
  let slashIndex = currActive.indexOf('/');
  if (slashIndex >= 0) {
    currActive = currActive.substring(0, slashIndex);
  }

  const [activeItem, setActive] = React.useState(currActive);
  let popupTrigger = (
    <ProfilePic src={process.env.PUBLIC_URL + '/logo512.png'} alt="none" />
  );

  return (
    <Content>
      <StyledMenu secondary>
        <LeftContent>
          <Logo
            src={process.env.PUBLIC_URL + '/inployd_logo_v2.PNG'}
            alt="none"
          />
          <Menu.Item
            name={isSmaller ? '' : 'Discover'}
            icon={'map'}
            active={activeItem === 'discover'}
            onClick={(e, { name }) => {
              setActive('discover');
              dispatch(push('/discover'));
            }}
          />
          <Menu.Item
            name={isSmaller ? '' : 'Consultations'}
            icon={'address card'}
            active={activeItem === 'consultations'}
            onClick={(e, { name }) => {
              dispatch(push('/consultations'));
            }}
          />
          <Menu.Item
            name={isSmaller ? '' : 'My Profile'}
            icon={'user'}
            active={activeItem === 'profile'}
            onClick={(e, { name }) => {
              setActive('profile');
              dispatch(push('/profile/ac784650-a769-40a1-8a67-08d8ce2fd834'));
            }}
          />
        </LeftContent>
        <RightContent>
          {!isSmaller && <Search size={'mini'} />}
          <Popup trigger={popupTrigger} flowing hoverable>
            <Button basic color="red">
              Logout
            </Button>
            <Button basic>Settings</Button>
          </Popup>
        </RightContent>
      </StyledMenu>
    </Content>
  );
}

const StyledMenu = styled(Menu)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 10px;
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 8%);

  // DEBUG STYLES //
  //border: 5px solid green;
`;

const Content = styled.div`
  max-width: 2000px;
  display: flex;
  flex: 0;
  margin-bottom: 5px;
  //border-bottom: black 1px solid;
  //background-color: aquamarine;

  // DEBUG STYLES //
  //border: 5px solid orange;
`;

const LeftContent = styled.div`
  padding-left: 2em;

  display: flex;
  flex: 1 1;
  justify-content: flex-start;
  align-items: center;

  // DEBUG STYLES //
  //border: 5px solid green;
`;

const RightContent = styled.div`
  padding-right: 2em;

  display: flex;
  flex: 1 1;
  justify-content: flex-end;
  align-items: center;

  // DEBUG STYLES //
  //border: 5px solid purple;
`;

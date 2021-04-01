import styled from 'styled-components/macro';

export const Body = styled.div`
  margin-left: 1%;
  margin-right: 1%;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.075);
  background-color: #f0f9ff;

  // DEBUG STYLES //
  //border: 5px solid red;
`;

export const ProfilePic = styled.img`
  margin-left: 2em;
  width: 43px;
  height: 43px;

  border: 2.5px white solid;
  border-radius: 6px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.045), 0 2px 4px 0 rgba(0, 0, 0, 0.045);
  color: #white;

  // DEBUG STYLES //
  //border: 5px solid red;
`;

export const Logo = styled.img`
  height: 56px;
  width: 104px;

  // DEBUG STYLES //
  //border: 5px solid red;
`;

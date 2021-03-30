import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;

  // DEBUG STYLES //
  //border: solid 5px green;
`;

export const Content = styled.div`
  display: flex;
  flex: 100;
  justify-content: center;
  align-items: center;

  // DEBUG STYLES //
  //border: solid 5px purple;
`;

export const ImageBox = styled.div`
  height: min(280px, 30vw);
  width: min(280px, 30vw);

  background-color: black;

  // DEBUG STYLES //
  //border: solid 5px purple;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  // DEBUG STYLES //
  //border: solid 5px purple;
`;

export const FormBox = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // DEBUG STYLES //
  //border: solid 5px purple;
`;

/**
 *
 * Footer
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectFooter } from './selectors';
import { footerSaga } from './saga';

interface Props {}

export function Footer(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: footerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const footer = useSelector(selectFooter);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const STYLE = {
    footerBackground: {
      backgroundColor: 'gray',
      flex: 1,
    },
  };
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="semantic/dist/semantic.min.css"
      />
      <footer style={STYLE.footerBackground}>
        <div className="ui vertical footer segment">
          Stuff to go in the footer
        </div>
      </footer>
    </>
  );
}

const Div = styled.div``;

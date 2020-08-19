/**
 *
 * Discover
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDiscover } from './selectors';
import { discoverSaga } from './saga';

interface Props {}

export function Discover(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: discoverSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const discover = useSelector(selectDiscover);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
    </>
  );
}

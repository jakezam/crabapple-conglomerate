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
import { Input } from 'semantic-ui-react';

import './Discover.scss';

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
      <div className="discoverPageContainer">
        <div className="discover-leftHalf">
          <Input
            className="discover-searchBox"
            icon="search"
            placeholder="Search Companies"
          />

          <div className="discover-suggested discoverAfterBox discoverBox"></div>
          <div className="discover-byCategory discoverAfterBox discoverBox"></div>
          <div className="discover-suggested discoverAfterBox discoverBox"></div>
        </div>
        <div className="discover-rightHalf">
          <div className="discover-suggestedBox discoverBox"></div>
          <div className="discover-suggestedBox discoverAfterBox discoverBox"></div>
        </div>
      </div>
    </>
  );
}

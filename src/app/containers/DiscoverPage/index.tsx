/**
 *
 * DiscoverPage
 *
 */

import React from 'react';
import { Input } from 'semantic-ui-react';
import { NavigationBar } from '../../components/NavigationBar';
import './Discover.scss';

export function DiscoverPage() {
  return (
    <div>
      <NavigationBar />
      <div className="discoverPageContainer">
        <div className="discover-leftHalf">
          <Input
            className="discover-searchBox"
            icon="search"
            placeholder="Search Companies"
          />

          <div className="discover-suggested discoverAfterBox discoverBox" />
          <div className="discover-byCategory discoverAfterBox discoverBox" />
          <div className="discover-suggested discoverAfterBox discoverBox" />
        </div>
        <div className="discover-rightHalf">
          <div className="discover-suggestedBox discoverBox" />
          <div className="discover-suggestedBox discoverAfterBox discoverBox" />
        </div>
      </div>
    </div>
  );
}

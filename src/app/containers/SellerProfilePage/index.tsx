/**
 *
 * SellerProfilePage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './utils/slice';
import { selectSellerProfilePage } from './utils/selectors';
import { sellerProfilePageSaga } from './utils/saga';
import './SellerProfilePage.scss';
import { ProfileInfoBox } from './components/ProfileInfoBox';
import { SuggestedAccount } from '../../components/SuggestedAccount/Loadable';
import { SuggestedUser } from '../../components/SuggestedUser/Loadable';
// import { Grid } from 'semantic-ui-react';

interface Props {}

export function SellerProfilePage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: sellerProfilePageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sellerProfilePage = useSelector(selectSellerProfilePage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>SellerProfilePage</title>
        <meta name="description" content="Description of SellerProfilePage" />
      </Helmet>
      <div className="profileContainer">
        <div className="leftHalf">
          <div className="profileInfo">
            <ProfileInfoBox />
          </div>
          <div className="aboutContainer">
            <h2>About</h2>
            <p>
              We are a blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah
            </p>
            <h3>Services and Packages:</h3>
            <p>
              We offer blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah
            </p>
            <h3>Pricing Options:</h3>
            <p>
              Our services blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah
            </p>
            <h3>Target Locations:</h3>
            <p>
              We generally blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah
            </p>
          </div>
          <div className="porfolioContainer">Portfolio</div>
          <div className="reviewContainer">Reviews</div>
          <div className="recentPostContainer">Recent Posts</div>
        </div>
        <div className="rightHalf">
          <div className="otherCategoryProfiles">
            <h4>Other Landscapers in your area:</h4>
            <SuggestedAccount
              username="Smith Landscaping"
              reviewCount={0}
              rating={0.0}
            />
            <SuggestedAccount
              username="Juan Landscaping"
              reviewCount={0}
              rating={0.0}
            />
            <SuggestedAccount
              username="Mendez Landscaping"
              reviewCount={0}
              rating={0.0}
            />
          </div>
          <div className="previousJobs">
            <h4>Previous Jobs:</h4>
            <SuggestedUser fullName="Jacob Zamani" username="jaike_z23" />
            <SuggestedUser fullName="Thomas Arturi" username="teetle" />
            <SuggestedUser fullName="Emily Giovannone" username="emiwemi21" />
            <SuggestedUser fullName="Kevin Lee" username="kobomi" />
          </div>
          <div className="followingContainer">
            <h4>Following:</h4>
            <SuggestedUser fullName="Chris Faxon" username="faxmachine978" />
            <SuggestedUser fullName="Grace Vocalina" username="graciee0014" />
            <SuggestedAccount
              username="Joe's Contracting"
              reviewCount={0}
              rating={0.0}
            />
            <SuggestedUser fullName="Nick Arnold" username="echosoldier2000" />
          </div>
        </div>
      </div>
    </>
  );
}

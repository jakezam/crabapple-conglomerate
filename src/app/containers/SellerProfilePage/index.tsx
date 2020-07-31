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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis lectus magna fringilla urna. Facilisis mauris sit amet
              massa vitae. Purus in mollis nunc sed id semper risus in. Arcu
              cursus euismod quis viverra nibh cras.
            </p>
            <h3>Services and Packages:</h3>
            <p>
              Nullam vehicula ipsum a arcu. Id aliquet lectus proin nibh nisl.
              Interdum posuere lorem ipsum dolor. Odio aenean sed adipiscing
              diam donec adipiscing tristique risus. Nunc consequat interdum
              varius sit amet mattis vulputate enim. Commodo ullamcorper a lacus
              vestibulum sed arcu.
            </p>
            <h3>Pricing Options:</h3>
            <p>
              Quam pellentesque nec nam aliquam sem et. Nec ullamcorper sit amet
              risus. Ut enim blandit volutpat maecenas volutpat. Proin fermentum
              leo vel orci porta non pulvinar neque.
            </p>
            <h3>Target Locations:</h3>
            <p>
              Pharetra sit amet aliquam id diam maecenas ultricies. Morbi tempus
              iaculis urna id volutpat lacus. Non odio euismod lacinia at quis
              risus sed vulputate.
            </p>
          </div>
          <div className="reviewContainer">
            <h2>Ratings and Reviews</h2>
          </div>
          <div className="recentActivityContainer">
            <h2>Recent Activity</h2>
          </div>
          <div className="porfolioContainer">
            <h2>Portfolio</h2>
          </div>
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

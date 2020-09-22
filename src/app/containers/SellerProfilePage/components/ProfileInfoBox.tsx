import React from 'react';
// import '../SellerProfilePage.scss';
import './ProfileInfoBox.scss';
import { Button, Grid, Dropdown, Menu } from 'semantic-ui-react';

interface Props {}

export function ProfileInfoBox(props: Props) {
  return (
    <div>
      <div className="headerTag">
        <h1>Landscaping</h1>
      </div>
      <Grid className="profileGrid">
        <Grid.Row>
          <Grid.Column width={4}>
            <div className="profileImageContainer">
              <img src="logo512.png" alt="none"></img>
            </div>
          </Grid.Column>
          <Grid.Column width={8} className="nameAndReviews">
            <h1>Alejandro's Landscaping Co.</h1>
            <h3 className="followerCount">69 followers</h3>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button className="followBtn">Follow</Button>
            <Button className="sendRequestBtn">Send Job Request</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="midRow">
          <Grid.Column width={6}>
            <h3 className="reviews">Reviews (0)</h3>
          </Grid.Column>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column width={5}>
            <Menu vertical className="subcategories">
              <Dropdown item text="Subcategories">
                <Dropdown.Menu>
                  <Dropdown.Item>Subcategory 1</Dropdown.Item>
                  <Dropdown.Item>Subcategory 2</Dropdown.Item>
                  <Dropdown.Item>Subcategory 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="bottomRow">
          <Grid.Column width={6}>
            <h3 className="location">
              Shelton, CT (<em>40 miles away</em>)
            </h3>
          </Grid.Column>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column width={5}>
            <h4>https://www.website.com</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
// import { Helmet } from 'react-helmet-async';
// import { useSelector, useDispatch } from 'react-redux';
// import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
// import { reducer, sliceKey } from '../utils/slice';
// import { selectSellerProfilePage } from '../utils/selectors';
// import { sellerProfilePageSaga } from '../utils/saga';

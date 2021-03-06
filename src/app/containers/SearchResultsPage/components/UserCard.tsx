/**
 *
 * RecommendedAccount
 *
 */

import React from 'react';
import styled from 'styled-components/macro';
import { Grid, Rating, Table } from 'semantic-ui-react';
import { SmallAccount } from '../../../../store/Discover/types';

import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

interface Props {
  key: number;
  user: SmallAccount;
}

export function UserCard(props: Props) {
  const dispatch = useDispatch();
  let userData = props.user;
  let isProvider = userData.isProvider;
  let providerData = userData.providerData;

  let cardTitle = (
    <>
      <h4
        style={{
          textAlign: 'left',
          paddingTop: '5px',
          paddingLeft: '2px',
          marginBottom: '7px',
        }}
      >
        {userData.username}
      </h4>
    </>
  );

  let rating = <></>;
  let location = <></>;
  let border = <></>;
  let category = <></>;
  let skillsTab = <></>;

  if (isProvider) {
    rating = (
      <>
        <Rating
          style={{ marginBottom: '5px' }}
          rating={providerData.rating}
          maxRating={5}
          disabled
          size="small"
        />
      </>
    );

    location = (
      <>
        <h5
          style={{
            textAlign: 'left',
            marginTop: '0',
            paddingLeft: '2px',
            fontSize: '12px',
          }}
        >
          {providerData.location}
        </h5>
      </>
    );

    border = (
      <>
        <div
          style={{
            width: '100%',
            borderTop: '1px solid #d7d7d7',
            margin: '0 15px',
          }}
        ></div>
      </>
    );

    category = (
      <>
        <h4
          style={{
            textAlign: 'left',
            paddingTop: '5px',
            paddingLeft: '2px',
            marginBottom: '7px',
          }}
        >
          {providerData.category}
        </h4>
      </>
    );

    let endIndex = Math.min(providerData.skills.length, 2);
    let reducedSkills = providerData.skills.slice(0, endIndex);
    // @ts-ignore
    skillsTab = reducedSkills.map(skill => (
      <Table.Row>
        <Table.Cell>{skill.name}</Table.Cell>
        <Table.Cell>{skill.rate}</Table.Cell>
      </Table.Row>
    ));
  }

  return (
    <Body>
      <CardContainer>
        <div
          onClick={() => {
            dispatch(push('/profile/' + userData.userId));
          }}
        >
          <Grid style={{ padding: '10px' }}>
            <Grid.Row style={{ paddingTop: '20px', minHeight: '105px' }}>
              <Grid.Column style={{ paddingLeft: '20px' }} width={6}>
                <ImageContainer>
                  <img
                    src="https://react.semantic-ui.com/images/avatar/large/matt.jpg"
                    alt="none"
                    style={{ width: '100%' }}
                  />
                </ImageContainer>
              </Grid.Column>
              <Grid.Column style={{ paddingLeft: '1px' }} width={10}>
                {cardTitle}
                {rating}
                {location}
              </Grid.Column>
            </Grid.Row>
            {border}
            <Grid.Row style={{ padding: '9px 15px 20px 15px' }}>
              {category}
              <Table celled style={{ marginTop: '2px' }}>
                <Table.Body>{skillsTab}</Table.Body>
              </Table>
            </Grid.Row>
          </Grid>
        </div>
      </CardContainer>
    </Body>
  );
}

const Body = styled.div``;

const CardContainer = styled.div`
  width: 250px;
  min-height: 240px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
  cursor: pointer;
  float: left;
  margin-left: 100px;
  margin-top: 50px;
`;

const ImageContainer = styled.div`
  border: 1px solid white;
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
`;

/**
 *
 * RecommendedAccount
 *
 */

import React from 'react';
import styled from 'styled-components/macro';
import { Grid, Rating, Table } from 'semantic-ui-react';

export function UserCard(props) {
  return (
    <Body>
      <CardContainer>
        <Grid style={{ padding: '10px' }}>
          <Grid.Row style={{ paddingTop: '20px', minHeight: '125px' }}>
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
              <h4
                style={{
                  textAlign: 'left',
                  paddingTop: '5px',
                  paddingLeft: '2px',
                  marginBottom: '7px',
                }}
              >
                Jordans Contracting
              </h4>
              <Rating
                style={{ marginBottom: '5px' }}
                rating={4}
                maxRating={5}
                disabled
                size="small"
              />
              <h5
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  paddingLeft: '2px',
                  fontSize: '12px',
                }}
              >
                Shelton, CT
              </h5>
            </Grid.Column>
          </Grid.Row>
          <div
            style={{
              width: '100%',
              borderTop: '1px solid #d7d7d7',
              margin: '0 15px',
            }}
          ></div>
          <Grid.Row style={{ padding: '20px 15px' }}>
            <Table celled>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Kitchens</Table.Cell>
                  <Table.Cell>N/A</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Bathrooms</Table.Cell>
                  <Table.Cell>N/A</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
      </CardContainer>
    </Body>
  );
}

const Body = styled.div``;

const CardContainer = styled.div`
  width: 250px;
  min-height: 250px;
  margin-top: 50px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  border: 1px solid white;
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
`;

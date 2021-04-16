import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Dropdown, Grid, Pagination, Table } from 'semantic-ui-react';
import { ProviderAddition } from 'store/ViewedUser/types';

interface IProps {
  data: ProviderAddition;
}

export function AboutBox(props: IProps) {
  const { data } = props;
  let text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet faucibus metus. Nunc vel ligula luctus, iaculis metus a, volutpat nibh. Maecenas fermentum turpis purus, ac commodo nibh hendrerit ac. Maecenas in maximus diam. Sed vulputate orci mauris, eu ultricies eros convallis et. Vestibulum semper purus eu purus euismod, ac accu';

  let notApplicable = 'N/A';
  let tableBody = data.subcategories.map(subcategory => (
    <Table.Row>
      <Table.Cell singleLine>{subcategory.subcategory}</Table.Cell>
      <Table.Cell singleLine>
        {subcategory.hourlyRate < 0 ? notApplicable : subcategory.hourlyRate}
      </Table.Cell>
      <Table.Cell singleLine>
        {subcategory.flatRate < 0 ? notApplicable : subcategory.flatRate}
      </Table.Cell>
      <Table.Cell singleLine>
        {subcategory.consultationFees < 0
          ? notApplicable
          : subcategory.consultationFees}
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Body>
      <Header>About</Header>
      <AboutText>{text}</AboutText>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Project Type</Table.HeaderCell>
            <Table.HeaderCell singleLine>Hourly Rates</Table.HeaderCell>
            <Table.HeaderCell singleLine>Flat Rates</Table.HeaderCell>
            <Table.HeaderCell singleLine>Consultation Fees</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{tableBody}</Table.Body>
      </Table>
    </Body>
  );
}

const Body = styled.div`
  width: 730px;
  padding: 2rem;
  min-height: 150px;
  margin-top: 25px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const Header = styled.h3`
  padding: 2px 0;
`;

const AboutText = styled.p`
  padding-bottom: 25px;
`;

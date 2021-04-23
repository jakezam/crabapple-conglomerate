import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button, Grid, Header, Message } from 'semantic-ui-react';
import { ModificationForm } from './ModificationForm';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import 'tui-calendar/dist/tui-calendar.css';
import { jobPageShrink } from '../../../../utils/env.config';
import { useMediaQuery } from 'react-responsive';

export function JobPane(props) {
  const { job } = props;
  const isSmaller = useMediaQuery(jobPageShrink);
  const [calendarVisible, setCalendarVisible] = useState(false);

  let dateMessage = 'Planned For:';
  if (job.isOngoing) {
    dateMessage = 'Began On:';
  }

  let header = <div />;
  let footer = <div />;
  if (job.isAccepted) {
    footer = (
      <>
        <Grid.Row style={{ paddingTop: '50px' }}>
          <Grid.Column width={7}>
            <ModificationForm job={job} />
          </Grid.Column>
          <Grid.Column floated="left" width={9}>
            <Button color="green" size="small">
              COMPLETE JOB
            </Button>
            <Button color="red" size="small">
              CANCEL JOB
            </Button>
          </Grid.Column>
        </Grid.Row>
      </>
    );

    if (job.wasModified) {
      header = (
        <>
          <Grid.Row>
            <Grid.Column floated="left" width={16} style={{ paddingLeft: '0' }}>
              <Message warning>
                <p>Job was modified</p>
              </Message>
            </Grid.Column>
          </Grid.Row>
        </>
      );
    }
  } else {
    if (job.isProviding || (!job.isProviding && job.wasModified)) {
      header = (
        <>
          <Grid.Row style={{ paddingBottom: '50px' }}>
            <Grid.Column width={5}>
              <ModificationForm job={job} />
            </Grid.Column>
            <Grid.Column floated="left" width={11}>
              <Button color="green" size="small">
                ACCEPT JOB
              </Button>
              <Button color="red" size="small">
                REJECT JOB
              </Button>
            </Grid.Column>
          </Grid.Row>
        </>
      );
    } else {
      header = (
        <>
          <Grid.Row style={{ paddingBottom: '50px' }}>
            <Grid.Column width={6}>
              <h3>Pending...</h3>
            </Grid.Column>
            <Grid.Column width={10}>
              <Button primary size="small">
                MODIFY JOB
              </Button>
              <Button color="red" size="small">
                CANCEL REQUEST
              </Button>
            </Grid.Column>
          </Grid.Row>
        </>
      );
    }
  }

  let jobInfo = (
    <Grid style={{ marginTop: '2rem', marginLeft: '0' }}>
      {header}
      <Grid.Row>
        <Grid.Column width={4}>
          <h4>Working with:</h4>
        </Grid.Column>
        <Grid.Column width={12} style={{ display: 'flex' }}>
          <p style={{ fontSize: '15px' }}>{job.username}</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <h4>Working On:</h4>
        </Grid.Column>
        <Grid.Column width={12} style={{ display: 'flex' }}>
          <p style={{ fontSize: '15px' }}>{job.jobTitle}</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <h4>{dateMessage}</h4>
        </Grid.Column>
        <Grid.Column width={12} style={{ display: 'flex' }}>
          <p style={{ fontSize: '15px' }}>{job.beginDate}</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <h4>Phone Number:</h4>
        </Grid.Column>
        <Grid.Column width={12} style={{ display: 'flex' }}>
          <p style={{ fontSize: '15px' }}>{job.phoneNumber}</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <h4>Email Address:</h4>
        </Grid.Column>
        <Grid.Column width={12} style={{ display: 'flex' }}>
          <p style={{ fontSize: '15px' }}>{job.emailAddress}</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: '0' }}>
        <Grid.Column width={10} style={{ display: 'flex' }}>
          <h4>A little more about the job:</h4>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <p
          style={{
            fontSize: '13px',
            paddingLeft: '15px',
            paddingRight: '45px',
          }}
        >
          {job.jobDescription}
        </p>
      </Grid.Row>
      {footer}
    </Grid>
  );

  return (
    <Body isSmaller={isSmaller}>
      <InfoBody>
        <Header as="h3" icon="info circle" content="Job Information" block />
        {jobInfo}
      </InfoBody>
    </Body>
  );
}

interface IsSmaller {
  isSmaller: boolean;
}

const Body = styled.div<IsSmaller>`
  display: flex;
  flex: 1;
  flex-direction: column;

  // DEBUG STYLES //
  //border: 5px green solid;
`;

const InfoBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  //width: 50%;
  height: 100%;
  padding: 15px;
  // border-right: 1px solid #d7d7d7;
`;

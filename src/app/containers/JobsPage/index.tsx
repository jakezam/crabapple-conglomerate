/**
 *
 * JobsPage
 *
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { selectJobs } from '../../../store/Jobs/selectors';
import { Tab } from 'semantic-ui-react';
import { NavigationBar } from '../../components/NavigationBar';
import { Footer } from '../../components/Footer';
import { JobPane } from './components/JobPane';
import { useMediaQuery } from 'react-responsive';
import {
  jobPageShrink,
  smallerDesktopMediaParameters,
} from '../../../utils/env.config';

export function JobsPage() {
  const dispatch = useDispatch();
  const jobState = useSelector(selectJobs);
  const isSmaller = useMediaQuery(jobPageShrink);

  let panes = Array<{
    menuItem: { key: string; icon: string; content: string };
    render: () => JSX.Element;
  }>();
  jobState.jobs.forEach(job => {
    let iconName = '';

    if ((!job.isAccepted && job.isProviding) || job.wasModified) {
      iconName = 'exclamation circle';
    }

    let nextPane = {
      menuItem: { key: job.username, icon: iconName, content: job.username },
      render: () => (
        <Tab.Pane>
          <JobPane job={job} />
        </Tab.Pane>
      ),
    };

    panes.push(nextPane);
  });

  return (
    <>
      <NavigationBar />
      <Body>
        <StyledTab
          menu={{ fluid: true, vertical: !isSmaller, tabular: true }}
          panes={panes}
        />
      </Body>
      <Footer />
    </>
  );
}

const StyledTab = styled(Tab)`
  margin: auto;
  max-width: 2000px;
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  // DEBUG STYLES //
  border: 5px solid red;
`;

const Body = styled.div`
  display: flex;
  flex: 1;

  // DEBUG STYLES //
  border: 5px solid purple;
`;

/**
 *
 * JobsPage
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { selectJobs } from '../../../store/Jobs/selectors';
import { actions as vUActions } from '../../../store/Jobs/slice';

import { Tab } from 'semantic-ui-react';
import { NavigationBar } from '../../components/NavigationBar';
import { Footer } from '../../components/Footer';
import { JobPane } from './components/JobPane';

interface Props {}

export function JobsPage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const jobState = useSelector(selectJobs);

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
        <Tab.Pane style={{ minHeight: '600px' }}>
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
        <Tab
          menu={{ fluid: true, vertical: true, tabular: true }}
          panes={panes}
        />
      </Body>
      <Footer />
    </>
  );
}

const Body = styled.div`
  padding: 75px 100px 100px 100px;
`;

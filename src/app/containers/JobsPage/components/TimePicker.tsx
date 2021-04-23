import Calendar from '@toast-ui/react-calendar';
import React, { useRef, useState } from 'react';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import 'tui-calendar/dist/tui-calendar.css';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'semantic-ui-react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobId, selectJobs } from '../../../../store/Jobs/selectors';
import { actions as jobActions } from 'store/Jobs/slice';

// Calendar Default Options //
const mobileWeekOptions = {
  daynames: ['', '', '', '', '', '', ''],
};

const weekOptions = {};

//////////////////////////////

interface IProps {
  setModalOpen: any;
}

export const TimePicker = ({ setModalOpen }: IProps) => {
  const calRef = useRef(null);
  const jobsState = useSelector(selectJobs);
  const selectedJobId = useSelector(selectJobId);
  const dispatch = useDispatch();
  const [currentView, setCurrentView] = useState('week');
  const [calTypeOpen, setCalTypeOpen] = useState(false);
  // const [jobTimes, setJobTimes] = useState<Array<any>>([]);

  let times: Array<any> = [];
  jobsState.jobs[selectedJobId].suggestedTimes.forEach(jobTimes => {
    times.push({
      id: jobTimes.id,
      calendarId: '0',
      title: 'Suggested Job Time!',
      isAllDay: false,
      start: new Date(jobTimes.beginTime),
      end: new Date(jobTimes.endTime),
      category: 'time',
      dueDateClass: '',
      bgColor: 'lightblue',
    });

    console.log('JOB TIMES: ', jobTimes);
  });

  console.log('DATES: ', times);

  // setJobTimes([...jobTimes, times]);
  // @ts-ignore
  // calRef.current.calendarInst.createSchedules([times]);

  const toggleCalType = prevState => {
    setCalTypeOpen(!calTypeOpen);
  };

  // Template Functions //
  const onClickSchedule = e => {
    const { calendarId, id } = e.schedule;

    // @ts-ignore
    const event = calRef.current.calendarInst.getElement(id, calendarId);
  };

  /* After all schedules are rendered
     on the calendar run this function.
     which saves the schedule details
     to store. */
  const onAfterRenderSchedule = e => {
    // TODO: This is being called twice for some reason
    // TODO: Block the user from trying to create another appt, if they do it loops infinitely
    console.log('AFTER RENDER SCHEDULE:', e);
  };

  const onBeforeCreateSchedule = scheduleData => {
    console.log('BEFORE CREATE SCHEDULE:', scheduleData);
    let id = jobsState.jobs[jobsState.selectedJob].suggestedTimes.length;

    const schedule = {
      id: id,
      title: 'Suggested Job Time!',
      isAllDay: false, // scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: 'time', // scheduleData.isAllDay ? 'allday' : 'time',
      dueDateClass: '',
      bgColor: 'lightblue',
    };

    let startDay = scheduleData.start;
    let endDay = scheduleData.end;
    let apptStart = startDay.getTime();
    let apptEnd = endDay.getTime();

    dispatch(
      jobActions.addSuggestedTime({
        jobId: selectedJobId,
        suggestedTime: {
          id: jobsState.jobs[selectedJobId].suggestedTimes.length.toString(),
          beginTime: apptStart,
          endTime: apptEnd,
        },
      }),
    );

    // @ts-ignore
    // calRef.current.calendarInst.createSchedules([schedule]);
  };

  const onBeforeDeleteSchedule = res => {
    console.log('BEFORE DELETE SCHEDULE:', res.schedule);
    const { id, calendarId } = res.schedule;

    // @ts-ignore
    // calRef.current.calendarInst.deleteSchedule(id, calendarId);
  };

  const onBeforeUpdateSchedule = e => {
    console.log('BEFORE UPDATE SCHEDULE:', e.schedule);
    const { schedule, changes } = e;
    let startDay = changes.start;
    let endDay = changes.end;
    let apptStart = startDay.getTime();
    let apptEnd = endDay.getTime();

    console.log('CHANGES: ', changes);

    // @ts-ignore
    // calRef.current.calendarInst.updateSchedule(
    //   schedule.id,
    //   schedule.calendarId,
    //   changes,
    // );

    dispatch(
      jobActions.updateSuggestedTimes({
        jobId: selectedJobId,
        suggestedTimeId: schedule.id,
        suggestedTime: {
          id: schedule.id,
          beginTime: apptStart,
          endTime: apptEnd,
        },
      }),
    );
  };
  ////////////////////////

  // Instance Functions //
  const calNext = () => {
    // @ts-ignore
    const calendarInstance = calRef.current.getInstance();
    calendarInstance.next();
  };

  const calBack = () => {
    // @ts-ignore
    const calendarInstance = calRef.current.getInstance();
    calendarInstance.prev();
  };

  const calReturn = () => {
    // @ts-ignore
    const calendarInstance = calRef.current.getInstance();
    calendarInstance.today();
  };

  const setMonthView = () => {
    // @ts-ignore
    const calendarInstance = calRef.current.getInstance();
    calendarInstance.changeView('month', true);
    setCurrentView('month');
  };

  const setWeekView = () => {
    // @ts-ignore
    const calendarInstance = calRef.current.getInstance();
    calendarInstance.changeView('week', true);
    setCurrentView('week');
  };

  const setDayView = () => {
    // @ts-ignore
    const calendarInstance = calRef.current.getInstance();
    calendarInstance.changeView('day', true);
    setCurrentView('day');
  };
  ////////////////////////

  return (
    <>
      <Container>
        <Button style={{ margin: '0.2em' }} onClick={calBack}>
          Back
        </Button>
        <Button style={{ margin: '0.2em' }} onClick={calReturn}>
          Today
        </Button>
        <Button style={{ margin: '0.2em' }} onClick={calNext}>
          Next
        </Button>
        <Dropdown
          style={{ margin: '0.2em' }}
          isOpen={calTypeOpen}
          toggle={() => {
            setCalTypeOpen(!calTypeOpen);
          }}
        >
          {/*<DropdownToggle caret>{this.currentView}</DropdownToggle>*/}
          <DropdownMenu>
            <DropdownItem onClick={setDayView}>Day</DropdownItem>
            <DropdownItem onClick={setWeekView}>Week</DropdownItem>
            <DropdownItem onClick={setMonthView}>Month</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <ConfirmBox>
          <Button
            content="Cancel"
            labelPosition="right"
            icon="x"
            negative={true}
            onClick={() => {
              setModalOpen(false);
            }}
          />
          <Button
            content="Confirm"
            labelPosition="right"
            icon="checkmark"
            positive
            onClick={() => {
              setModalOpen(false);
            }}
          />
        </ConfirmBox>
      </Container>
      <Calendar
        ref={calRef}
        calendars={[
          {
            id: '0',
            name: 'Schedule',
            bgColor: '#9e5fff',
            borderColor: '#9e5fff',
          },
        ]}
        style={{
          display: 'flex',
          flex: 1,
          border: 'red solid 5px',
        }}
        height={'100%'}
        view={currentView}
        week={weekOptions}
        taskView={false}
        scheduleView={['time']}
        // useCreationPopup={true}
        useDetailPopup={true}
        schedules={times}
        onClickSchedule={onClickSchedule}
        onBeforeCreateSchedule={onBeforeCreateSchedule}
        onBeforeDeleteSchedule={onBeforeDeleteSchedule}
        onBeforeUpdateSchedule={onBeforeUpdateSchedule}
        onAfterRenderSchedule={onAfterRenderSchedule}
      />
    </>
  );
};

const Container = styled.div`
  padding-bottom: 5px;
  display: flex;
  flex: 1;

  // DEBUG STYLES //
  //border: 5px solid orange;
`;

const ConfirmBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  // DEBUG STYLES //
  //border: 5px solid red;
`;

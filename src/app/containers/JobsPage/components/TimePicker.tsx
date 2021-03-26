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

// Calendar Default Options //
const mobileWeekOptions = {
  daynames: ['', '', '', '', '', '', ''],
};

const weekOptions = {};
//////////////////////////////

// Date Utility Function //
//Add hours to a dateTime//
// Date.prototype.addHours = function (h) {
//   this.setTime(this.getTime() + h * 60 * 60 * 1000);
//   return this;
// };
///////////////////////////

export const TimePicker = () => {
  const calRef = useRef(null);
  const [currentView, setCurrentView] = useState('day');
  const [calTypeOpen, setCalTypeOpen] = useState(false);
  const [prevSchedule, setPrevSchedule] = useState([
    {
      id: '1',
      calendarId: '0',
      title: 'test',
      category: 'time',
      dueDateClass: '',
      start: new Date(),
      end: new Date(),
      bgColor: 'lightblue',
      location: 'test',
    },
  ]);

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
    let startDay = e.schedule.start;
    let endDay = e.schedule.end;
    let apptLoc = e.schedule.location;
    let apptSubj = e.schedule.title;

    let apptDate = new Date(
      startDay.getFullYear(),
      startDay.getMonth(),
      startDay.getDay(),
    ).toDateString();

    let apptStart = startDay.getTime();
    let apptEnd = endDay.getTime();

    // this.props.setAppt([apptDate, apptStart, apptEnd, apptLoc, apptSubj]);
  };

  const onBeforeCreateSchedule = scheduleData => {
    console.log('BEFORE CREATE SCHEDULE:', scheduleData);
    let id = 1;

    const schedule = {
      id: id,
      title: 'Tutor Time!',
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? 'allday' : 'time',
      dueDateClass: '',
      bgColor: 'lightblue',
      // location: scheduleData.location,
      // raw: {
      //   class: scheduleData.raw["class"],
      // },
      // state: scheduleData.state,
    };

    // @ts-ignore
    calRef.current.calendarInst.createSchedules([schedule]);
  };

  const onBeforeDeleteSchedule = res => {
    const { id, calendarId } = res.schedule;

    // @ts-ignore
    calRef.current.calendarInst.deleteSchedule(id, calendarId);
  };

  const onBeforeUpdateSchedule = e => {
    const { schedule, changes } = e;

    // @ts-ignore
    calRef.current.calendarInst.updateSchedule(
      schedule.id,
      schedule.calendarId,
      changes,
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
      <div style={{ display: 'flex', alignSelf: 'left' }}>
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
      </div>
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
        schedules={prevSchedule}
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
  display: flex;
  flex: 1;

  // DEBUG STYLES //
  border: 5px solid orange;
`;

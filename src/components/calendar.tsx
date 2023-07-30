import dayjs from 'dayjs';
import { useEffect } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CALENDAR_TYPES } from 'react-calendar/dist/cjs/shared/const';
import '@styles/calendar.css';

const Calendar = () => {
  const today = new Date();
  const targetDay = new Date('2023-08-26');

  const dDay = Math.ceil((targetDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const label = document.getElementsByClassName('react-calendar__navigation__label')[0] as HTMLButtonElement;

    if (label) {
      label.disabled = true;
    }
  }, []);

  return (
    <div className="scroll-area grid items-center justify-center py-3 text-center">
      <ReactCalendar
        defaultValue={targetDay}
        formatDay={(_, date) => dayjs(date).format('D')}
        minDate={targetDay}
        maxDate={targetDay}
        calendarType={CALENDAR_TYPES.HEBREW}
      />
      <p className="mt-5">결혼식이 {dDay}일 남았습니다.</p>
    </div>
  );
};

export default Calendar;

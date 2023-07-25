import dayjs from 'dayjs';
import { useEffect } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CALENDAR_TYPES } from 'react-calendar/dist/cjs/shared/const';
import tw, { styled } from 'twin.macro';

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
    <StyledCalendar>
      <ReactCalendar
        defaultValue={targetDay}
        formatDay={(_, date) => dayjs(date).format('D')}
        minDate={targetDay}
        maxDate={targetDay}
        calendarType={CALENDAR_TYPES.HEBREW}
      />
      <p className="mt-5">결혼식이 {dDay}일 남았습니다.</p>
    </StyledCalendar>
  );
};

export default Calendar;

const StyledCalendar = styled.div`
  ${tw`grid items-center justify-center py-3 text-center h-screen snap-start`}

  .react-calendar {
    width: 100%;
    border: 1px solid var(--primary-color);
    border-radius: 8px;
  }

  .react-calendar__navigation button:disabled {
    background-color: transparent;
  }

  .react-calendar__tile {
    background-color: transparent;
    aspect-ratio: 1;
  }

  .react-calendar__navigation__arrow {
    display: none;
  }

  .react-calendar__tile--active {
    color: white !important;
    position: relative;
  }

  .react-calendar__tile--active::before {
    content: '26';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--grapefruit);
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #333;
  }
`;

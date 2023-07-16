import dayjs from 'dayjs';
import { useEffect } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
      />
      <p className="mt-5">결혼식이 {dDay}일 남았습니다.</p>
    </StyledCalendar>
  );
};

export default Calendar;

const StyledCalendar = styled.div`
  ${tw`grid items-center justify-center py-5 text-center`}

  .react-calendar {
    width: 100%;
  }

  .react-calendar__tile {
    background-color: #f0f0f0;
  }

  .react-calendar__tile--active {
    background-color: green;
  }
`;

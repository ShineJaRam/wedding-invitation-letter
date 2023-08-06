import { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
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
    <div className="scroll-area grid items-center justify-center overflow-hidden py-3 text-center">
      <p className="text-xl font-bold">팔월의 스물여섯번째 날</p>

      <div className="relative flex w-[calc(100vw-100px)] min-w-[220px] max-w-[450px] justify-center">
        <img className="h-full w-full" src="images/calendar.png" alt="calendar img" />
        <img
          className="absolute bottom-[16%] left-[91%] h-[11.1%] w-[11.6%]"
          src="images/icon-heart.png"
          alt="heart icon"
        />
      </div>

      <p className="mt-5">결혼식이 {dDay}일 남았습니다.</p>
    </div>
  );
};

export default Calendar;

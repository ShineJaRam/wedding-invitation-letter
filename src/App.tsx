import Calendar from './components/calendar';
import Contact from './components/contact';
import Gallary from './components/gallary';
import MainBanner from './components/mainBanner';
import Location from './components/location';
import LocationNotice from './components/locationNotice';
import BankAccount from './components/bankAccount';

const App = () => {
  return (
    <article
      className="mx-auto grid h-screen max-w-[767px] overflow-auto bg-[var(--white-color)] px-4 pb-10 text-center"
      style={{
        scrollSnapType: 'y mandatory',
      }}
    >
      <MainBanner />
      <Calendar />
      <Contact />
      <Gallary />
      <Location />
      <LocationNotice />
      <BankAccount />
    </article>
  );
};

export default App;

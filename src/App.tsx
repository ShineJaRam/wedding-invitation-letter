import Calendar from './components/calendar';
import Contact from './components/contact';
import Gallary from './components/gallary';
import MainBanner from './components/mainBanner';
import Location from './components/location';
import LocationNotice from './components/locationNotice';
import BankAccount from './components/bankAccount';

const App = () => {
  return (
    <article className="mx-auto grid max-w-[767px] gap-5 bg-[var(--white-color)] px-4 pb-10 text-center">
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

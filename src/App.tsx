import Calendar from './components/calendar';
import Contact from './components/contact';
import Gallary from './components/gallary';
import Greetings from './components/greetings';
import MainBanner from './components/mainBanner';
import Location from './components/location';
import LocationNotice from './components/locationNotice';
import BankAccount from './components/bankAccount';

const App = () => {
  return (
    <article className="mx-auto grid max-w-5xl gap-5 bg-[var(--white-color)] px-4 pb-10 text-center">
      <MainBanner />
      <Greetings />
      <Contact />
      <Calendar />
      <Gallary />
      <Location />
      <LocationNotice />
      <BankAccount />
    </article>
  );
};

export default App;

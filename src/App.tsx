import Calendar from './components/calendar';
import Contact from './components/contact';
import Gallary from './components/gallary';
import MainBanner from './components/mainBanner';
import Location from './components/location';
import BankAccount from './components/bankAccount';
import { useVh } from './hooks/useVh';

const App = () => {
  useVh();

  return (
    <article
      id="container"
      className="scroll-container mx-auto grid max-w-[767px] bg-[var(--white-color)] px-4 pb-10 text-center"
    >
      <MainBanner />
      <Contact />
      <Calendar />
      <Gallary />
      <Location />
      <BankAccount />
    </article>
  );
};

export default App;

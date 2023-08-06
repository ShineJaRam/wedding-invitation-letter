import Calendar from './components/calendar';
import Contact from './components/contact';
import Gallary from './components/gallary';
import MainBanner from './components/mainBanner';
import Location from './components/location';
import BankAccount from './components/bankAccount';
import { useVh } from './hooks/useVh';
import InvitationPhrase from './components/invitationPhrase';

const App = () => {
  useVh();

  return (
    <article
      id="container"
      className="scroll-container mx-auto grid min-w-[320px] max-w-[767px] bg-[var(--white-color)] text-center"
    >
      <MainBanner />
      <InvitationPhrase />
      <Contact />
      <Calendar />
      <Gallary />
      <Location />
      <BankAccount />
    </article>
  );
};

export default App;

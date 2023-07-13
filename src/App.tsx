import Calendar from './components/calendar';
import Contact from './components/contact';
import Gallary from './components/gallary';
import Greetings from './components/greetings';
import LocationTest from './components/locationTest';
import MainBanner from './components/mainBanner';
import Location from './components/location';

const App = () => {
  return (
    <article className="mx-auto grid max-w-5xl gap-5 bg-[#F2F1F6] px-4 text-center">
      <MainBanner />
      <Greetings />
      <Contact />
      <Calendar />
      <Gallary />
      <Location />
      <LocationTest />
    </article>
  );
};

export default App;

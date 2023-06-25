import Contact from './components/contact';
import Greetings from './components/greetings';
import MainBanner from './components/mainBanner';

const App = () => {
  return (
    <article className="mx-auto max-w-5xl bg-[#F2F1F6] px-4">
      <MainBanner />
      <Greetings />
      <Contact />
    </article>
  );
};

export default App;

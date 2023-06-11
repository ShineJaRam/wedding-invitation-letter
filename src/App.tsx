import Greetings from './components/greetings';
import MainBanner from './components/mainBanner';

const App = () => {
  return (
    <article className="mx-auto max-w-5xl bg-[#F2F1F6] px-4">
      <MainBanner />
      <Greetings />
      <img className="mx-[-16px] w-full max-w-none" src="images/img2.jpg" alt="우리가 강아지를 끌어안고 있는 사진" />
    </article>
  );
};

export default App;

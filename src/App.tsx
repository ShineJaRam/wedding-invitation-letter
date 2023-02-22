import tw, { styled } from 'twin.macro';
import Greetings from './components/greetings';
import MainBanner from './components/mainBanner';

const App = () => {
  return (
    <StyledApp>
      <MainBanner />
      <Greetings />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  ${tw`max-w-5xl mx-auto px-[20px] pb-20`}

  background-color: #F2F1F6;

  section {
    ${tw`mb-[150px] last:mb-0`}
  }
`;

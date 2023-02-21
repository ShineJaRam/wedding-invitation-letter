import tw, { styled } from 'twin.macro';
import MainBanner from './components/mainBanner';

const App = () => {
  return (
    <StyledApp>
      <MainBanner />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  ${tw`max-w-5xl mx-auto h-screen`}

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

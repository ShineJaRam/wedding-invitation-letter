import tw, { styled } from 'twin.macro';

const App = () => {
  return <StyledApp>모바일 청첩장!!</StyledApp>;
};

export default App;

const StyledApp = styled.div`
  ${tw`flex w-screen h-screen justify-center items-center`}
`;

import { FC, HTMLProps } from 'react';
import tw, { styled } from 'twin.macro';

type MainBannerProps = HTMLProps<HTMLDivElement>;

const MainBanner: FC<MainBannerProps> = () => {
  return (
    <StyledMainBanner className="relative">
      <img className="h-full w-full object-cover" src="images/main_banner.png" alt="main banner" />
      <div className="absolute bottom-48 left-[50%] translate-x-[-50%]  text-center text-white">
        <p className="mb-8 border border-solid border-white py-4">
          소중한
          <br />
          당신을
          <br />
          모십니다
        </p>
        <p className="mb-2">임수현 • 김은영</p>
        <p>2023.08.26</p>
      </div>
    </StyledMainBanner>
  );
};

export default MainBanner;

const StyledMainBanner = styled.section`
  ${tw`bg-[#F7F7F7] h-screen mx-[-20px]`}
`;

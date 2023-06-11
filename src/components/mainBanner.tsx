import { styled } from 'twin.macro';

const MainBanner = () => {
  return (
    <StyledMainBanner className="relative mx-[-16px] h-screen">
      <p className="banner-text w-full bg-[var(--banner-color)] py-6 text-center text-white">
        WEDDING DAY
        <br />
        2023.08.26 11:00am
      </p>
      <img className="h-[calc(100%-96px)] object-cover" src="images/main_banner.jpg" alt="main banner" />
    </StyledMainBanner>
  );
};

export default MainBanner;

const StyledMainBanner = styled.section``;

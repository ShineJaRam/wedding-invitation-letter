import { styled } from 'twin.macro';
import styles from '@styles/bannerAnimation.module.css';

const MainBanner = () => {
  return (
    <StyledMainBanner className="relative mx-[-16px] h-screen overflow-hidden">
      <h1 className="banner-text w-full bg-[var(--banner-color)] py-6 text-center text-white">
        WEDDING DAY
        <br />
        2023.08.26 11:00am
      </h1>
      <img
        className={`absolute h-[calc(100%-96px)] object-cover ${styles.common} ${styles.bannerAnimation1}`}
        src="images/test.jpg"
        alt="main banner1"
      />
      <img
        className={`absolute h-[calc(100%-96px)] object-cover ${styles.common} ${styles.bannerAnimation2}`}
        src="images/main_banner.jpg"
        alt="main banner2"
      />
    </StyledMainBanner>
  );
};

export default MainBanner;

const StyledMainBanner = styled.section``;

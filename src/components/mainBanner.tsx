import { styled } from 'twin.macro';
import styles from '@styles/bannerAnimation.module.css';
import { motion } from 'framer-motion';

const MainBanner = () => {
  return (
    <StyledMainBanner className="relative mx-[-16px] h-screen overflow-hidden">
      <h1 className="banner-text w-full py-6 text-center">
        <p className="relative right-3 font-bold">08</p>
        <hr className="mx-auto w-[37px] rotate-[135deg] border-[0.5px] border-solid border-[#333]" />
        <p className="relative left-3 font-bold">26</p>
      </h1>
      <div className="relative h-[60%]">
        <img
          className={`absolute h-full w-full object-cover ${styles.common} ${styles.bannerAnimation1}`}
          src="images/test.jpg"
          alt="main banner1"
        />
        <img
          className={`absolute h-full w-full object-cover ${styles.common} ${styles.bannerAnimation2}`}
          src="images/main_banner.jpg"
          alt="wedding photo"
        />
      </div>

      <motion.div
        className="relative mt-9"
        initial={{ opacity: 0, bottom: '-10px' }}
        animate={{ opacity: 1, bottom: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="mb-2">2023년 08월 26일 토요일 오전 11시</p>
        <p className="mb-[34px]">명동 라루체 루아르홀</p>
        <div className="mx-auto flex w-[200px] justify-between">
          <span>임수현</span>
          <span>and</span>
          <span>김은영</span>
        </div>
      </motion.div>
    </StyledMainBanner>
  );
};

export default MainBanner;

const StyledMainBanner = styled.section``;

import styles from '@styles/bannerAnimation.module.css';
import { motion } from 'framer-motion';

const MainBanner = () => {
  return (
    <section className="scroll-area relative overflow-hidden bg-[#EBF5F1]">
      <h1 className="banner-text relative bottom-[-7px] flex h-[20%] w-full flex-col justify-center text-center">
        <p className="relative bottom-[-5px] right-[30px] text-[24px] font-bold">08</p>
        <hr className="mx-auto w-[37px] rotate-[135deg] border-[0.5px] border-solid border-[#333]" />
        <p className="relative left-[26px] top-[-8px] text-[24px] font-bold">26</p>
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
        className="flex h-[20%] flex-col items-center justify-center"
        initial={{ opacity: 0, bottom: '-10px' }}
        animate={{ opacity: 1, bottom: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="mb-[5vh] flex w-full justify-center text-[14px]">
          <span>수현</span>
          <div className="mx-[18px] border-l border-solid border-[#aaa]" />
          <span>은영</span>
        </div>
        <div>
          <p className="mb-2 text-[12px]">2023년 08월 26일 토요일 오전 11시</p>
          <p className="text-[10px]">명동 라루체 루아르홀</p>
        </div>
      </motion.div>
    </section>
  );
};

export default MainBanner;

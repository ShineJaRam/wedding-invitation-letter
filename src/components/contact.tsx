import modalStore from '@/store/modalStore';
import styles from '@styles/animation.module.css';
import { FaPhone } from 'react-icons/fa6';
import ContactParentsContents from './contactParentsContents';

const Contact = () => {
  const { openModal } = modalStore();

  const handleContactModal = () => {
    openModal({ name: 'contactParents', contents: <ContactParentsContents /> });
  };

  return (
    <div className="h-screen snap-start">
      <img
        className="mx-[-16px] w-screen max-w-none md:max-w-[calc(100%+32px)]"
        src="images/img2.jpg"
        alt="우리가 강아지를 끌어안고 있는 사진"
      />
      <p className={`relative py-8 text-center ${styles['fade-in']}`}>
        <span className="flex items-center justify-center">
          임진영 • 김남옥 의 아들 <strong className="ml-2">임수현</strong>
          <a className="ml-2 inline-block" href="tel:010-2770-9107">
            <FaPhone />
          </a>
        </span>

        <br />

        <span className="flex items-center justify-center">
          김한기 • 윤재분 의 딸 <strong className="ml-2">김은영</strong>
          <a className="ml-2 inline-block" href="tel:010-7301-3137">
            <FaPhone />
          </a>
        </span>
      </p>
      <p className="text-center">
        <button
          className="rounded-full border border-solid border-[var(--primary-color)] px-10 py-3 text-[var(--primary-color)]"
          onClick={handleContactModal}
        >
          혼주에게 연락하기
        </button>
      </p>
    </div>
  );
};

export default Contact;

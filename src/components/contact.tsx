import modalStore from '@/store/modalStore';
import styles from '@styles/animation.module.css';
import ContactParentsContents from './contactParentsContents';

const Contact = () => {
  const { openModal } = modalStore();

  const handleContactModal = () => {
    openModal({ name: 'contactParents', contents: <ContactParentsContents /> });
  };

  return (
    <div className="scroll-area flex flex-col overflow-hidden">
      <div className="contact-img-wrap relative aspect-[375/467] h-[70vh] w-screen max-w-full overflow-hidden md:max-w-[calc(100%+32px)]">
        <img
          className="absolute bottom-0 left-1/2 h-full w-full translate-x-[-50%] object-cover"
          src="images/img2.jpg"
          alt="우리가 강아지를 끌어안고 있는 사진"
        />
      </div>

      <div className="flex grow flex-col justify-center">
        <p className={`relative flex flex-col gap-2 pb-8 text-center ${styles['fade-in']}`}>
          <span className="flex items-center justify-center">
            임진영 • 김남옥 의 아들 <strong className="ml-2">임수현</strong>
          </span>

          <span className="flex items-center justify-center">
            김한기 • 윤재분 의 딸 <strong className="ml-2">김은영</strong>
          </span>
        </p>

        <p className="text-center">
          <button className="rounded-full bg-[var(--primary-color)] px-6 py-3 text-white" onClick={handleContactModal}>
            연락하기
          </button>
        </p>
      </div>
    </div>
  );
};

export default Contact;

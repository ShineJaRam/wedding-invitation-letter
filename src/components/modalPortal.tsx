import modalStore, { modalSelector } from '@/store/modalStore';
import { createPortal } from 'react-dom';
import Modal from './modal';

const ModalPortal = () => {
  const modals = modalStore(modalSelector);

  return createPortal(
    <>
      {modals.map((el, idx) => {
        return <Modal key={idx}>{el.contents}</Modal>;
      })}
    </>,
    document.getElementById('modal') as HTMLElement
  );
};

export default ModalPortal;

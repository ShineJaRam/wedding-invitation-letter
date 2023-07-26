import modalStore from '@/store/modalStore';
import { FC, PropsWithChildren, useRef } from 'react';
import useOutSideClick from '@/hooks/useOutSideClick';
import useBlockScroll from '@/hooks/useBlockScroll';
import '@styles/modal.css';

interface ModalProps extends PropsWithChildren {
  key?: string | number;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const { closeModal } = modalStore();
  const ref = useRef<HTMLDivElement>(null);

  useOutSideClick(ref, closeModal);

  useBlockScroll();

  return (
    <div className="overlay">
      <div className="modal-wrap" ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

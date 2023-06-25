import { styled } from 'twin.macro';
import modalStore from '@/store/modalStore';
import { FC, PropsWithChildren, useRef } from 'react';
import useOutSideClick from '@/hooks/useOutSideClick';
import useBlockScroll from '@/hooks/useBlockScroll';

interface ModalProps extends PropsWithChildren {
  key?: string | number;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const { closeModal } = modalStore();
  const ref = useRef<HTMLDivElement>(null);

  useOutSideClick(ref, closeModal);

  useBlockScroll();

  return (
    <Overlay>
      <ModalWrap ref={ref}>{children}</ModalWrap>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

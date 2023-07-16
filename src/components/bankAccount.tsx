import { useState } from 'react';
import styles from 'styles/collapse.module.css';

const BankAccount = () => {
  const [isOpen, setIsOpen] = useState(0);

  const handleOpen = (idx: number) => {
    setIsOpen(idx);
  };

  return (
    <div>
      <h2 className="mb-4">마음 전하실 곳</h2>

      <div className="mx-auto mb-2 w-full max-w-[290px]">
        <button
          className="h-10 w-full"
          onClick={() => {
            handleOpen(1);
          }}
        >
          신랑측 계좌번호
        </button>

        <div className={`${isOpen === 1 ? '' : 'h-0'} ${styles.collapse} overflow-hidden`}>
          <div className="flex justify-between px-2 py-1">
            <p className="text-left">
              국민 계좌번호
              <br />
              임진영
            </p>
            <button>복사하기</button>
          </div>

          <div className="flex justify-between px-2 py-1">
            <p className="text-left">
              농협 계좌번호
              <br />
              김남옥
            </p>
            <button>복사하기</button>
          </div>

          <div className="flex justify-between px-2 py-1">
            <p className="text-left">
              신한 110325289728
              <br />
              임수현
            </p>
            <button>복사하기</button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[290px]">
        <button
          className="h-10 w-full"
          onClick={() => {
            handleOpen(2);
          }}
        >
          신부측 계좌번호
        </button>

        <div className={`${isOpen === 2 ? '' : 'h-0'} ${styles.collapse} overflow-hidden`}>
          <div className="flex justify-between px-2 py-1">
            <p className="text-left">
              국민 계좌번호
              <br />
              김한기
            </p>
            <button>복사하기</button>
          </div>

          <div className="flex justify-between px-2 py-1">
            <p className="text-left">
              국민 계좌번호
              <br />
              윤재분
            </p>
            <button>복사하기</button>
          </div>

          <div className="flex justify-between px-2 py-1">
            <p className="text-left">
              카카오 계좌번호
              <br />
              김은영
            </p>
            <button>복사하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;

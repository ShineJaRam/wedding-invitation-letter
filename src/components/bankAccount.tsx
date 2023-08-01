import { useState } from 'react';
import styles from 'styles/collapse.module.css';
import { BsChevronDown } from 'react-icons/bs';
import copy from 'copy-to-clipboard';

const BankAccount = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  const handleClipboard = (name: string, account: string) => {
    const _account = account.replace('-', '');
    copy(_account);
    alert(`${name}님의 계좌번호가 복사되었습니다.\n${account}`);
  };

  return (
    <div className="scroll-area flex flex-col justify-center overflow-hidden">
      <h2 className="mb-4 font-bold text-[var(--primary-color)]">마음 전하실 곳</h2>

      <div className="mx-auto mb-2 w-full max-w-[290px]">
        <button
          className="relative h-10 w-full rounded-[5px] bg-[#458340] text-[12px] font-bold text-white"
          onClick={() => {
            setIsFirstOpen(!isFirstOpen);
          }}
        >
          신랑측 계좌번호
          <BsChevronDown className="absolute right-[12px] top-[50%] translate-y-[-50%]" />
        </button>

        <div
          className={`${isFirstOpen ? 'h-[177px]' : 'h-0'} ${
            styles.collapse
          } overflow-hidden rounded-b-[5px] bg-[#EBF5F1]`}
          style={{
            transition: 'height 0.5s ease-in-out',
          }}
        >
          <div className="flex justify-between px-[18px] py-[13px]">
            <div className="text-left">
              <p className="mb-[5px] text-[12px]">우체국 900886-02-035896</p>
              <span className="text-[12px]">임진영</span>
            </div>
            <button
              className="rounded-[5px] bg-[#458340] px-[6px] py-1 text-[10px] text-white"
              onClick={() => {
                handleClipboard('임진영', '900886-02-035896');
              }}
            >
              복사
            </button>
          </div>

          <div className="flex justify-between px-[18px] py-[13px]">
            <div className="text-left">
              <p className="mb-[5px] text-[12px]">농협은행 301812-51-034401</p>
              <span className="text-[12px]">김남옥</span>
            </div>
            <button
              className="rounded-[5px] bg-[#458340] px-[6px] py-1 text-[10px] text-white"
              onClick={() => {
                handleClipboard('김남옥', '301812-51-034401');
              }}
            >
              복사
            </button>
          </div>

          <div className="flex justify-between px-[18px] py-[13px]">
            <div className="text-left">
              <p className="mb-[5px] text-[12px]">신한은행 110-325-289728</p>
              <span className="text-[12px]">임수현</span>
            </div>
            <button
              className="rounded-[5px] bg-[#458340] px-[6px] py-1 text-[10px] text-white"
              onClick={() => {
                handleClipboard('임수현', '110-325-289728');
              }}
            >
              복사
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[290px]">
        <button
          className="relative h-10 w-full rounded-[5px] bg-[#458340] text-[12px] font-bold text-white"
          onClick={() => {
            setIsSecondOpen(!isSecondOpen);
          }}
        >
          신부측 계좌번호
          <BsChevronDown className="absolute right-[12px] top-[50%] translate-y-[-50%]" />
        </button>

        <div
          className={`${isSecondOpen ? 'h-[177px]' : 'h-0'} ${
            styles.collapse
          } overflow-hidden rounded-b-[5px] bg-[#EBF5F1]`}
          style={{
            transition: 'height 0.5s ease-in-out',
          }}
        >
          <div className="flex justify-between px-[18px] py-[13px]">
            <div className="text-left">
              <p className="mb-[5px] text-[12px]">국민은행 392801-04-023183</p>
              <span className="text-[12px]">김한기</span>
            </div>
            <button
              className="rounded-[5px] bg-[#458340] px-[6px] py-1 text-[10px] text-white"
              onClick={() => {
                handleClipboard('김한기', '392801-04-023183');
              }}
            >
              복사
            </button>
          </div>

          <div className="flex justify-between px-[18px] py-[13px]">
            <div className="text-left">
              <p className="mb-[5px] text-[12px]">국민은행 392802-04-074027</p>
              <span className="text-[12px]">윤재분</span>
            </div>
            <button
              className="rounded-[5px] bg-[#458340] px-[6px] py-1 text-[10px] text-white"
              onClick={() => {
                handleClipboard('윤재분', '392802-04-074027');
              }}
            >
              복사
            </button>
          </div>

          <div className="flex justify-between px-[18px] py-[13px]">
            <div className="text-left">
              <p className="mb-[5px] text-[12px]">토스뱅크 1000-2967-4885</p>
              <span className="text-[12px]">김은영</span>
            </div>
            <button
              className="rounded-[5px] bg-[#458340] px-[6px] py-1 text-[10px] text-white"
              onClick={() => {
                handleClipboard('김은영', '1000-2967-4885');
              }}
            >
              복사
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;

import { FC } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';

const ContactParentsContents: FC = () => {
  return (
    <div className="w-[calc(100vw-100px)] rounded bg-white text-center">
      <div className="rounded-t bg-[var(--primary-color)] py-4 font-bold text-white">
        <p>연락하기</p>
      </div>
      <div className="rounded-b bg-[#f4f1ee] p-4">
        <div className="flex flex-col gap-2 py-3">
          <div className="flex items-center justify-between">
            <span className="w-[48px] text-[#7DA7BD]">신랑 父</span>
            <span className="text-[#333]">임진영</span>
            <a href="tel:010-5084-7771">
              <button className="rounded border border-solid border-[var(--secondary-color)] px-4 py-2">
                <BsTelephoneFill className="[&>path]:fill-[var(--primary-color)]" />
              </button>
            </a>
          </div>

          <div className="flex items-center justify-between">
            <span className="w-[48px] text-[#7DA7BD]">신랑 母</span>
            <span className="text-[#333]">김남옥</span>
            <a href="tel:010-9920-6512">
              <button className="rounded border border-solid border-[var(--secondary-color)] px-4 py-2">
                <BsTelephoneFill className="[&>path]:fill-[var(--primary-color)]" />
              </button>
            </a>
          </div>

          <div className="flex items-center justify-between">
            <span className="w-[48px] text-[#7DA7BD]">신랑</span>
            <span className="text-[#333]">임수현</span>
            <a href="tel:010-2770-9107">
              <button className="rounded border border-solid border-[var(--secondary-color)] px-4 py-2">
                <BsTelephoneFill className="[&>path]:fill-[var(--primary-color)]" />
              </button>
            </a>
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-2 py-3">
          <div className="flex items-center justify-between">
            <span className="w-[48px] text-[#AF3328]">신부 父</span>
            <span className="text-[#333]">김한기</span>
            <a href="tel:010-6778-1502">
              <button className="rounded border border-solid border-[var(--secondary-color)] px-4 py-2">
                <BsTelephoneFill className="[&>path]:fill-[var(--primary-color)]" />
              </button>
            </a>
          </div>

          <div className="flex items-center justify-between">
            <span className="w-[48px] text-[#AF3328]">신부 母</span>
            <span className="text-[#333]">윤재분</span>
            <a href="tel:010-9822-5433">
              <button className="rounded border border-solid border-[var(--secondary-color)] px-4 py-2">
                <BsTelephoneFill className="[&>path]:fill-[var(--primary-color)]" />
              </button>
            </a>
          </div>

          <div className="flex items-center justify-between">
            <span className="w-[48px] text-[#AF3328]">신부</span>
            <span className="text-[#333]">김은영</span>
            <a href="tel:010-7301-3137">
              <button className="rounded border border-solid border-[var(--secondary-color)] px-4 py-2">
                <BsTelephoneFill className="[&>path]:fill-[var(--primary-color)]" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactParentsContents;

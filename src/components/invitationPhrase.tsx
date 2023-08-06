import { PiFeatherFill } from 'react-icons/pi';

const InvitationPhrase = () => {
  return (
    <div className="scroll-area flex flex-col items-center justify-center overflow-hidden">
      <PiFeatherFill className="mb-[20px] fill-[var(--primary-color)]" />
      <h2 className="mb-[30px] text-xl font-bold text-[var(--primary-color)]">모시는 글</h2>
      <p className="leading-[180%]">
        같은 날 태어나 다르게 자라온 두 사람이
        <br />
        연인이 되어 세 번의 사계절을 함께 했습니다.
        <br />
        <br />
        네 번째 여름, 가족으로서 첫 걸음을 내딛는 순간에
        <br />
        가장 소중한 분들을 모시고자 합니다.
        <br />
        <br />
        귀한 걸음 하시어
        <br />
        저희의 시작을 축복해 주시면 감사하겠습니다.
      </p>
    </div>
  );
};

export default InvitationPhrase;

import tw, { styled } from 'twin.macro';

const Greetings = () => {
  return (
    <StyledGreetings>
      <div>
        <p>새로운 마음과 새 의미를 간직하며,</p>
        <p>두 사람이 새 출발의 첫걸음을 내딛습니다.</p>
        <p>좋은 꿈, 바른 뜻으로</p>
        <p>올바르게 살 수 있도록 축복과 격려 주시면</p>
        <p>더없는 기쁨으로 간직하겠습니다.</p>
      </div>
      <div>
        <p className="mb-4">
          임진영 • 김남옥 의 아들 <strong>임수현</strong>
        </p>
        <p>
          김한기 • 윤재분 의 딸 <strong>김은영</strong>
        </p>
      </div>
      <div>
        <p>2023년 8월 26일 토요일</p>
        <p>오전 11시</p>
        <p>명동 라루체 루아르홀</p>
      </div>
    </StyledGreetings>
  );
};

export default Greetings;

const StyledGreetings = styled.section`
  ${tw`text-center leading-relaxed`}

  div {
    ${tw`mb-8`}

    p {
      strong {
        ${tw`text-xl`}
      }
    }
  }
`;

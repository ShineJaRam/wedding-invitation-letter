import styles from '@styles/animation.module.css';

const Greetings = () => {
  return (
    <section className="py-10 text-center leading-relaxed">
      <div className="mb-6">
        <p className={`relative ${styles['fade-in']}`}>
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
          저희의 시작을 축복해주시면 감사하겠습니다.
        </p>
      </div>
      <div>
        <p className={`relative ${styles['fade-in']}`}>
          2023년 8월 26일 토요일
          <br />
          오전 11시
          <br />
          명동 라루체 루아르홀
        </p>
      </div>
    </section>
  );
};

export default Greetings;

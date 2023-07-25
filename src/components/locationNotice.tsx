const LocationNotice = () => {
  return (
    <div className="h-screen snap-start text-left">
      <div className="mb-6">
        <h2 className="mb-1 font-semibold text-[var(--primary-color)]">지하철 이용시</h2>
        <p className="text-sm">
          - 4호선 <strong>명동역</strong> 3번 출구
          <br />- 퍼시픽호텔 우측 길로 약 50m
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-1 font-semibold text-[var(--primary-color)]">버스 이용시</h2>
        <p className="text-sm">
          - <strong>104, 421, 463, 604, 7011번</strong> 명동입구역 하차
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-1 font-semibold text-[var(--primary-color)]">자가용 이용시</h2>
        <p className="text-sm">
          - 라루체 전용 주차장 보유
          <br /> (만차시 인근의 별도 주차장 지원, 주차 2시간 무료)
        </p>
      </div>
    </div>
  );
};

export default LocationNotice;

const LocationNotice = () => {
  return (
    <div className="text-left">
      <div className="mt-1">
        <h2>지하철 이용시</h2>
        <p>4호선 명동역 3번 출구 - 퍼시픽호텔 우측 길로 약 50m</p>
      </div>

      <div className="mt-1">
        <h2>버스 이용시</h2>
        <p>104, 421, 463, 604, 7011번 명동입구역 하차</p>
      </div>

      <div className="mt-1">
        <h2>자가용 이용시</h2>
        <p>
          라루체 전용 주차장 보유
          <br />
          (만차시 인근의 별도 주차장 지원, 주차 2시간 무료)
        </p>
      </div>
    </div>
  );
};

export default LocationNotice;

import { isMobile } from 'react-device-detect';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Location = () => {
  const lat = 37.559116633916;
  const lng = 126.984455216505;

  return (
    <div className="scroll-area relative mb-6 w-full pt-[50px]">
      <h1 className="mb-10 font-semibold">오시는 길</h1>

      <div
        className="absolute left-1/2 top-[15%] w-full"
        style={{
          transform: 'translate(-50%)',
        }}
      >
        <Map
          center={{
            lat,
            lng,
          }}
          style={{
            width: '100%',
            height: '250px',
          }}
        >
          <MapMarker position={{ lat, lng }}>
            <div className="w-[150px]">라루체 웨딩홀</div>
          </MapMarker>
        </Map>

        <div className="flex items-center justify-around gap-1 bg-[var(--third-color)] py-1">
          <a
            href={`${
              isMobile
                ? `nmap://place?id=13355258&appname=https://shinejaram.github.io/wedding-invitation-letter/`
                : 'https://naver.me/xcKJWnge'
            }`}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center px-2 py-2"
          >
            <img className="mr-1 h-5 w-5 rounded" src="images/icons/icon_naver_map.webp" alt="naver map icon" />
            <button className="text-xs">네이버 지도</button>
          </a>
          <div className="h-5 border-l border-solid border-[#333]" />
          <a
            href={`${isMobile ? `kakaomap://route?ep=${lat},${lng}&by=CAR` : 'http://kko.to/nR1-GIqr2D'}`}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center px-2 py-2"
          >
            <img className="mr-1 h-5 w-5 rounded" src="images/icons/icon_kakao_map.svg" alt="kakao map icon" />
            <button className="text-xs">카카오 지도</button>
          </a>
          <div className="h-5 border-l border-solid border-[#333]" />
          <a
            href={`${
              isMobile
                ? `tmap://?rGoName=${encodeURIComponent('명동 라루체 웨딩홀')}&rGoX=${lng}&rGoY=${lat}`
                : 'http://kko.to/nR1-GIqr2D'
            }`}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center px-2 py-2"
          >
            <img className="mr-1 h-5 w-5 rounded" src="images/icons/icon_t_map.svg" alt="t map icon" />
            <button className="text-xs">티맵 지도</button>
          </a>
        </div>

        <div className="mt-8 flex flex-col justify-center text-left">
          <div className="mb-6">
            <h2 className="mb-1 font-semibold text-[var(--primary-color)]">지하철 이용 시</h2>
            <p className="text-sm">
              - 4호선 <strong>명동역</strong> 3번 출구
              <br />- 퍼시픽호텔 우측 길로 약 50m
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-1 font-semibold text-[var(--primary-color)]">버스 이용 시</h2>
            <p className="text-sm">
              - <strong>104, 421, 463, 604, 7011번</strong> 명동입구역 하차
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-1 font-semibold text-[var(--primary-color)]">자가용 이용 시</h2>
            <p className="text-sm">
              - 라루체 전용 주차장 보유
              <br /> (만차시 인근의 별도 주차장 지원, 주차 2시간 무료)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

import { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';

const Location = () => {
  const lat = 37.559116633916;
  const lng = 126.984455216505;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const options = {
        center: new window.kakao.maps.LatLng(37.559116633916, 126.984455216505),
        level: 3,
      };

      new window.kakao.maps.Map(ref.current, options);
    }
  }, []);

  return (
    <div className="w-full">
      <div id="kakao_map" ref={ref} style={{ width: '100px', height: '100px' }}></div>
      <a
        href={`${
          isMobile
            ? `nmap://place?lat=${lat}&lng=${lng}&name=라루체 웨딩&appname=https://shinejaram.github.io/wedding-invitation-letter/`
            : 'https://naver.me/xcKJWnge'
        }`}
        target="_blank"
        rel="noreferrer noopener"
        className=""
      >
        <button>네이버 지도</button>
      </a>

      <a
        href={`${isMobile ? `kakaomap://route?ep=${lat},${lng}&by=CAR` : 'http://kko.to/nR1-GIqr2D'}`}
        target="_blank"
        rel="noreferrer noopener"
        className=""
      >
        <button>카카오 지도</button>
      </a>
    </div>
  );
};

export default Location;

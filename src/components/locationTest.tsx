import { isMobile } from 'react-device-detect';

const LocationTest = () => {
  const lat = 37.559116633916;
  const lng = 126.984455216505;

  return (
    <div>
      <a
        href={`${
          isMobile
            ? `nmap://place?lat=${lat}&lng=${lng}&name=라루체 웨딩&appname=https://shinejaram.github.io/wedding-invitation-letter/`
            : 'https://naver.me/xcKJWnge'
        }`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button>네이버 지도</button>
      </a>

      <a
        href={`${isMobile ? `kakaomap://route?ep=${lat},${lng}&by=CAR` : 'http://kko.to/nR1-GIqr2D'}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button>카카오 지도</button>
      </a>
    </div>
  );
};

export default LocationTest;

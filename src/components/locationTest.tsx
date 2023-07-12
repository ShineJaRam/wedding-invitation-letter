import { isMobile } from 'react-device-detect';

const LocationTest = () => {
  return (
    <div>
      <a
        href={`${
          isMobile
            ? 'nmap://place?name=%uBA85%uB3D9%uB77C%uB8E8%uCCB4&appname=https://shinejaram.github.io/wedding-invitation-letter/'
            : 'https://naver.me/xcKJWnge'
        }`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button>네이버 지도</button>
      </a>

      <a href={`${isMobile ? '' : 'http://kko.to/nR1-GIqr2D'}`} target="_blank" rel="noreferrer noopener">
        <button>카카오 지도</button>
      </a>
    </div>
  );
};

export default LocationTest;

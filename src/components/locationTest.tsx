import { isMobile } from 'react-device-detect';

const LocationTest = () => {
  'nmap://actionPath?parameter=value&appname={YOUR_APP_NAME}';

  return (
    <div>
      <a
        href={`${
          isMobile
            ? 'nmap://place?name=라루체웨딩&appname=https://shinejaram.github.io/wedding-invitation-letter/'
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

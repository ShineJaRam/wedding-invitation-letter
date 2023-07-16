import { isMobile } from 'react-device-detect';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Location = () => {
  const lat = 37.559116633916;
  const lng = 126.984455216505;

  return (
    <div className="w-full">
      <Map
        center={{
          lat,
          lng,
        }}
        style={{
          width: '100%',
          aspectRatio: 1,
        }}
      >
        <MapMarker position={{ lat, lng }}>
          <div className="w-[150px]">라루체 웨딩홀</div>
        </MapMarker>
      </Map>

      <div className="mt-2 flex justify-center gap-1">
        <a
          href={`${
            isMobile
              ? `nmap://place?id=13355258&appname=https://shinejaram.github.io/wedding-invitation-letter/`
              : 'https://naver.me/xcKJWnge'
          }`}
          target="_blank"
          rel="noreferrer noopener"
          className="px-2 py-1"
        >
          <button>네이버 지도</button>
        </a>
        <a
          href={`${isMobile ? `kakaomap://route?ep=${lat},${lng}&by=CAR` : 'http://kko.to/nR1-GIqr2D'}`}
          target="_blank"
          rel="noreferrer noopener"
          className="px-2 py-1"
        >
          <button>카카오 지도</button>
        </a>
        <a
          href={`${
            isMobile
              ? `tmap://?rGoName=${encodeURIComponent('명동 라루체 웨딩홀')}&rGoX=${lng}&rGoY=${lat}`
              : 'http://kko.to/nR1-GIqr2D'
          }`}
          target="_blank"
          rel="noreferrer noopener"
          className="px-2 py-1"
        >
          <button>티맵 지도</button>
        </a>
      </div>
    </div>
  );
};

export default Location;

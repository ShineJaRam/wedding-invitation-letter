import { isMobile } from 'react-device-detect';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Location = () => {
  const lat = 37.559116633916;
  const lng = 126.984455216505;

  return (
    <div className="mb-6 h-screen w-full snap-start">
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
    </div>
  );
};

export default Location;

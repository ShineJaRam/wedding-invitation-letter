import { useEffect, useRef } from 'react';

const Location = () => {
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
    </div>
  );
};

export default Location;

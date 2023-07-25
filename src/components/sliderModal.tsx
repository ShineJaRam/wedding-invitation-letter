import { FC, useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';

interface SliderModalProps {
  basicIdx?: number;
}

const SliderModal: FC<SliderModalProps> = ({ basicIdx = 0 }) => {
  const modalFiles = [...Array(47)].map(() => 0);
  const sliderRef = useRef<Slider>(null);
  const settings: Settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    dots: false,
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(basicIdx);
    }
  }, [basicIdx]);

  return (
    <div className="aspect-[9/16] w-[calc(100vw-80px)]">
      <Slider ref={sliderRef} {...settings} className="h-full w-full">
        {modalFiles.map((el, idx) => {
          const _idx = idx < 10 ? `0${idx}` : idx;

          return (
            <div
              key={idx}
              className="flex aspect-[9/16] w-[300px] items-center justify-center bg-black text-center  text-white"
            >
              <img
                className="h-full w-full rounded  object-cover"
                src={`images/gallary/picture-0${_idx}.jpg`}
                alt={`wedding gallary ${idx + 1}`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderModal;

import modalStore from '@/store/modalStore';
import { useState } from 'react';
import SliderModal from './sliderModal';

const Gallary = () => {
  const { openModal } = modalStore();
  const [showingIndex, setShowingIndex] = useState(9);

  const files = [...Array(showingIndex)].map(() => 0);

  const handleMore = () => {
    setShowingIndex((prev) => {
      if (prev === 45) {
        return (prev += 2);
      }

      if (prev >= 47) {
        return prev;
      }

      return (prev += 9);
    });
  };

  const onClickImg = (idx?: number) => {
    openModal({
      name: 'imgModals',
      contents: <SliderModal basicIdx={idx} />,
    });
  };

  return (
    <div className="py-5">
      <h1 className="mb-6 font-semibold">갤러리</h1>

      <div className="mb-6 flex flex-wrap gap-2">
        {files.map((_, idx) => {
          const _idx = idx < 10 ? `0${idx}` : idx;

          return (
            <div
              key={idx}
              className="aspect-square w-[calc((100%/3)-8px)] overflow-hidden rounded"
              onClick={() => onClickImg(idx)}
            >
              <img
                className="h-full w-full object-cover"
                src={`images/gallary/picture-0${_idx}.jpg`}
                alt={`wedding gallary ${idx + 1}`}
              />
            </div>
          );
        })}
      </div>
      {showingIndex !== 47 && (
        <button
          className="rounded-full border border-solid border-[var(--primary-color)] px-10 py-3 text-[var(--primary-color)]"
          onClick={handleMore}
        >
          더보기
        </button>
      )}
    </div>
  );
};

export default Gallary;

import { useState } from 'react';

const Gallary = () => {
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

  return (
    <div className="py-5">
      <h1>갤러리</h1>

      <div className="mb-2 flex flex-wrap gap-2">
        {files.map((_, idx) => {
          const _idx = idx < 10 ? `0${idx}` : idx;

          return (
            <div key={idx} className="aspect-square w-[calc((100%/3)-8px)] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={`images/gallary/picture-0${_idx}.jpg`}
                alt="wedding gallary"
              />
            </div>
          );
        })}
      </div>
      {showingIndex !== 47 && (
        <button className="" onClick={handleMore}>
          더보기
        </button>
      )}
    </div>
  );
};

export default Gallary;

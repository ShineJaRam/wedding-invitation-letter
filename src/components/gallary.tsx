import { useState } from 'react';

const Gallary = () => {
  const [showingIndex, setShowingIndex] = useState(9);

  const files = [...Array(47)].map(() => 0);

  return (
    <div className="py-5">
      <h1>갤러리</h1>

      <div className="flex flex-wrap gap-2">
        {files.map((_, idx) => {
          const _idx = idx < 10 ? `0${idx}` : idx;

          return (
            <div key={idx} className="aspect-square w-[109px] overflow-hidden">
              <img
                className="object-cover"
                src={`https://cdn.jsdelivr.net/gh/ShineJaRam/wedding-invitation-letter@gh-pages/images/gallary/picture-0${_idx}.jpg`}
                alt="wedding gallary"
              />
            </div>
          );
        })}
      </div>

      <button>더보기</button>
    </div>
  );
};

export default Gallary;

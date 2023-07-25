import { FC } from 'react';

interface ModalImgItemProps {
  idx: number;
}

const ModalImgItem: FC<ModalImgItemProps> = ({ idx }) => {
  const _idx = idx < 10 ? `0${idx}` : idx;

  return (
    <div className="flex aspect-[9/16] h-[70vh] items-center justify-center rounded">
      <img
        className="h-full w-full rounded object-cover"
        src={`images/gallary/picture-0${_idx}.jpg`}
        alt={`wedding gallary ${idx + 1}`}
      />
    </div>
  );
};

export default ModalImgItem;

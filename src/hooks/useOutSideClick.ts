import { RefObject, useEffect } from 'react';

export default function useOutSideClick(ref: RefObject<HTMLElement>, callback?: () => void) {
  const handleClick = (e: globalThis.MouseEvent) => {
    console.log(3);
    if (e.target instanceof HTMLElement && !ref.current?.contains(e.target)) {
      callback?.();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, []);
}

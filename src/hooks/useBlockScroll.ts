import { useEffect } from 'react';

export default function useBlockScroll() {
  useEffect(() => {
    const $body = document.querySelector('body');
    if ($body) {
      const overflow = $body.style.overflow;
      $body.style.overflow = 'hidden';
      return () => {
        $body.style.overflow = overflow;
      };
    }
  }, []);
}

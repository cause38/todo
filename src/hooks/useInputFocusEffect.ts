import { RefObject, useEffect } from 'react';

const useInputFocusEffect = (ref: RefObject<HTMLInputElement | null>) => {
  useEffect(() => {
    if (!ref || !ref.current) return;

    ref.current.focus();
  }, [ref]);
};

export default useInputFocusEffect;

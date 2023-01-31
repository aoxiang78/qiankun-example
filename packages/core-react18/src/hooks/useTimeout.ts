import { useEffect } from 'react';
import useLatest from './useLatest';


const useTimeout = (callback: () => void, delay?: number): void => {

  const fnRef = useLatest(callback)

  useEffect(() => {
    if (!delay || delay < 0) return;

    const timer = setTimeout(() => {
      fnRef.current();
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay])
};

export default useTimeout;

import { useEffect } from 'react';
import useLatest from './useLatest';


const useInterval = (callback: () => void, delay?: number, immediate?: boolean): void => {

  const fnRef = useLatest(callback)

  useEffect(() => {
    if (!delay || delay < 0) return;
    if (immediate) fnRef.current();

    const timer = setInterval(() => {
      fnRef.current();
    }, delay)

    return () => {
      clearInterval(timer)
    }
  }, [delay])

};

export default useInterval;

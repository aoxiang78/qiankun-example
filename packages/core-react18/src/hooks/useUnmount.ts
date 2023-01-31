import { useEffect, useRef } from 'react';

const useUnmount = (callback: () => void) => {

  const ref = useRef(callback);
  ref.current = callback;

  useEffect(() => () => {
      callback?.()
    },[]);
};

export default useUnmount;

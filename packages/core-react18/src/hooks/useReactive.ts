import { useRef } from 'react';
import useUpdate from './useUpdate';
import useCreation from './useCreation';

const observer = <T extends Record<string, any>>(initialVal: T, callback: () => void): T => {

  return new Proxy<T>(initialVal, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === 'object' ? observer(res, callback) : Reflect.get(target, key);
    },
    set(target, key, val) {
      const ret = Reflect.set(target, key, val);
      callback();
      return ret;
    },
  });
}

const useReactive = <T extends Record<string, any>>(initialState: T): T => {
  const ref = useRef<T>(initialState);
  const update = useUpdate();

  return useCreation(() => {
    return observer(ref.current, () => {
      update();
    });
  }, [])
};

export default useReactive;

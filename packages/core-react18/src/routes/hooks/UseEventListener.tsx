import React, { FC, useRef, useState } from 'react';
import { useEventListener } from '../../hooks'

interface IProps {
}

const UseEventListener: FC<IProps> = () => {
  const [count, setCount] = useState<number>(0)
  const [state, setState] = useState<boolean>(true)
  const [key, setKey] = useState<string>('')
  const ref = useRef(null);

  useEventListener('click', () => setCount(v => v + 1), ref)
  useEventListener('keydown', (ev) => {
    console.log('1', ev.key)
    setKey(ev.key)
  });

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => {
        setState(v => !v)
      }}>{state ? '卸载' : '挂载'}</button>
      {
        state && <div>
          <div>数字：{count}</div>
          <button ref={ref}>+</button>
          <div>监听键盘事件：{key}</div>
        </div>
      }

    </div>
  );
}

export default UseEventListener;

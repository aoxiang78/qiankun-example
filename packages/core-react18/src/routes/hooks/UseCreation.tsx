import React, { FC, useState } from 'react';
import { useCreation } from '../../hooks';

interface IProps {
}

const UseCreation: FC<IProps> = () => {
  const [count, setCount] = useState<number>(0);

  const getNowData = () => {
    return Math.random()
  }

  const nowData = useCreation(() => getNowData(), []);

  return (
    <div>
      <div>count：{count}</div>
      <button onClick={() => setCount(v => v + 1)}>+</button>
      <div>调用getNowData()：{getNowData()}</div>
      <div>通过useCreation调用getNowData()：{nowData}</div>
    </div>
  );
}

export default UseCreation;

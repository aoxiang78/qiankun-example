import React, { FC, useState } from 'react';
import { useInterval } from "../../hooks";

interface IProps {
}

const UseInterval: FC<IProps> = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(v => v + 1)
  }, 2000);

  return (
    <div>
      2秒后加1: {count}
    </div>
  );
}

export default UseInterval;

import React, { FC, useState } from 'react';
import { useTimeout } from "../../hooks";

interface IProps {
}

const UseTimeout: FC<IProps> = () => {
  const [count, setCount] = useState(0);

  useTimeout(() => {
    setCount(v => v + 1)
  }, 2000);

  return (
    <div>
      2秒后加1: {count}
    </div>
  );
}

export default UseTimeout;

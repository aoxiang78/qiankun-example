import React, { FC, useEffect, useState } from 'react';
import { useLatest } from '../../hooks';

interface IProps {
}

const UseLatest: FC<IProps> = () => {
  const [count, setCount] = useState(0);
  const handlerRef = useLatest(count)

  useEffect(() => {
    const interval = setInterval(() => {
      // setCount(v => v + 1);
      setCount(handlerRef.current + 1);
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>count:{count}</p>
    </div>
  );
}

export default UseLatest;

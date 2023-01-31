import { FC, useState } from 'react';
import { usePow } from '../../hooks';

interface IProps {
}

const UsePow: FC<IProps> = () => {
  const [count, setCount] = useState<number>(0);
  const data = usePow([1, 2, 3, 4]);
  return (
    <div>
      <div>count：{count}</div>
      <button onClick={() => setCount(v => v + 1)}>+</button>
      <div>usePow：{JSON.stringify(data)}</div>
    </div>
  );
}

export default UsePow;

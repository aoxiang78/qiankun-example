import React, { FC } from 'react';
import { useUpdate } from '../../hooks'

interface IProps {
}

const UseUpdate: FC<IProps> = () => {
  const update = useUpdate();
  return (
    <div>
      <div>time：{Date.now()}</div>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default UseUpdate;

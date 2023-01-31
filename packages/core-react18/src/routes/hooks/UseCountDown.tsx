import React, { FC, useState } from 'react';
import { useCountDown } from '../../hooks'

interface IProps {
}

const UseCountDown: FC<IProps> = () => {
  const [_, formattedRes] = useCountDown({
    targetDate: '2022-12-31 24:00:00',
  });

  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  const [count, setCount] = useState<number>();

  const [countdown] = useCountDown({
    targetDate: count,
    onEnd: () => {
      console.log('结束')
    },
  });

  return (
    <div>
      <div> 距离 2022-12-31 24:00:00 还有 {days} 天 {hours} 时 {minutes} 分 {seconds} 秒 {milliseconds} 毫秒</div>
      <div>
        <p>动态变化：</p>
        <button disabled={countdown !== 0} onClick={() => setCount(Date.now() + 3000)}>
          {countdown === 0 ? '开始' : `还有 ${Math.round(countdown / 1000)}s`}
        </button>
        <button onClick={() => setCount(undefined)}>停止</button>
      </div>
    </div>
  );
}

export default UseCountDown;

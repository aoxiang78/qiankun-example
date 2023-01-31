import React, { FC, memo, useState } from 'react';
import { useMount, useUnmount } from '../../hooks'

const Child = memo(() => {
  useMount(() => {
    console.log('组件已挂载')
  });

  useUnmount(() => {
    console.log('组件已卸载')
  })

  return <div>i am Child</div>
})

interface IProps {
}

const UseMount: FC<IProps> = () => {
  const [state, setState] = useState<boolean>(false)
  return (
    <div>
      <button onClick={() => {
        setState(v => !v)
      }}>{state ? '卸载' : '挂载'}</button>
      {state && <Child/>}
    </div>
  );
}

export default UseMount;

// https://delaprada.com/2021/03/13/React-useEffect-Hook%E7%9A%84%E5%AF%B9%E8%B1%A1-%E6%95%B0%E7%BB%84%E4%BE%9D%E8%B5%96/
// https://juejin.cn/post/6844903954539626510

import { memo, useCallback, useMemo, useRef, useState } from "react";
import isDeepEqual from 'fast-deep-equal/react'

interface Iname {
  color: string;
  name: string;
}

interface IChild {
  name: Iname;
  onClick: (name: string) => void;
}

const Child = ({ name, onClick }: IChild) => {
  console.log('子组件?')
  return (
    <>
      <div style={{ color: name.color }}>我是一个子组件，父级传过来的数据：{name.name}</div>
      <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
    </>
  );
}
const ChildMemo = memo(Child);

export default function () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({a:{b:{c:[{d:[{name: 'Child组件'}]}]}}});
  const teamRef = useRef(name)

  if (!isDeepEqual(teamRef.current, name)) {
    teamRef.current = name
  }

  return (
    <>
      <button onClick={(e) => {
        setCount(count + 1)
      }}>加1
      </button>
      <p>count:{count}</p>
      <ChildMemo
        name={
          useMemo(() => {
            return {
              name: teamRef.current.a.b.c[0].d[0].name,
              color: teamRef.current.a.b.c[0].d[0].name.indexOf('name') !== -1 ? 'red' : 'green'
            }
          }, [teamRef.current])
        }
        onClick={
          useCallback((newName) => setName({a:{b:{c:[{d:[{name: newName}]}]}}}), [])
        }/>
    </>
  )
}

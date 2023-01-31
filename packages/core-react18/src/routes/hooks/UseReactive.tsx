import React, { FC } from 'react';
import { useReactive } from '../../hooks'

interface IProps {
}

const UseReactive: FC<IProps> = () => {

  const data = useReactive({
    count: 0,
    name: 'admin',
    flag: true,
    arr: [] as number[],
    bug: '',
    bugs: ['admin', 'react', 'hook'],
    addBug(bug: string) {
      this.bugs.push(bug);
    },
    get bugsCount() {
      return this.bugs.length;
    },
  })

  return (
    <div>
      <h2>basic type</h2>
      <div> menubar：{data.count}</div>
      <div>
        <button onClick={() => data.count++}>+</button>
        <button onClick={() => data.count--}>-</button>
        <button onClick={() => data.count = 7}>7</button>
      </div>
      <div> string：{data.name}</div>
      <div>
        <button onClick={() => data.name = 'admin'}>set admin</button>
        <button onClick={() => data.name = 'Domesy'}>set Domesy</button>
      </div>
      <div> boolean：{`${data.flag}`}</div>
      <div>
        <button onClick={() => data.flag = !data.flag}>true/fable</button>
      </div>
      <div> []：{JSON.stringify(data.arr)}</div>
      <div>
        <button onClick={() => data.arr.push(Math.floor(Math.random() * 100))}>push</button>
        <button onClick={() => data.arr.pop()}>pop</button>
        <button onClick={() => data.arr.shift()}>shift</button>
        <button onClick={() => data.arr.unshift(Math.floor(Math.random() * 100))}>unshift</button>
        <button onClick={() => data.arr.reverse()}>reverse</button>
        <button onClick={() => data.arr.sort()}>sort</button>
      </div>
      <h2>Attributes：</h2>
      <div>bugsCount：{data.bugsCount} 个</div>
      <div>list:
        {
          data.bugs.map((bug, index: number) => (<span key={index}>{bug} ,</span>))
        }
      </div>
      <form
        onSubmit={(e) => {
          data.bug ? data.addBug(data.bug) : data.addBug('domes');
          data.bug = '';
          e.preventDefault();
        }}
      >
        <input type="text" value={data.bug} onChange={(e) => (data.bug = e.target.value)}/>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => data.bugs.pop()}>Delete</button>
      </form>
    </div>
  );
}

export default UseReactive;

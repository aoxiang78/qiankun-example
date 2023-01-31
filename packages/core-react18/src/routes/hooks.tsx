import React, { FC, useEffect, useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import * as useList from '../hooks'

interface Menu {
  name: string;
  path: string;
}

interface HooksProps {
}

const Hooks: FC<HooksProps> = () => {
  const [menu, setMenu] = useState<Menu[]>([{
    name: 'UseMemo',
    path: '/hooks/UseMemo',
  }]);

  useEffect(() => {
    const list = Object.keys(useList).map((key) => ({
      name: key,
      path: `/hooks/${key}`
    }))
    setMenu(([] as Menu[]).concat(menu, list));
  }, [])

  return (
    <div>
      <ul>
        {menu.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path}>{item.name} </NavLink>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
}

export default Hooks;

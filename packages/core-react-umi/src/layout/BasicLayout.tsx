import React from 'react';
import { Link } from 'umi';

const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/vue2">Vue2</Link> |
      <Link to="/vue3">Vue3</Link> |
      <Link to="/vue3-vite">Vue3-vite</Link> |
      <Link to="/react-umi">react-umi</Link>
      {children}
    </div>
  )
};
export default Layout;

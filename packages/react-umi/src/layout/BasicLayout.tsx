import React from 'react';
import { Link } from 'umi';

const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/profile">Profile</Link>
      {children}
    </div>
  )
};
export default Layout;

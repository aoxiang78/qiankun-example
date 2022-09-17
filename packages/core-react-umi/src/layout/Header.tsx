import React from 'react';
import { Link, useModel } from 'umi';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  const { globalModel } = useModel('useGlobalModel');

  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/profile">Profile</Link> |
      <Link to="/vue2">Vue2</Link> |
      <Link to="/vue3">Vue3</Link> |
      <Link to="/vue3-vite">Vue3-vite</Link> |
      <Link to="/react-umi">react-umi</Link>
      Signed in as <strong>{globalModel.name}</strong>
    </div>
  )
};
export default Header;

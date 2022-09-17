import React from 'react';
import Header from './Header';

const BasicLayout: React.FC = ({ children }) => {

  return (
    <div>
      <Header/>
      {children}
    </div>
  )
};
export default BasicLayout;

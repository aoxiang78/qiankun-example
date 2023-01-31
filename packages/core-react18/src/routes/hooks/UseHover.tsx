import React, { FC } from 'react';
import { useHover } from '../../hooks';

interface IProps {
}

const UseHover: FC<IProps> = () => {
  const [hoverRef, isHovered] = useHover();
  return (
    <div ref={hoverRef}>
      {isHovered ? '😁' : '☹️'}
    </div>
  );
}

export default UseHover;

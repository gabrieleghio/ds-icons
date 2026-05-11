import React from 'react';
import type { IconProps } from '../../types';

export const ShapeFaceShapeRound32 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 32 32" width={32} height={32}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M15.5933 29.8201C8.16328 29.8201 2.11328 23.7701 2.11328 16.3401C2.11328 8.91011 8.16328 2.86011 15.5933 2.86011C23.0233 2.86011 29.0733 8.91011 29.0733 16.3401C29.0733 23.7701 23.0233 29.8201 15.5933 29.8201ZM15.5933 4.49011C9.06328 4.49011 3.74328 9.81011 3.74328 16.3401C3.74328 22.8701 9.06328 28.1901 15.5933 28.1901C22.1233 28.1901 27.4433 22.8701 27.4433 16.3401C27.4433 9.81011 22.1233 4.49011 15.5933 4.49011Z" fill="black"/>
  </svg>
);

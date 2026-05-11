import React from 'react';
import type { IconProps } from '../../types';

export const GoToFirstArrow32 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 32 32" width={32} height={32}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M25.7 30.09C25.48 30.09 25.28 30.01 25.12 29.85L11.9 16.63C11.74 16.48 11.66 16.27 11.66 16.05C11.66 15.83 11.75 15.63 11.9 15.47L25.12 2.26C25.27 2.11 25.48 2.02 25.7 2.02C25.92 2.02 26.12 2.1 26.28 2.26C26.43 2.41 26.52 2.62 26.52 2.84C26.52 3.06 26.44 3.26 26.28 3.42L13.6 16.1L26.28 28.71C26.44 28.86 26.52 29.07 26.52 29.29C26.52 29.51 26.43 29.71 26.28 29.87C26.13 30.02 25.92 30.11 25.7 30.11V30.09Z" fill="black"/>
<path d="M6.82 29.86C6.37 29.86 6 29.49 6 29.04V2.82C6 2.37 6.37 2 6.82 2C7.27 2 7.64 2.37 7.64 2.82V29.04C7.64 29.49 7.27 29.86 6.82 29.86Z" fill="black"/>
  </svg>
);

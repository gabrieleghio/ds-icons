import React from 'react';
import type { IconProps } from '../../types';

export const GoToFirstArrow20 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 20 20" width={20} height={20}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M15.43 18.8C15.26 18.8 15.11 18.73 14.99 18.62L6.72 10.35C6.6 10.23 6.54 10.07 6.54 9.91C6.54 9.75 6.6 9.58 6.72 9.46L14.98 1.19C15.1 1.07 15.26 1 15.43 1C15.6 1 15.76 1.07 15.88 1.19C16 1.31 16.06 1.46 16.06 1.63C16.06 1.8 15.99 1.96 15.88 2.07L8.13 9.82C8.13 9.82 8.09 9.92 8.13 9.96L15.88 17.71C16.12 17.96 16.13 18.35 15.88 18.6C15.76 18.72 15.6 18.79 15.43 18.79V18.8Z" fill="black"/>
<path d="M3.63 18.65C3.28 18.65 3 18.37 3 18.02V1.63C3 1.28 3.28 1 3.63 1C3.98 1 4.26 1.28 4.26 1.63V18.02C4.26 18.37 3.98 18.65 3.63 18.65Z" fill="black"/>
  </svg>
);

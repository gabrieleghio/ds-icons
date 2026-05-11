import React from 'react';
import type { IconProps } from '../../types';

export const GoToFirstArrow16 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 16 16" width={16} height={16}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M13.02 15.39C12.87 15.39 12.72 15.33 12.61 15.22L6 8.61C5.89 8.5 5.83 8.35 5.83 8.2C5.83 8.04 5.89 7.9 6 7.79L12.61 1.17C12.72 1.06 12.87 1 13.02 1C13.17 1 13.32 1.06 13.43 1.17C13.54 1.28 13.6 1.42 13.6 1.58C13.6 1.74 13.54 1.88 13.43 1.99L7.23 8.19L13.43 14.39C13.66 14.62 13.66 14.99 13.43 15.21C13.32 15.32 13.17 15.38 13.02 15.38V15.39Z" fill="black"/>
<path d="M3.58 15.27C3.26 15.27 3 15.01 3 14.69V1.58C3 1.26 3.26 1 3.58 1C3.9 1 4.16 1.26 4.16 1.58V14.69C4.16 15.01 3.9 15.27 3.58 15.27Z" fill="black"/>
  </svg>
);

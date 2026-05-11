import React from 'react';
import type { IconProps } from '../../types';

export const WashDryNormal16 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 16 16" width={16} height={16}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M8.26 13.67C5.27 13.67 2.84 11.24 2.84 8.25C2.84 5.26 5.27 2.85 8.26 2.85C11.25 2.85 13.68 5.28 13.68 8.26C13.68 11.24 11.25 13.68 8.26 13.68V13.67ZM8.26 4.01C5.92 4.01 4.01 5.92 4.01 8.26C4.01 10.6 5.92 12.51 8.26 12.51C10.6 12.51 12.51 10.6 12.51 8.26C12.51 5.92 10.6 4.01 8.26 4.01Z" fill="black"/>
<path d="M1.58 15.52C1.26 15.52 1 15.26 1 14.94V1.58C1 1.26 1.26 1 1.58 1H14.94C15.26 1 15.52 1.26 15.52 1.58V14.94C15.52 15.26 15.26 15.52 14.94 15.52H1.58ZM14.36 14.36V2.16H2.16V14.35H14.36V14.36Z" fill="black"/>
  </svg>
);

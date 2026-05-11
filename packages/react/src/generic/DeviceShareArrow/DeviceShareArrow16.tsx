import React from 'react';
import type { IconProps } from '../../types';

export const DeviceShareArrow16 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 16 16" width={16} height={16}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M8.31 10.38C7.99 10.38 7.73 10.12 7.73 9.8V3L6.12 4.61C6.01 4.72 5.86 4.78 5.71 4.78C5.56 4.78 5.41 4.72 5.3 4.61C5.07 4.38 5.07 4.01 5.3 3.78L7.91 1.17C7.96 1.11 8.03 1.07 8.1 1.04C8.17 1.01 8.24 1 8.32 1C8.4 1 8.47 1.02 8.54 1.05C8.61 1.08 8.67 1.12 8.73 1.18L11.34 3.79C11.57 4.02 11.57 4.39 11.34 4.61C11.23 4.72 11.08 4.78 10.93 4.78C10.78 4.78 10.63 4.72 10.52 4.61L8.9 2.99V9.79C8.9 10.11 8.64 10.37 8.32 10.37L8.31 10.38Z" fill="black"/>
<path d="M14.61 6.4V14.63C14.61 14.95 14.35 15.21 14.03 15.21H2.58C2.26 15.21 2 14.95 2 14.63V6.4C2 6.08 2.26 5.82 2.58 5.82H6.72V6.98H3.17V14.05H13.45V6.98H9.89V5.82H14.03C14.35 5.82 14.61 6.08 14.61 6.4Z" fill="black"/>
  </svg>
);

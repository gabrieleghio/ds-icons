import React from 'react';
import type { IconProps } from '../../types';

export const Color32 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 32 32" width={32} height={32}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M19.47 3.81C18.76 2.68 17.54 2 16.21 2C14.88 2 13.66 2.67 12.95 3.8C9.78 8.86 6 15.62 6 19.1C6 24.73 10.58 29.3 16.2 29.3C21.82 29.3 26.4 24.72 26.4 19.1C26.4 15.62 22.62 8.86 19.45 3.8L19.47 3.81ZM16.21 27.98V3.34C17.08 3.34 17.87 3.78 18.34 4.52C22.69 11.46 25.08 16.64 25.08 19.11C25.08 24 21.1 27.98 16.21 27.98Z" fill="black"/>
  </svg>
);

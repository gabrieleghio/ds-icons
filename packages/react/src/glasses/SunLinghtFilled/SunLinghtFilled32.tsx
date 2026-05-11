import React from 'react';
import type { IconProps } from '../../types';

export const SunLinghtFilled32 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 32 32" width={32} height={32}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M31.02 16.01H27.31M4.71 16.01H1M16.01 1V4.7M16.01 27.31V31.01M26.62 5.4L24 8.02M8.02 24L5.4 26.62M26.62 26.62L24 24M8.02 8.02L5.4 5.4M23.53 15.93C23.53 20.0832 20.1632 23.45 16.01 23.45C11.8568 23.45 8.49 20.0832 8.49 15.93C8.49 11.7768 11.8568 8.41 16.01 8.41C20.1632 8.41 23.53 11.7768 23.53 15.93Z" stroke="black" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

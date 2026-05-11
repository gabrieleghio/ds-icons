import React from 'react';
import type { IconProps } from '../../types';

export const Downloaded32 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 32 32" width={32} height={32}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M2.82 28.68C2.37 28.68 2 28.31 2 27.86V21.1C2 20.65 2.37 20.28 2.82 20.28C3.27 20.28 3.64 20.65 3.64 21.1V27.09L28.5 27.04L28.45 21.1C28.45 20.65 28.82 20.28 29.27 20.28C29.72 20.28 30.09 20.65 30.09 21.1V27.86C30.09 28.31 29.72 28.68 29.27 28.68H2.82Z" fill="black"/>
<path d="M12.77 18.72C12.55 18.72 12.35 18.64 12.19 18.48L5.64 11.93C5.32 11.61 5.32 11.09 5.64 10.78C5.8 10.63 6 10.54 6.22 10.54C6.44 10.54 6.64 10.62 6.8 10.78L12.81 16.79L25.29 4.24C25.44 4.08 25.65 4 25.87 4C26.09 4 26.29 4.08 26.45 4.24C26.6 4.39 26.69 4.6 26.69 4.82C26.69 5.04 26.61 5.24 26.45 5.4L13.35 18.5C13.2 18.65 12.99 18.74 12.77 18.74V18.72Z" fill="black"/>
  </svg>
);

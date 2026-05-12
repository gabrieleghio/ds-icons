import React from 'react';
import type { IconProps } from '../../types';

export const GoToFirstArrow24 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 24 24" width={24} height={24}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M18.92 22.36C18.72 22.36 18.53 22.28 18.39 22.14L8.47 12.22C8.33 12.08 8.25 11.89 8.25 11.69C8.25 11.49 8.33 11.3 8.47 11.16L18.38 1.23C18.52 1.09 18.71 1.01 18.91 1.01C19.11 1.01 19.3 1.09 19.44 1.23C19.58 1.37 19.66 1.56 19.66 1.76C19.66 1.96 19.58 2.15 19.44 2.29L10.14 11.59C10.14 11.59 10.09 11.71 10.14 11.76L19.44 21.06C19.73 21.35 19.73 21.83 19.44 22.13C19.3 22.27 19.1 22.35 18.9 22.35L18.92 22.36Z"/>
<path d="M4.76 22.18C4.34 22.18 4 21.84 4 21.43V1.76C4 1.34 4.34 1 4.76 1C5.18 1 5.51 1.34 5.51 1.76V21.42C5.51 21.84 5.17 22.17 4.76 22.17V22.18Z"/>
  </svg>
);

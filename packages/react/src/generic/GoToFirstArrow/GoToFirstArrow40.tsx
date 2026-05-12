import React from 'react';
import type { IconProps } from '../../types';

export const GoToFirstArrow40 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 40 40" width={40} height={40}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M16.08 20.38L32.02 4.44C32.35 4.11 32.35 3.59 32.02 3.26C31.69 2.93 31.17 2.93 30.84 3.26L14.31 19.79C13.98 20.12 13.98 20.64 14.31 20.97L30.84 37.5C31 37.66 31.22 37.74 31.43 37.74C31.64 37.74 31.86 37.66 32.02 37.5C32.35 37.17 32.35 36.65 32.02 36.32L16.08 20.38Z"/>
<path d="M7.83 3C7.37 3 7 3.37 7 3.83V36.6C7 37.06 7.37 37.43 7.83 37.43C8.29 37.43 8.66 37.06 8.66 36.6V3.84C8.66 3.38 8.29 3.01 7.83 3.01V3Z"/>
  </svg>
);

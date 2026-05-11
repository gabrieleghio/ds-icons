import React from 'react';
import type { IconProps } from '../../types';

export const SunLinghtFilled40 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 40 40" width={40} height={40}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M38.52 19.76H33.89M5.63 19.76H1M19.76 1V5.63M19.76 33.89V38.52M33.02 6.49L29.75 9.77M9.77 29.75L6.5 33.02M33.02 33.02L29.75 29.75M9.77 9.77L6.5 6.49M29.16 19.66C29.16 24.8515 24.9515 29.06 19.76 29.06C14.5685 29.06 10.36 24.8515 10.36 19.66C10.36 14.4685 14.5685 10.26 19.76 10.26C24.9515 10.26 29.16 14.4685 29.16 19.66Z" stroke="black" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

import React from 'react';
import type { IconProps } from '../../types';

export const Plus16 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 16 16" width={16} height={16}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <g clip-path="url(#clip0_2055_288)">
<path d="M8.24 15.48C7.89 15.48 7.61 15.2 7.61 14.85V1.63C7.61 1.28 7.89 1 8.24 1C8.59 1 8.87 1.28 8.87 1.63V14.85C8.87 15.2 8.59 15.48 8.24 15.48Z"/>
<path d="M1.63 8.87C1.28 8.87 1 8.59 1 8.24C1 7.89 1.28 7.61 1.63 7.61H14.84C15.19 7.61 15.47 7.89 15.47 8.24C15.47 8.59 15.19 8.87 14.84 8.87H1.63Z"/>
</g>
<defs>
<clipPath id="clip0_2055_288">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
  </svg>
);

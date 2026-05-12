import React from 'react';
import type { IconProps } from '../../types';

export const CropArrow32 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 32 32" width={32} height={32}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M25.01 29.61C24.56 29.61 24.19 29.24 24.19 28.79V7.13L2.82 7.18C2.37 7.18 2 6.81 2 6.36C2 5.91 2.37 5.54 2.82 5.54H25.01C25.46 5.54 25.83 5.91 25.83 6.36V28.79C25.83 29.24 25.46 29.61 25.01 29.61Z"/>
<path d="M6.33 26.07C5.88 26.07 5.51 25.7 5.51 25.25V2.82C5.51 2.37 5.88 2 6.33 2C6.78 2 7.15 2.37 7.15 2.82V24.49L28.52 24.44C28.97 24.44 29.34 24.81 29.34 25.26C29.34 25.71 28.97 26.08 28.52 26.08H6.33V26.07Z"/>
  </svg>
);

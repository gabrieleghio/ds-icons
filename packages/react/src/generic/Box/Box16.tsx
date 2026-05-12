import React from 'react';
import type { IconProps } from '../../types';

export const Box16 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 16 16" width={16} height={16}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M7.56 15.7L1.33 12.66C1.13 12.56 1 12.36 1 12.14V4.65C1 4.39 1.12 4.19 1.32 4.09L7.42 1.06C7.5 1.02 7.59 1 7.68 1C7.77 1 7.86 1.02 7.94 1.06L14.06 4.09C14.26 4.19 14.39 4.39 14.39 4.61V12.14C14.39 12.36 14.26 12.56 14.06 12.66L7.95 15.66C7.86 15.7 7.78 15.72 7.69 15.72L7.56 15.7ZM7.11 14.2L7.13 7.99L2.16 5.59V11.77L7.11 14.2ZM8.28 14.2L13.22 11.78V5.6L8.3 7.98L8.28 14.21V14.2ZM7.73 6.99L12.53 4.63L10.5 3.63L5.64 5.98L7.73 6.99ZM4.34 5.35L9.18 2.98L7.68 2.24L2.85 4.63L4.34 5.35Z"/>
  </svg>
);

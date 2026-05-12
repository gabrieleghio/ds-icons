import React from 'react';
import type { IconProps } from '../../types';

export const CropArrow48 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 48 48" width={48} height={48}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M38.28 44.96C37.73 44.96 37.28 44.51 37.28 43.96V11.31H5C4.45 11.31 4 10.86 4 10.31C4 9.76 4.45 9.31 5 9.31H38.29C38.84 9.31 39.29 9.76 39.29 10.31V43.96C39.29 44.51 38.84 44.96 38.29 44.96H38.28Z"/>
<path d="M10.26 39.65C9.71 39.65 9.26 39.2 9.26 38.65V5C9.26 4.45 9.71 4 10.26 4C10.81 4 11.26 4.45 11.26 5V37.65H43.55C44.1 37.65 44.55 38.1 44.55 38.65C44.55 39.2 44.1 39.65 43.55 39.65H10.26Z"/>
  </svg>
);

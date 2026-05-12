import React from 'react';
import type { IconProps } from '../../types';

export const CircleStop48 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 48 48" width={48} height={48}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M39.38 41.38C39.12 41.38 38.87 41.28 38.67 41.09L6.88 9.29C6.49 8.9 6.49 8.27 6.88 7.88C7.27 7.49 7.9 7.49 8.29 7.88L40.08 39.67C40.47 40.06 40.47 40.69 40.08 41.08C39.88 41.28 39.63 41.37 39.37 41.37L39.38 41.38Z"/>
<path d="M23.5 47.99C10.54 47.99 0 37.45 0 24.49C0 11.53 10.54 1 23.5 1C36.46 1 47 11.54 47 24.49C47 37.44 36.46 47.99 23.5 47.99ZM23.5 3C11.64 3 2 12.64 2 24.49C2 36.34 11.64 45.99 23.5 45.99C35.36 45.99 45 36.35 45 24.49C45 12.63 35.36 3 23.5 3Z"/>
  </svg>
);

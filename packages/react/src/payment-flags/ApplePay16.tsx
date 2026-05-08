import React from 'react';
import type { IconProps } from '../types';

export const ApplePay16 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 24 16" width={24} height={16}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <rect width="24" height="16"/>
  </svg>
);

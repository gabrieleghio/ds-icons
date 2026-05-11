import React from 'react';
import type { IconProps } from '../../types';

export const ShapeFaceShapeDiamond32 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 32 32" width={32} height={32}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M16.2393 30.3699C15.9593 30.3699 15.7093 30.2299 15.5593 29.9999L7.0393 16.9299C6.8593 16.6599 6.8593 16.3099 7.0393 16.0399L15.5593 2.95986C15.6993 2.73986 15.9593 2.60986 16.2393 2.60986C16.5193 2.60986 16.7793 2.73986 16.9193 2.95986L25.4393 16.0299C25.6193 16.2999 25.6193 16.6499 25.4393 16.9199L16.9193 29.9899C16.7693 30.2199 16.5093 30.3599 16.2393 30.3599V30.3699ZM8.6693 16.5099L16.2793 28.1199L23.8093 16.4499L16.2393 4.89986L8.6693 16.4999V16.5099Z" fill="black"/>
  </svg>
);

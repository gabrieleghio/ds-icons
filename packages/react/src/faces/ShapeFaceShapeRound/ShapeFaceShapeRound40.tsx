import React from 'react';
import type { IconProps } from '../../types';

export const ShapeFaceShapeRound40 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 40 40" width={40} height={40}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M19.54 3.0105C28.7576 3.0105 36.2597 10.5126 36.2598 19.7302C36.2598 28.9478 28.7577 36.45 19.54 36.45C10.3225 36.4499 2.82031 28.9478 2.82031 19.7302C2.82035 10.5127 10.3225 3.01054 19.54 3.0105ZM19.54 4.78003C11.2977 4.78007 4.58989 11.4879 4.58984 19.7302C4.58984 27.9726 11.2977 34.6804 19.54 34.6804C27.7824 34.6804 34.4902 27.9726 34.4902 19.7302C34.4902 11.4879 27.7824 4.78003 19.54 4.78003Z" fill="black"/>
  </svg>
);

import React from 'react';
import type { IconProps } from '../../types';

export const ShapeFaceShapeOval32 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 32 32" width={32} height={32}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M15.5641 29.565C9.60414 29.565 4.74414 23.515 4.74414 16.085C4.74414 8.65498 9.60414 2.60498 15.5641 2.60498C21.5241 2.60498 26.3841 8.65498 26.3841 16.085C26.3841 23.515 21.5341 29.565 15.5641 29.565ZM15.5641 4.23498C10.5041 4.23498 6.38414 9.55498 6.38414 16.085C6.38414 22.615 10.5041 27.935 15.5641 27.935C20.6241 27.935 24.7441 22.615 24.7441 16.085C24.7441 9.55498 20.6241 4.23498 15.5641 4.23498Z"/>
  </svg>
);

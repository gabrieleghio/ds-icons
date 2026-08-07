import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderOakley0148 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M24.369 43.425C16.439 43.425 9.99902 36.975 9.99902 29.055C9.99902 21.135 23.049 5.005 23.599 4.345C23.979 3.885 24.759 3.885 25.139 4.345C25.689 5.015 38.739 20.765 38.739 29.055C38.739 37.345 32.289 43.425 24.369 43.425ZM24.369 6.575C21.559 10.105 11.999 22.565 11.999 29.055C11.999 35.875 17.549 41.425 24.369 41.425C31.189 41.425 36.739 35.875 36.739 29.055C36.739 22.235 27.179 10.095 24.369 6.575Z"/>`)}
  </svg>`;

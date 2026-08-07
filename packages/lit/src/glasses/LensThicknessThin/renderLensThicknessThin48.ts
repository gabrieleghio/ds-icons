import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderLensThicknessThin48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M26.67 2H21.67C17.13 2 17 21.67 17 23.92C17 26.17 17.13 45.84 21.67 45.84H26.67C31.21 45.84 31.34 26.17 31.34 23.92C31.34 21.67 31.21 2 26.67 2ZM19 23.92C19 11.33 20.8 4.72 21.76 4H24.48C22.09 9.06 22 22.12 22 23.92C22 25.72 22.09 38.78 24.48 43.84H21.76C20.8 43.12 19 36.51 19 23.92ZM26.67 43.76C25.7 42.73 24 36.14 24 23.92C24 11.7 25.7 5.11 26.67 4.08C27.64 5.11 29.34 11.7 29.34 23.92C29.34 36.14 27.64 42.73 26.67 43.76Z"/>`)}
  </svg>`;

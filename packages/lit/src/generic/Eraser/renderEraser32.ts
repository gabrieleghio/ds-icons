import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderEraser32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M2.82 27.69C2.37 27.69 2 27.32 2 26.87C2 26.42 2.37 26.05 2.82 26.05H13.27L7.04 19.94C6.89 19.79 6.8 19.58 6.8 19.36C6.8 19.14 6.88 18.94 7.04 18.78L21.58 4.24C21.73 4.09 21.94 4 22.16 4C22.38 4 22.58 4.08 22.74 4.24L30.24 11.74C30.56 12.06 30.56 12.58 30.24 12.89L15.7 27.43C15.63 27.51 15.54 27.56 15.43 27.61C15.33 27.65 15.22 27.67 15.12 27.67H2.82V27.69ZM8.74 19.4L15.16 25.75L18.02 22.82L11.64 16.51L8.75 19.4H8.74ZM12.75 15.39L19.17 21.74L28.55 12.3L22.17 5.99L12.76 15.4L12.75 15.39Z"/>`)}
  </svg>`;

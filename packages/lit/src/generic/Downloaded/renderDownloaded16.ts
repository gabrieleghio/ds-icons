import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderDownloaded16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M14.85 10.16C14.5 10.16 14.22 10.44 14.22 10.79V13.54H2.26V10.79C2.26 10.44 1.98 10.16 1.63 10.16C1.28 10.16 1 10.44 1 10.79V14.17C1 14.52 1.28 14.8 1.63 14.8H14.85C15.2 14.8 15.48 14.52 15.48 14.17V10.79C15.48 10.44 15.2 10.16 14.85 10.16Z"/>
<path d="M6.15 9.64C6.27 9.76 6.43 9.83 6.6 9.83C6.77 9.83 6.93 9.76 7.05 9.64L13.6 3.09C13.72 2.97 13.79 2.81 13.79 2.64C13.79 2.47 13.72 2.31 13.6 2.19C13.48 2.07 13.32 2 13.15 2C12.98 2 12.82 2.07 12.7 2.19L6.6 8.29L3.77 5.47C3.65 5.35 3.49 5.28 3.32 5.28C3.15 5.28 2.99 5.35 2.87 5.46C2.75 5.57 2.68 5.74 2.68 5.91C2.68 6.08 2.75 6.24 2.87 6.36L6.15 9.64Z"/>`)}
  </svg>`;

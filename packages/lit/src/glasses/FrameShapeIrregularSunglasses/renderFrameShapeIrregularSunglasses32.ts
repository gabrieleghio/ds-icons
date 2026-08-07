import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFrameShapeIrregularSunglasses32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M18.9 21.77C18.45 21.77 18.08 21.4 18.08 20.95V15.59C18.08 15.29 18.11 14.99 18.16 14.67C17.5 14.36 16.71 14.17 15.92 14.17C15.13 14.17 14.34 14.36 13.65 14.72C13.73 14.99 13.76 15.29 13.76 15.58V20.94C13.76 21.39 13.39 21.76 12.94 21.76H7.58C4.5 21.76 2 19.26 2 16.18V10.82C2 10.37 2.37 10 2.82 10H8.18C10.31 10 12.28 11.24 13.2 13.17C13.99 12.74 14.95 12.53 15.91 12.53C16.87 12.53 17.84 12.74 18.69 13.14C19.55 11.24 21.52 10 23.65 10H29.01C29.46 10 29.83 10.37 29.83 10.82V16.18C29.83 19.26 27.33 21.76 24.25 21.76H18.89L18.9 21.77Z"/>`)}
  </svg>`;

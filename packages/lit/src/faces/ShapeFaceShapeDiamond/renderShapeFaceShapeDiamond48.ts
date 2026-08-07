import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeDiamond48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M24.2891 44.9436C23.9491 44.9436 23.6391 44.7736 23.4491 44.4936L10.6591 24.8836C10.4391 24.5536 10.4391 24.1236 10.6591 23.7936L23.4491 4.1836C23.8191 3.6136 24.7591 3.6136 25.1291 4.1836L37.9191 23.7936C38.1391 24.1236 38.1391 24.5536 37.9191 24.8836L25.1291 44.4936C24.9491 44.7736 24.6291 44.9436 24.2891 44.9436ZM12.6991 24.3336L24.2891 42.1136L35.8791 24.3336L24.2891 6.5536L12.6991 24.3336Z"/>`)}
  </svg>`;

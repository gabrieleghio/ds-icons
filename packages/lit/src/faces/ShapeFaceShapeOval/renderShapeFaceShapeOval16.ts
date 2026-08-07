import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeOval16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M8.4541 1.39526C11.4914 1.39526 13.9344 4.46811 13.9346 8.2146C13.9346 11.9614 11.4814 15.0349 8.4541 15.0349C5.41686 15.0347 2.97461 11.9612 2.97461 8.2146C2.97481 4.46824 5.41699 1.39547 8.4541 1.39526ZM8.4541 2.36499C5.97312 2.36521 3.93477 4.97991 3.93457 8.2146C3.93457 11.4495 5.973 14.065 8.4541 14.0652C10.9353 14.0652 12.9746 11.4496 12.9746 8.2146C12.9744 4.97978 10.9352 2.36499 8.4541 2.36499Z"/>`)}
  </svg>`;

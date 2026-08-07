import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeRectangle48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M35.0102 44.855H11.9902C11.4402 44.855 10.9902 44.405 10.9902 43.855V5.13501C10.9902 4.58501 11.4402 4.13501 11.9902 4.13501H35.0102C35.5602 4.13501 36.0102 4.58501 36.0102 5.13501V43.855C36.0102 44.405 35.5602 44.855 35.0102 44.855ZM12.9902 42.855H34.0102V6.13501H12.9902V42.855Z"/>`)}
  </svg>`;

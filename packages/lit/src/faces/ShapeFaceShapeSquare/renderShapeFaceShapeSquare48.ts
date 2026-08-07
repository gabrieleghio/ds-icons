import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeSquare48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M42.8379 44.2754H4.83789C4.28789 44.2754 3.83789 43.8254 3.83789 43.2754V5.27539C3.83789 4.72539 4.28789 4.27539 4.83789 4.27539H42.8379C43.3879 4.27539 43.8379 4.72539 43.8379 5.27539V43.2754C43.8379 43.8254 43.3879 44.2754 42.8379 44.2754ZM5.83789 42.2754H41.8379V6.27539H5.83789V42.2754Z"/>`)}
  </svg>`;

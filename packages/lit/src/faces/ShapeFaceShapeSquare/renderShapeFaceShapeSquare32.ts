import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeSquare32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M3.69891 29.815C3.24891 29.815 2.87891 29.445 2.87891 28.995V3.66497C2.87891 3.21497 3.24891 2.84497 3.69891 2.84497H29.0289C29.4789 2.84497 29.8489 3.21497 29.8489 3.66497V28.995C29.8489 29.445 29.4789 29.815 29.0289 29.815H3.69891ZM4.51891 28.235L28.2689 28.185L28.2189 4.43497L4.51891 4.48497V28.235Z"/>`)}
  </svg>`;

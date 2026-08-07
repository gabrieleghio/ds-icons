import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeSquare40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M35.3545 3.01587C35.8421 3.01587 36.2344 3.40814 36.2344 3.89575V35.5657C36.2344 36.0533 35.8421 36.4456 35.3545 36.4456H3.68457C3.19696 36.4456 2.80469 36.0533 2.80469 35.5657V3.89575C2.80469 3.40814 3.19696 3.01587 3.68457 3.01587H35.3545ZM4.56445 34.676H34.4648V4.77563H4.56445V34.676Z"/>`)}
  </svg>`;

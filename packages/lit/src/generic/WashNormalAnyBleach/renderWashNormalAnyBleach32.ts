import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderWashNormalAnyBleach32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M2.82 29.3299C2.37 29.3299 2 28.9599 2 28.5099C2 28.3099 2.08 28.1099 2.22 27.9599L15.4 2.42994C15.48 2.28994 15.6 2.16994 15.76 2.08994C15.85 2.04994 15.93 2.01994 16.02 2.00994L16.13 1.99994C16.18 1.99994 16.23 1.99994 16.27 2.00994C16.34 2.00994 16.41 2.03994 16.48 2.06994C16.68 2.16994 16.8 2.27994 16.88 2.42994L30.07 27.9499C30.23 28.2699 30.17 28.6499 29.91 28.8999C29.8 29.1499 29.52 29.3199 29.21 29.3199H2.82V29.3299ZM4.14 27.7699L28.17 27.6999L16.14 4.56994L4.14 27.7699Z"/>`)}
  </svg>`;

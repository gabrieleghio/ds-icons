import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderBookmarkSaveFilled48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M35.2721 2.71704H11.9121C11.3621 2.71704 10.9121 3.16704 10.9121 3.71704V43.427C10.9121 43.827 11.1521 44.197 11.5321 44.347C11.6521 44.397 11.7821 44.427 11.9121 44.427C12.1721 44.427 12.4321 44.327 12.6221 44.137L23.6521 33.107L34.5521 44.137C34.8421 44.427 35.2721 44.517 35.6421 44.357C36.0121 44.197 36.2621 43.837 36.2621 43.437V3.71704C36.2621 3.16704 35.8121 2.71704 35.2621 2.71704H35.2721Z"/>`)}
  </svg>`;

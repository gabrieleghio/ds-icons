import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderBookmarkSaveFilled32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M23.6697 1.64013H8.09969C7.72969 1.64013 7.42969 1.94013 7.42969 2.31013V28.7801C7.42969 29.0501 7.58969 29.2901 7.83969 29.4001C7.91969 29.4301 8.00969 29.4501 8.09969 29.4501C8.26969 29.4501 8.43969 29.3801 8.56969 29.2501L15.9197 21.9001L23.1897 29.2501C23.3797 29.4401 23.6697 29.5001 23.9197 29.4001C24.1697 29.3001 24.3297 29.0501 24.3297 28.7801V2.30013C24.3297 1.93013 24.0297 1.63013 23.6597 1.63013L23.6697 1.64013Z"/>`)}
  </svg>`;

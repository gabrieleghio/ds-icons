import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShoppingBag16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_157)">
<path d="M1.58381 15.53C1.41381 15.53 1.26381 15.46 1.15381 15.34C1.04381 15.22 0.983811 15.05 1.00381 14.89L2.11381 4.58C2.14381 4.28 2.39381 4.06 2.69381 4.06H4.98381V3.97C4.98381 2.33 6.31381 1 7.95381 1C9.59381 1 10.9238 2.33 10.9238 3.97V4.06H13.2138C13.5138 4.06 13.7638 4.28 13.7938 4.58L14.9038 14.9C14.9238 15.06 14.8638 15.23 14.7538 15.35C14.6438 15.47 14.4838 15.54 14.3238 15.54H1.58381V15.53ZM13.6538 14.36L12.6738 5.21H10.9138V6.77C10.9138 7.09 10.6538 7.35 10.3338 7.35C10.0138 7.35 9.75381 7.09 9.75381 6.77V5.21H6.15381V6.77C6.15381 7.09 5.89381 7.35 5.57381 7.35C5.25381 7.35 4.99381 7.09 4.99381 6.77V5.21H3.23381L2.25381 14.36H13.6738H13.6538ZM9.74381 4.04V3.95C9.74381 2.96 8.93381 2.15 7.94381 2.15C6.95381 2.15 6.14381 2.96 6.14381 3.95V4.04H9.74381Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_157">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShoppingBagFilled32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2207_33)">
<path d="M27.6599 8.61996C27.5999 8.01996 27.0999 7.57996 26.4999 7.57996H21.9199V7.39996C21.9199 4.11996 19.2599 1.45996 15.9799 1.45996C12.6999 1.45996 10.0399 4.11996 10.0399 7.39996V7.57996H5.45989C4.85989 7.57996 4.35989 8.01996 4.29989 8.61996L2.07989 29.24C2.03989 29.58 2.15989 29.9 2.37989 30.14C2.59989 30.38 2.91989 30.52 3.23989 30.52H28.6799C29.0199 30.52 29.3199 30.38 29.5399 30.14C29.7599 29.9 29.8799 29.56 29.8399 29.24L27.6199 8.59996L27.6599 8.61996ZM19.5999 7.55996H12.3999V7.37996C12.3999 5.39996 14.0199 3.77996 15.9999 3.77996C17.9799 3.77996 19.5999 5.39996 19.5999 7.37996V7.55996Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2207_33">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

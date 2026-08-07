import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderCloseX48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M25.2425 23.8325L44.3725 4.7025C44.7625 4.3125 44.7625 3.6825 44.3725 3.2925C43.9825 2.9025 43.3525 2.9025 42.9625 3.2925L23.8325 22.4225L4.7025 3.2925C4.3125 2.9025 3.6825 2.9025 3.2925 3.2925C2.9025 3.6825 2.9025 4.3125 3.2925 4.7025L22.4225 23.8325L3.2925 42.9625C2.9025 43.3525 2.9025 43.9825 3.2925 44.3725C3.4925 44.5725 3.7425 44.6625 4.0025 44.6625C4.2625 44.6625 4.5125 44.5625 4.7125 44.3725L23.8425 25.2425L42.9725 44.3725C43.1725 44.5725 43.4225 44.6625 43.6825 44.6625C43.9425 44.6625 44.1925 44.5625 44.3925 44.3725C44.7825 43.9825 44.7825 43.3525 44.3925 42.9625L25.2625 23.8325H25.2425Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

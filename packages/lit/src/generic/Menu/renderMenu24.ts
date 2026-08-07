import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderMenu24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_490)">
<path d="M2.02 18.02C1.6 18.02 1.27 17.68 1.27 17.27C1.27 16.86 1.61 16.51 2.02 16.51H21.5C21.92 16.51 22.25 16.85 22.25 17.27C22.25 17.69 21.91 18.02 21.5 18.02H2.02Z"/>
<path d="M1.76 6.51C1.34 6.51 1 6.17 1 5.76C1 5.35 1.34 5 1.76 5H21.24C21.66 5 21.99 5.34 21.99 5.76C21.99 6.18 21.65 6.51 21.24 6.51H1.76Z"/>
<path d="M1.89 12.26C1.47 12.26 1.14 11.92 1.14 11.5C1.14 11.08 1.48 10.75 1.89 10.75H21.37C21.79 10.75 22.13 11.09 22.13 11.5C22.13 11.91 21.79 12.26 21.37 12.26H1.89Z"/>
</g>
<defs>
<clipPath id="clip0_2055_490">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

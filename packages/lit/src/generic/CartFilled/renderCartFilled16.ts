import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderCartFilled16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2207_18)">
<path d="M13.41 11.91H3.65L4.09 10.82L13.41 10.86C13.7 10.86 13.95 10.65 13.99 10.36L14.88 4.33C14.91 4.16 14.86 3.99 14.74 3.86C14.63 3.73 14.47 3.66 14.3 3.66H3.88L3.75 1.55C3.73 1.24 3.48 1 3.17 1H1.58C1.26 1 1 1.26 1 1.58C1 1.9 1.26 2.16 1.58 2.16H2.62L3.12 10.08L2.24 12.26C2.17 12.44 2.19 12.64 2.3 12.8C2.41 12.96 2.59 13.06 2.78 13.06H3.42C3.37 13.21 3.35 13.37 3.35 13.53C3.35 14.43 4.08 15.16 4.98 15.16C5.88 15.16 6.61 14.43 6.61 13.53C6.61 13.37 6.59 13.22 6.54 13.06H9.62C9.57 13.21 9.55 13.37 9.55 13.53C9.55 14.43 10.28 15.16 11.18 15.16C12.08 15.16 12.81 14.43 12.81 13.53C12.81 13.37 12.79 13.22 12.74 13.06H13.39C13.71 13.06 13.97 12.8 13.97 12.48C13.97 12.16 13.71 11.9 13.39 11.9L13.41 11.91Z"/>
</g>
<defs>
<clipPath id="clip0_2207_18">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

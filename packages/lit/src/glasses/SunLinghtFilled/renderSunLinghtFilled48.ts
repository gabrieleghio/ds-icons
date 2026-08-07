import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSunLinghtFilled48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M46.02 23.51H40.47M6.55 23.51H1M23.51 1V6.55M23.51 40.46V46.02M39.43 7.59L35.5 11.52M11.52 35.5L7.59 39.42M39.43 39.42L35.5 35.5M11.52 11.52L7.59 7.59M34.8 23.39C34.8 29.6253 29.7453 34.68 23.51 34.68C17.2747 34.68 12.22 29.6253 12.22 23.39C12.22 17.1547 17.2747 12.1 23.51 12.1C29.7453 12.1 34.8 17.1547 34.8 23.39Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

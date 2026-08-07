import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFrameShapeRoundSunglasses16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_5218_223)">
<path d="M11.6752 11.6401C9.83762 11.6401 8.35047 10.1529 8.35047 8.31529C8.35047 8.13532 8.36942 7.95534 8.39783 7.77537C8.27469 7.72801 8.14208 7.69959 8 7.69959C7.85792 7.69959 7.7253 7.72801 7.60216 7.77537C7.63058 7.95534 7.64953 8.14479 7.64953 8.32476C7.64953 10.1624 6.15291 11.6495 4.32476 11.6495C2.49662 11.6495 1 10.1624 1 8.32476C1 6.48714 2.48714 5 4.32476 5C5.52774 5 6.66441 5.67253 7.24222 6.73342C7.4885 6.6387 7.74425 6.59134 8 6.59134C8.25575 6.59134 8.52097 6.6387 8.75778 6.73342C9.33559 5.67253 10.4723 5 11.6752 5C13.5129 5 15 6.48714 15 8.32476C15 10.1624 13.5129 11.6495 11.6752 11.6495V11.6401Z"/>
</g>
<defs>
<clipPath id="clip0_5218_223">
<rect width="15.9998" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

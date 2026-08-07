import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowChevronDownBottom48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M46.7071 12.2929C47.0976 12.6834 47.0976 13.3164 46.7071 13.707L24.7071 35.707C24.3166 36.0975 23.6836 36.0975 23.293 35.707L1.29305 13.707C0.902519 13.3164 0.902519 12.6834 1.29305 12.2929C1.68357 11.9024 2.31658 11.9024 2.70711 12.2929L24.0001 33.5859L45.293 12.2929C45.6836 11.9024 46.3166 11.9024 46.7071 12.2929Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

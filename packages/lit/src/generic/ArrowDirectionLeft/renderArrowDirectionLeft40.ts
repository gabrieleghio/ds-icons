import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowDirectionLeft40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1560)">
<path d="M11.65 9.99976L2 19.6498L11.65 29.2998M2 19.6498H38.66" stroke="black" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2055_1560">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

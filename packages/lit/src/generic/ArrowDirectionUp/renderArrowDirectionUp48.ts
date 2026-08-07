import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowDirectionUp48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M35.16 13.58L23.58 2L12 13.58M23.58 2V46" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

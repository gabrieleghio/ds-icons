import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderMenu48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M43.5 36.04H4.53C3.98 36.04 3.53 35.59 3.53 35.04C3.53 34.49 3.98 34.04 4.53 34.04H43.49C44.04 34.04 44.49 34.49 44.49 35.04C44.49 35.59 44.04 36.04 43.49 36.04H43.5Z"/>
<path d="M42.97 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H42.96C43.51 11 43.96 11.45 43.96 12C43.96 12.55 43.51 13 42.96 13H42.97Z"/>
<path d="M43.23 24.52H4.27C3.72 24.52 3.27 24.07 3.27 23.52C3.27 22.97 3.72 22.52 4.27 22.52H43.23C43.78 22.52 44.23 22.97 44.23 23.52C44.23 24.07 43.78 24.52 43.23 24.52Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

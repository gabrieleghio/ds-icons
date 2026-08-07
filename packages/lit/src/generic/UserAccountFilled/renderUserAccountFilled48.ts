import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderUserAccountFilled48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M23.58 25.01C29.65 25.01 34.59 20.07 34.59 14C34.59 7.93 29.65 3 23.58 3C17.51 3 12.57 7.94 12.57 14.01C12.57 20.08 17.51 25.02 23.58 25.02V25.01Z"/>
<path d="M30.26 29.69H16.8C9.19 29.69 3 35.88 3 43.49C3 44.04 3.45 44.49 4 44.49H43.06C43.61 44.49 44.06 44.04 44.06 43.49C44.06 35.88 37.87 29.69 30.26 29.69Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

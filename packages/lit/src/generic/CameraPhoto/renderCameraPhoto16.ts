import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCameraPhoto16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_841)">
<path d="M8.2 10.93C6.69 10.93 5.46 9.7 5.46 8.19C5.46 6.68 6.69 5.45 8.2 5.45C9.71 5.45 10.94 6.68 10.94 8.19C10.94 9.7 9.71 10.93 8.2 10.93ZM8.2 6.61C7.33 6.61 6.62 7.32 6.62 8.19C6.62 9.06 7.33 9.77 8.2 9.77C9.07 9.77 9.78 9.06 9.78 8.19C9.78 7.32 9.07 6.61 8.2 6.61Z" fill="black"/>
<path d="M1.58 13.31C1.26 13.31 1 13.05 1 12.73V4.42C1 4.1 1.26 3.84 1.58 3.84H3.68L5.75 2.13C5.85 2.05 5.98 2 6.12 2H10.28C10.41 2 10.54 2.04 10.65 2.13L12.78 3.86L14.81 3.84C15.13 3.84 15.39 4.1 15.39 4.42V12.72C15.39 13.04 15.13 13.3 14.81 13.3H1.58V13.31ZM14.23 12.14V5.01H12.55C12.42 5.01 12.29 4.97 12.18 4.88L10.05 3.15L6.29 3.17L4.22 4.87C4.11 4.96 3.99 5 3.85 5H2.17V12.13H14.24L14.23 12.14Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_841">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

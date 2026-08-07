import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowDirectionDown24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1602)">
<path d="M11.54 23.5C11.34 23.5 11.15 23.42 11.01 23.28C10.87 23.14 10.79 22.95 10.79 22.75C10.79 22.55 10.87 22.36 11.01 22.21L16.8 16.42C16.94 16.28 17.13 16.2 17.34 16.2C17.55 16.2 17.73 16.28 17.88 16.42C18.17 16.72 18.17 17.19 17.88 17.49L12.09 23.28C11.95 23.42 11.76 23.5 11.56 23.5H11.54Z"/>
<path d="M11.54 23.5C11.34 23.5 11.15 23.42 11.01 23.28L5.22 17.49C5.08 17.35 5 17.16 5 16.96C5 16.76 5.08 16.57 5.22 16.43C5.36 16.29 5.55 16.21 5.75 16.21C5.95 16.21 6.14 16.29 6.28 16.43L12.07 22.22C12.21 22.36 12.29 22.55 12.29 22.75C12.29 22.95 12.21 23.14 12.07 23.28C11.93 23.42 11.74 23.5 11.54 23.5Z"/>
<path d="M11.54 23.5C11.12 23.5 10.79 23.16 10.79 22.75V0.75C10.79 0.33 11.13 0 11.54 0C11.95 0 12.29 0.34 12.29 0.75V22.75C12.29 23.17 11.95 23.5 11.54 23.5Z"/>
</g>
<defs>
<clipPath id="clip0_2055_1602">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

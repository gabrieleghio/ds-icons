import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderUserAccountFilled32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1155)">
<path d="M15.72 16.68C19.77 16.68 23.06 13.39 23.06 9.34C23.06 5.29 19.77 2 15.72 2C11.67 2 8.38 5.29 8.38 9.34C8.38 13.39 11.67 16.68 15.72 16.68Z"/>
<path d="M11.2 19.8C6.13 19.8 2 23.93 2 29C2 29.37 2.3 29.67 2.67 29.67H28.71C29.08 29.67 29.38 29.37 29.38 29C29.38 23.93 25.25 19.8 20.18 19.8H11.2Z"/>
</g>
<defs>
<clipPath id="clip0_2055_1155">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

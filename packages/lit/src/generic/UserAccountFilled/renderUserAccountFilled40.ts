import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderUserAccountFilled40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1152)">
<path d="M20.15 21.34C25.21 21.34 29.32 17.22 29.32 12.17C29.32 7.12 25.21 3 20.15 3C15.09 3 10.98 7.11 10.98 12.17C10.98 17.23 15.09 21.34 20.15 21.34Z" fill="black"/>
<path d="M25.72 25.24H14.5C8.16 25.24 3 30.4 3 36.74C3 37.2 3.37 37.57 3.83 37.57H36.38C36.84 37.57 37.21 37.2 37.21 36.74C37.21 30.4 32.05 25.24 25.71 25.24H25.72Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1152">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

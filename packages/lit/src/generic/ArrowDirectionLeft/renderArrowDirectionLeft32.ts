import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderArrowDirectionLeft32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1563)">
<path d="M1.04 15.97L8.76 23.69C8.77 23.7 8.87 23.73 8.87 23.73C8.89 23.73 8.98 23.69 8.98 23.69C9.03 23.64 8.98 23.48 8.98 23.48L1.26 15.76C1.23 15.74 1.19 15.72 1.15 15.72C1.13 15.72 1.04 15.76 1.04 15.76M1.04 15.97C1.04 15.97 0.99 15.81 1.04 15.76M1.04 15.97C1.05 15.98 1.15 16.01 1.15 16.01M1.15 16.01C1.17 16.01 1.26 15.97 1.26 15.97L8.98 8.25C9.03 8.2 9.03 8.09 8.98 8.04C8.95 8.02 8.91 8 8.87 8C8.85 8 8.76 8.04 8.76 8.04L1.04 15.76C0.99 15.81 0.99 15.92 1.04 15.97M1.15 16.01C1.07 16.01 1 15.94 1 15.86C1 15.78 1.07 15.71 1.15 15.71H30.48C30.56 15.71 30.63 15.78 30.63 15.86C30.63 15.94 30.56 16.01 30.48 16.01H1.15Z" stroke="black" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2055_1563">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowDirectionRight32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1545)">
<path d="M30.6 15.97L22.88 23.69C22.88 23.69 22.79 23.73 22.77 23.73C22.77 23.73 22.67 23.7 22.66 23.69C22.61 23.64 22.61 23.53 22.66 23.48L30.38 15.76C30.38 15.76 30.47 15.72 30.49 15.72C30.53 15.72 30.57 15.74 30.6 15.76C30.65 15.81 30.65 15.92 30.6 15.97C30.6 15.97 30.51 16.01 30.49 16.01C30.49 16.01 30.39 15.98 30.38 15.97L22.66 8.25C22.66 8.25 22.61 8.09 22.66 8.04C22.66 8.04 22.75 8 22.77 8C22.81 8 22.85 8.02 22.88 8.04L30.6 15.76M30.6 15.76C30.6 15.76 30.65 15.92 30.6 15.97M1.15 16.01C1.07 16.01 1 15.94 1 15.86C1 15.78 1.07 15.71 1.15 15.71H30.48C30.56 15.71 30.63 15.78 30.63 15.86C30.63 15.94 30.56 16.01 30.48 16.01H1.15Z" stroke="black" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2055_1545">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

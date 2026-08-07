import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderRulerFittingSizeMeasure40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1247)">
<path d="M37.38 11.7998H1.83C1.37 11.7998 1 12.1698 1 12.6298V27.6398C1 28.0998 1.37 28.4698 1.83 28.4698H37.38C37.84 28.4698 38.21 28.0998 38.21 27.6398V12.6298C38.21 12.1698 37.84 11.7998 37.38 11.7998ZM36.55 26.8098H2.67V13.4698H8.11V19.0998C8.11 19.5598 8.48 19.9298 8.94 19.9298C9.4 19.9298 9.77 19.5598 9.77 19.0998V13.4698H15.21V19.0998C15.21 19.5598 15.58 19.9298 16.04 19.9298C16.5 19.9298 16.87 19.5598 16.87 19.0998V13.4698H22.31V19.0998C22.31 19.5598 22.68 19.9298 23.14 19.9298C23.6 19.9298 23.97 19.5598 23.97 19.0998V13.4698H29.41V19.0998C29.41 19.5598 29.78 19.9298 30.24 19.9298C30.7 19.9298 31.07 19.5598 31.07 19.0998V13.4698H36.51V26.8098H36.55Z"/>
</g>
<defs>
<clipPath id="clip0_2055_1247">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

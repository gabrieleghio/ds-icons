import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderZoomOutMinusShrink40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_259)">
<path d="M36.92 35.74L28.09 26.91C30.46 24.26 31.91 20.78 31.91 16.96C31.91 8.71 25.2 2 16.96 2C8.72 2 2 8.71 2 16.95C2 25.19 8.71 31.9 16.95 31.9C20.77 31.9 24.26 30.45 26.9 28.08L35.73 36.91C35.89 37.07 36.11 37.15 36.32 37.15C36.53 37.15 36.75 37.07 36.91 36.91C37.24 36.58 37.24 36.06 36.91 35.73L36.92 35.74ZM3.67 16.95C3.67 9.62 9.63 3.66 16.96 3.66C24.29 3.66 30.25 9.62 30.25 16.95C30.25 24.28 24.29 30.24 16.96 30.24C9.63 30.24 3.67 24.28 3.67 16.95Z" fill="black"/>
<path d="M24.46 16.12H9.44C8.98 16.12 8.61 16.49 8.61 16.95C8.61 17.41 8.98 17.78 9.44 17.78H24.46C24.92 17.78 25.29 17.41 25.29 16.95C25.29 16.49 24.92 16.12 24.46 16.12Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_259">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

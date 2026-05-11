import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderZoomOutMinusShrink24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_265)">
<path d="M21.86 22.61C21.66 22.61 21.47 22.53 21.33 22.39L16.27 17.34C16.27 17.34 16.22 17.3 16.19 17.3C16.16 17.3 16.14 17.3 16.11 17.33C14.46 18.7 12.37 19.46 10.23 19.46C5.14 19.46 1 15.32 1 10.23C1 5.14 5.14 1 10.23 1C15.32 1 19.46 5.14 19.46 10.23C19.46 12.36 18.7 14.45 17.33 16.11C17.29 16.16 17.29 16.23 17.33 16.27L22.38 21.32C22.67 21.61 22.67 22.09 22.38 22.39C22.24 22.53 22.04 22.61 21.85 22.61H21.86ZM10.23 2.51C5.97 2.51 2.51 5.97 2.51 10.23C2.51 14.49 5.97 17.95 10.23 17.95C14.49 17.95 17.95 14.49 17.95 10.23C17.95 5.97 14.49 2.51 10.23 2.51Z" fill="black"/>
<path d="M5.73 10.99C5.31 10.99 4.98 10.65 4.98 10.23C4.98 9.81 5.32 9.48 5.73 9.48H14.74C15.16 9.48 15.5 9.82 15.5 10.23C15.5 10.64 15.16 10.99 14.74 10.99H5.73Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_265">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

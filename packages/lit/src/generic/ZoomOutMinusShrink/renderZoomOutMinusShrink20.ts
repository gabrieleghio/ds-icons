import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderZoomOutMinusShrink20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_268)">
<path d="M18.37 19.01C18.2 19.01 18.04 18.94 17.93 18.83L13.72 14.62C13.72 14.62 13.68 14.59 13.65 14.59C13.63 14.59 13.61 14.59 13.59 14.61C12.21 15.76 10.47 16.39 8.69 16.39C4.45 16.39 1 12.94 1 8.7C1 4.46 4.44 1 8.68 1C12.92 1 16.37 4.45 16.37 8.69C16.37 10.47 15.74 12.21 14.59 13.59C14.56 13.63 14.56 13.69 14.59 13.72L18.8 17.93C19.04 18.17 19.05 18.57 18.8 18.82C18.68 18.94 18.52 19 18.35 19L18.37 19.01ZM8.68 2.26C5.13 2.26 2.25 5.15 2.25 8.69C2.25 12.23 5.13 15.12 8.68 15.12C12.23 15.12 15.11 12.23 15.11 8.69C15.11 5.15 12.23 2.26 8.68 2.26Z" fill="black"/>
<path d="M4.93 9.32C4.58 9.32 4.3 9.04 4.3 8.69C4.3 8.34 4.58 8.06 4.93 8.06H12.44C12.79 8.06 13.07 8.34 13.07 8.69C13.07 9.04 12.79 9.32 12.44 9.32H4.93Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_268">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderMenu32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_487)">
<path d="M3.18 24.99C2.73 24.99 2.36 24.62 2.36 24.17C2.36 23.72 2.73 23.35 3.18 23.35H29.16C29.61 23.35 29.98 23.72 29.98 24.17C29.98 24.62 29.61 24.99 29.16 24.99H3.18Z" fill="black"/>
<path d="M2.82 9.64C2.37 9.64 2 9.27 2 8.82C2 8.37 2.37 8 2.82 8H28.8C29.25 8 29.62 8.37 29.62 8.82C29.62 9.27 29.25 9.64 28.8 9.64H2.82Z" fill="black"/>
<path d="M3 17.32C2.55 17.32 2.18 16.95 2.18 16.5C2.18 16.05 2.55 15.68 3 15.68H28.98C29.43 15.68 29.8 16.05 29.8 16.5C29.8 16.95 29.43 17.32 28.98 17.32H3Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_487">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

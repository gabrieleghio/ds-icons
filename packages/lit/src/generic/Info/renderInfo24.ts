import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderInfo24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_339)">
<path d="M11.85 23.69C5.32 23.69 0 18.38 0 11.85C0 5.32 5.32 0 11.85 0C18.38 0 23.7 5.31 23.7 11.85C23.7 18.39 18.38 23.69 11.85 23.69ZM11.85 1.49C6.14 1.49 1.49 6.14 1.49 11.85C1.49 17.56 6.14 22.21 11.85 22.21C17.56 22.21 22.21 17.56 22.21 11.85C22.21 6.14 17.56 1.49 11.85 1.49Z" fill="black"/>
<path d="M11.85 16.68C11.48 16.68 11.18 16.38 11.18 16.01V10.72C11.18 10.35 11.48 10.05 11.85 10.05C12.22 10.05 12.52 10.35 12.52 10.72V16.01C12.52 16.38 12.22 16.68 11.85 16.68Z" fill="black"/>
<path d="M11.85 8.42C11.46 8.42 11.15 8.11 11.15 7.72C11.15 7.33 11.47 7.02 11.85 7.02C12.23 7.02 12.55 7.34 12.55 7.72C12.55 8.1 12.23 8.42 11.85 8.42Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_339">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

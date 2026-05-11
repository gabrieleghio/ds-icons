import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderUserAccount32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_91)">
<path d="M15.87 16.98C11.74 16.98 8.38 13.62 8.38 9.49C8.38 5.36 11.74 2 15.87 2C20 2 23.36 5.36 23.36 9.49C23.36 13.62 20 16.98 15.87 16.98ZM15.87 3.63C12.64 3.63 10.02 6.26 10.02 9.48C10.02 12.7 12.65 15.34 15.87 15.34C19.09 15.34 21.73 12.71 21.73 9.48C21.73 6.25 19.1 3.63 15.87 3.63Z" fill="black"/>
<path d="M2.82 29.97C2.37 29.97 2 29.6 2 29.15C2 23.99 6.19 19.8 11.35 19.8H20.32C25.48 19.8 29.67 23.99 29.67 29.15C29.67 29.6 29.3 29.97 28.85 29.97H2.82ZM11.35 21.43C7.43 21.43 4.05 24.49 3.67 28.39L28.05 28.34C27.62 24.49 24.24 21.44 20.32 21.44H11.35V21.43Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_91">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

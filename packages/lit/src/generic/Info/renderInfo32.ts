import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderInfo32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_336)">
<g clip-path="url(#clip1_2055_336)">
<path d="M15.81 31.62C7.09 31.62 0 24.53 0 15.81C0 7.09 7.09 0 15.81 0C24.53 0 31.62 7.09 31.62 15.81C31.62 24.53 24.53 31.62 15.81 31.62ZM15.81 1.63C7.99 1.63 1.63 7.99 1.63 15.81C1.63 23.63 7.99 29.99 15.81 29.99C23.63 29.99 29.99 23.63 29.99 15.81C29.99 7.99 23.63 1.63 15.81 1.63Z" fill="black"/>
<path d="M15.81 24.32C15.36 24.32 14.99 23.95 14.99 23.5V13.12C14.99 12.67 15.36 12.3 15.81 12.3C16.26 12.3 16.63 12.67 16.63 13.12V23.5C16.63 23.95 16.26 24.32 15.81 24.32Z" fill="black"/>
<path d="M15.81 9.22C15.18 9.22 14.67 8.71 14.67 8.08C14.67 7.45 15.18 6.94 15.81 6.94C16.44 6.94 16.95 7.45 16.95 8.08C16.95 8.71 16.44 9.22 15.81 9.22Z" fill="black"/>
</g>
</g>
<defs>
<clipPath id="clip0_2055_336">
<rect width="32" height="32" fill="white"/>
</clipPath>
<clipPath id="clip1_2055_336">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

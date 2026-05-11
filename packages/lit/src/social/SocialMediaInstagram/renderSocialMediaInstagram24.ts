import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaInstagram24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1380)">
<path d="M17.7 7.03C17.06 7.03 16.53 6.51 16.53 5.86C16.53 5.21 17.05 4.69 17.7 4.69C18.35 4.69 18.87 5.21 18.87 5.86C18.87 6.51 18.35 7.03 17.7 7.03Z" fill="black"/>
<path d="M11.78 17.1C8.85 17.1 6.47 14.72 6.47 11.79C6.47 8.86 8.85 6.48 11.78 6.48C14.71 6.48 17.09 8.86 17.09 11.79C17.09 14.72 14.71 17.1 11.78 17.1ZM11.78 7.98C9.68 7.98 7.98 9.69 7.98 11.78C7.98 13.87 9.69 15.58 11.78 15.58C13.87 15.58 15.58 13.87 15.58 11.78C15.58 9.69 13.87 7.98 11.78 7.98Z" fill="black"/>
<path d="M7.33 22.57C3.84 22.57 1 19.73 1 16.24V7.33C1 3.84 3.84 1 7.33 1H16.24C19.73 1 22.57 3.84 22.57 7.33V16.24C22.57 19.73 19.73 22.57 16.24 22.57H7.33ZM7.33 2.52C4.67 2.52 2.51 4.68 2.51 7.34V16.25C2.51 18.91 4.67 21.07 7.33 21.07H16.24C18.9 21.07 21.06 18.91 21.06 16.25V7.33C21.06 4.67 18.9 2.51 16.24 2.51H7.33V2.52Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1380">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSearch20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_230)">
<path d="M8.58 16.15C4.4 16.15 1 12.75 1 8.57C1 4.39 4.4 1 8.58 1C12.76 1 16.16 4.4 16.16 8.58C16.16 12.76 12.76 16.16 8.58 16.16V16.15ZM8.58 2.26C5.1 2.26 2.26 5.09 2.26 8.58C2.26 12.07 5.09 14.9 8.58 14.9C12.07 14.9 14.9 12.07 14.9 8.58C14.9 5.09 12.07 2.26 8.58 2.26Z" fill="black"/>
<path d="M18.11 18.74C17.94 18.74 17.78 18.67 17.67 18.56L13.08 13.97C12.96 13.85 12.89 13.69 12.89 13.53C12.89 13.37 12.96 13.2 13.08 13.09C13.2 12.97 13.35 12.91 13.52 12.91C13.69 12.91 13.85 12.97 13.96 13.09L18.55 17.68C18.79 17.92 18.79 18.32 18.55 18.57C18.43 18.69 18.27 18.75 18.1 18.75L18.11 18.74Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_230">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

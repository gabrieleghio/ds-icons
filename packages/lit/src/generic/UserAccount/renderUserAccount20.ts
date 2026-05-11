import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderUserAccount20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_97)">
<path d="M9.79 10.6C7.14 10.6 4.99 8.45 4.99 5.8C4.99 3.15 7.14 1 9.79 1C12.44 1 14.59 3.15 14.59 5.8C14.59 8.45 12.44 10.6 9.79 10.6ZM9.79 2.26C7.84 2.26 6.25 3.85 6.25 5.8C6.25 7.75 7.84 9.34 9.79 9.34C11.74 9.34 13.33 7.75 13.33 5.8C13.33 3.85 11.74 2.26 9.79 2.26Z" fill="black"/>
<path d="M1.63 18.72C1.28 18.72 1 18.44 1 18.09C1 14.8 3.67 12.13 6.96 12.13H12.57C15.86 12.13 18.53 14.8 18.53 18.09C18.53 18.44 18.25 18.72 17.9 18.72H1.63ZM6.96 13.38C4.68 13.38 2.68 15.08 2.31 17.34C2.31 17.37 2.31 17.4 2.33 17.42C2.35 17.44 2.38 17.46 2.41 17.46H17.11C17.11 17.46 17.17 17.45 17.19 17.42C17.21 17.4 17.22 17.37 17.21 17.34C16.85 15.08 14.85 13.38 12.57 13.38H6.96Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_97">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSearch16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_233)">
<path d="M7.14 13.28C3.75 13.28 1 10.53 1 7.14C1 3.75 3.75 1 7.14 1C10.53 1 13.28 3.75 13.28 7.14C13.28 10.53 10.53 13.28 7.14 13.28ZM7.14 2.16C4.39 2.16 2.16 4.39 2.16 7.14C2.16 9.89 4.39 12.11 7.13 12.11C9.87 12.11 12.1 9.88 12.1 7.14C12.1 4.4 9.88 2.16 7.14 2.16Z" fill="black"/>
<path d="M14.76 15.34C14.6 15.34 14.46 15.28 14.35 15.17L10.68 11.5C10.57 11.39 10.51 11.24 10.51 11.09C10.51 10.94 10.57 10.79 10.68 10.68C10.79 10.57 10.93 10.51 11.09 10.51C11.25 10.51 11.39 10.57 11.5 10.68L15.17 14.35C15.4 14.58 15.4 14.95 15.17 15.17C15.06 15.28 14.91 15.34 14.76 15.34Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_233">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

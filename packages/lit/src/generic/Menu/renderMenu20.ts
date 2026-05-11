import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderMenu20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_493)">
<path d="M1.85 15.86C1.5 15.86 1.22 15.58 1.22 15.23C1.22 14.88 1.5 14.6 1.85 14.6H18.09C18.44 14.6 18.72 14.88 18.72 15.23C18.72 15.58 18.44 15.86 18.09 15.86H1.85Z" fill="black"/>
<path d="M1.63 6.26C1.28 6.26 1 5.98 1 5.63C1 5.28 1.28 5 1.63 5H17.87C18.22 5 18.5 5.28 18.5 5.63C18.5 5.98 18.22 6.26 17.87 6.26H1.63Z" fill="black"/>
<path d="M1.74 11.06C1.39 11.06 1.11 10.78 1.11 10.43C1.11 10.08 1.39 9.8 1.74 9.8H17.98C18.33 9.8 18.61 10.08 18.61 10.43C18.61 10.78 18.33 11.06 17.98 11.06H1.74Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_493">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

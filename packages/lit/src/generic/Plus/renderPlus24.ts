import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderPlus24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_283)">
<path d="M11.74 22.48C11.28 22.48 10.91 22.11 10.91 21.65V1.83C10.91 1.37 11.28 1 11.74 1C12.2 1 12.57 1.37 12.57 1.83V21.65C12.57 22.11 12.2 22.48 11.74 22.48Z" fill="black"/>
<path d="M1.83 12.57C1.37 12.57 1 12.2 1 11.74C1 11.28 1.37 10.91 1.83 10.91H21.65C22.11 10.91 22.48 11.28 22.48 11.74C22.48 12.2 22.11 12.57 21.65 12.57H1.83Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_283">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

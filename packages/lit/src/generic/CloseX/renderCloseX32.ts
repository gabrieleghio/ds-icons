import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCloseX32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_317)">
<path d="M29.27 30.08C29.05 30.08 28.85 30 28.69 29.84L16.01 17.16L3.4 29.84C3.25 29.99 3.04 30.08 2.82 30.08C2.6 30.08 2.4 30 2.24 29.84C2.09 29.69 2 29.48 2 29.26C2 29.04 2.08 28.84 2.24 28.68L14.92 16L2.25 3.4C2.09 3.25 2.01 3.04 2.01 2.82C2.01 2.6 2.09 2.4 2.25 2.24C2.4 2.09 2.61 2 2.83 2C3.05 2 3.25 2.08 3.41 2.24L16.09 14.92L28.7 2.24C28.85 2.09 29.06 2 29.28 2C29.5 2 29.7 2.08 29.86 2.24C30.02 2.39 30.1 2.6 30.1 2.82C30.1 3.04 30.02 3.24 29.86 3.4L17.18 16.08L29.86 28.69C30.02 28.84 30.1 29.05 30.1 29.27C30.1 29.49 30.02 29.69 29.86 29.85C29.71 30 29.5 30.09 29.28 30.09L29.27 30.08Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_317">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

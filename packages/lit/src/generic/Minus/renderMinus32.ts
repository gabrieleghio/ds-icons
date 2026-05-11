import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderMinus32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_298)">
<path d="M2.82 16.64C2.37 16.64 2 16.27 2 15.82C2 15.37 2.37 15 2.82 15H29.25C29.7 15 30.07 15.37 30.07 15.82C30.07 16.27 29.7 16.64 29.25 16.64H2.82Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_298">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

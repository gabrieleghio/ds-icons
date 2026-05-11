import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderMinus40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_295)">
<path d="M36.87 20.66H3.83C3.37 20.66 3 20.29 3 19.83C3 19.37 3.37 19 3.83 19H36.87C37.33 19 37.7 19.37 37.7 19.83C37.7 20.29 37.33 20.66 36.87 20.66Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_295">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

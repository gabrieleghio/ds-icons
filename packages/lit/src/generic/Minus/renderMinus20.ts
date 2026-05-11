import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderMinus20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_304)">
<path d="M1.69 10.38C1.31 10.38 1 10.07 1 9.69C1 9.31 1.31 9 1.69 9H18.21C18.59 9 18.9 9.31 18.9 9.69C18.9 10.07 18.59 10.38 18.21 10.38H1.69Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_304">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

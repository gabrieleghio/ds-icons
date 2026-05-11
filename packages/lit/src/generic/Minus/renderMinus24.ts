import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderMinus24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_301)">
<path d="M1.83 12.6601C1.37 12.6601 1 12.2901 1 11.8301C1 11.3701 1.37 11.0001 1.83 11.0001H21.65C22.11 11.0001 22.48 11.3701 22.48 11.8301C22.48 12.2901 22.11 12.6601 21.65 12.6601H1.83Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_301">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

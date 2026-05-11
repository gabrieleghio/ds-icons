import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderUndoRepeatChangeArrow20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_819)">
<path d="M10.14 19.28C5.1 19.28 1 15.18 1 10.14C1 9.82 1.26 9.56 1.58 9.56C1.9 9.56 2.16 9.82 2.16 10.14C2.16 14.54 5.74 18.12 10.14 18.12C14.54 18.12 18.12 14.54 18.12 10.14C18.12 5.74 14.54 2.16 10.14 2.16C7.89 2.16 5.74 3.11 4.23 4.78C4.2 4.81 4.2 4.85 4.21 4.89C4.23 4.93 4.26 4.95 4.3 4.95H6.57C6.89 4.95 7.15 5.21 7.15 5.53C7.15 5.85 6.89 6.11 6.57 6.11H2.68C2.36 6.11 2.1 5.85 2.1 5.53V1.58C2.1 1.26 2.36 1 2.68 1C3 1 3.26 1.26 3.26 1.58V3.85C3.26 3.85 3.28 3.93 3.32 3.94C3.33 3.94 3.34 3.94 3.36 3.94C3.39 3.94 3.41 3.93 3.43 3.91C5.19 2.03 7.57 1 10.14 1C15.18 1 19.28 5.1 19.28 10.14C19.28 15.18 15.18 19.28 10.14 19.28Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_819">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

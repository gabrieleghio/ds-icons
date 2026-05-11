import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderMenu16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_496)">
<path d="M1.75 12.84C1.43 12.84 1.17 12.58 1.17 12.26C1.17 11.94 1.43 11.68 1.75 11.68H14.74C15.06 11.68 15.32 11.94 15.32 12.26C15.32 12.58 15.06 12.84 14.74 12.84H1.75Z" fill="black"/>
<path d="M1.58 5.16C1.26 5.16 1 4.9 1 4.58C1 4.26 1.26 4 1.58 4H14.57C14.89 4 15.15 4.26 15.15 4.58C15.15 4.9 14.89 5.16 14.57 5.16H1.58Z" fill="black"/>
<path d="M1.67 9C1.35 9 1.09 8.74 1.09 8.42C1.09 8.1 1.35 7.84 1.67 7.84H14.66C14.98 7.84 15.24 8.1 15.24 8.42C15.24 8.74 14.98 9 14.66 9H1.67Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_496">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

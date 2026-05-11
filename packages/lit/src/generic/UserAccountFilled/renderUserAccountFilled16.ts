import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderUserAccountFilled16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1164)">
<path d="M7.86 8.34C9.88 8.34 11.53 6.69 11.53 4.67C11.53 2.65 9.88 1 7.86 1C5.84 1 4.19 2.65 4.19 4.67C4.19 6.69 5.84 8.34 7.86 8.34Z" fill="black"/>
<path d="M10.09 9.9H5.6C3.06 9.9 1 11.96 1 14.5C1 14.68 1.15 14.83 1.33 14.83H14.35C14.53 14.83 14.68 14.68 14.68 14.5C14.68 11.96 12.62 9.9 10.08 9.9H10.09Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1164">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

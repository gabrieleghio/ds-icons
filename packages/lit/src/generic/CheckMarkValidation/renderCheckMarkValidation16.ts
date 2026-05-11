import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCheckMarkValidation16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_689)">
<path d="M5.9825 12.96C5.8225 12.96 5.6825 12.9 5.5725 12.79L1.1725 8.39C0.9425 8.16 0.9425 7.79 1.1725 7.56C1.2825 7.45 1.4325 7.39 1.5825 7.39C1.7325 7.39 1.8825 7.45 1.9925 7.56L5.9825 11.55L14.3725 3.17C14.4825 3.06 14.6325 3 14.7825 3C14.9325 3 15.0825 3.06 15.1925 3.17C15.3025 3.28 15.3625 3.43 15.3625 3.58C15.3625 3.73 15.3025 3.88 15.1925 3.99L6.3925 12.79C6.2825 12.9 6.1325 12.96 5.9825 12.96Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_689">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

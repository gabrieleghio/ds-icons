import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSocialMediaFacebook16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1446)">
<path d="M8 0C3.59 0 0 3.6 0 8.03C0 11.79 2.58 14.95 6.06 15.82V10.5H4.28V8.03H6.05V6.33C6.05 4.01 7.41 2.85 9.48 2.85C10.47 2.85 11.55 2.97 11.8 3V5.28H10.68C9.56 5.28 8.96 5.84 8.96 6.63V8.04H11.64L11.25 10.5L8.96 10.53V16.01C12.92 15.54 16 12.14 16 8.04C16 3.6 12.41 0 8 0Z" fill="#010101"/>
</g>
<defs>
<clipPath id="clip0_2055_1446">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

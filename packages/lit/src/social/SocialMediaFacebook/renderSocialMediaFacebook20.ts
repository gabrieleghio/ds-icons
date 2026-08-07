import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSocialMediaFacebook20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1443)">
<path d="M10 1.02C5.04 1.02 1 5.07 1 10.05C1 14.28 3.91 17.83 7.82 18.81V12.82H5.82V10.04H7.81V8.12C7.81 5.51 9.34 4.21 11.67 4.21C12.78 4.21 14 4.34 14.28 4.38V6.94H13.02C11.76 6.94 11.08 7.57 11.08 8.46V10.04H14.09L13.65 12.8L11.08 12.84V19C15.53 18.47 19 14.65 19 10.03C19 5.05 14.96 1 10 1V1.02Z" fill="#010101"/>
</g>
<defs>
<clipPath id="clip0_2055_1443">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

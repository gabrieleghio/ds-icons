import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSocialMediaFacebook24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1440)">
<path d="M12 1C5.94 1 1 5.95 1 12.04C1 17.21 4.55 21.55 9.34 22.75V15.43H6.9V12.04H9.33V9.7C9.33 6.51 11.2 4.92 14.05 4.92C15.41 4.92 16.9 5.08 17.24 5.13V8.26H15.7C14.16 8.26 13.33 9.03 13.33 10.11V12.04H17.01L16.47 15.42L13.32 15.47V23C18.76 22.35 23 17.68 23 12.04C23 5.95 18.06 1 12 1Z" fill="#010101"/>
</g>
<defs>
<clipPath id="clip0_2055_1440">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

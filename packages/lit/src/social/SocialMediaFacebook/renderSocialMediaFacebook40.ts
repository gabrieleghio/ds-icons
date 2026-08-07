import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSocialMediaFacebook40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1434)">
<path d="M20 1C9.53 1 1 9.56 1 20.07C1 28.99 7.14 36.5 15.4 38.57V25.93H11.18V20.07H15.38V16.02C15.38 10.51 18.62 7.76 23.53 7.76C25.88 7.76 28.45 8.03 29.04 8.12V13.53H26.38C23.72 13.53 22.29 14.86 22.29 16.73V20.07H28.65L27.72 25.91L22.28 25.99V39C31.68 37.87 39 29.81 39 20.07C39 9.56 30.47 1 20 1Z" fill="#010101"/>
</g>
<defs>
<clipPath id="clip0_2055_1434">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

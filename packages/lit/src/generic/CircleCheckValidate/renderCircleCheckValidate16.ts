import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderCircleCheckValidate16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_440)">
<g clip-path="url(#clip1_2055_440)">
<path d="M6.4 10.76C6.24 10.76 6.1 10.7 5.99 10.59L4.17 8.77C4.06 8.66 4 8.51 4 8.36C4 8.21 4.06 8.06 4.17 7.95C4.28 7.84 4.42 7.78 4.58 7.78C4.74 7.78 4.88 7.84 4.99 7.95L6.39 9.35L10.22 5.52C10.33 5.41 10.48 5.35 10.63 5.35C10.78 5.35 10.93 5.41 11.04 5.52C11.27 5.75 11.27 6.12 11.04 6.35L6.79 10.6C6.68 10.71 6.53 10.77 6.38 10.77L6.4 10.76Z"/>
<path d="M7.98 0C3.58 0 0 3.58 0 7.98C0 12.38 3.58 15.96 7.98 15.96C12.38 15.96 15.96 12.38 15.96 7.98C15.96 3.58 12.38 0 7.98 0ZM7.98 14.81C4.22 14.81 1.15 11.75 1.15 7.98C1.15 4.21 4.22 1.15 7.98 1.15C11.74 1.15 14.81 4.21 14.81 7.98C14.81 11.75 11.75 14.81 7.98 14.81Z"/>
</g>
</g>
<defs>
<clipPath id="clip0_2055_440">
<rect width="16" height="16" fill="white"/>
</clipPath>
<clipPath id="clip1_2055_440">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

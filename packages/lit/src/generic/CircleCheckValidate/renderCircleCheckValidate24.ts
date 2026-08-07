import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderCircleCheckValidate24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_434)">
<path d="M9.48 15.9C9.28 15.9 9.09 15.82 8.95 15.68L6.23 12.96C6.09 12.82 6.01 12.63 6.01 12.43C6.01 12.23 6.09 12.04 6.23 11.89C6.37 11.75 6.56 11.67 6.76 11.67C6.96 11.67 7.15 11.75 7.29 11.89L9.4 13.99C9.4 13.99 9.45 14.03 9.48 14.03C9.51 14.03 9.54 14.02 9.56 13.99L15.31 8.24C15.45 8.1 15.64 8.02 15.84 8.02C16.04 8.02 16.23 8.1 16.38 8.24C16.67 8.53 16.67 9.01 16.38 9.31L10.01 15.68C9.87 15.82 9.68 15.9 9.47 15.9H9.48Z"/>
<path d="M11.85 23.69C5.32 23.69 0 18.38 0 11.85C0 5.32 5.32 0 11.85 0C18.38 0 23.7 5.31 23.7 11.85C23.7 18.39 18.38 23.69 11.85 23.69ZM11.85 1.49C6.14 1.49 1.49 6.14 1.49 11.85C1.49 17.56 6.14 22.21 11.85 22.21C17.56 22.21 22.21 17.56 22.21 11.85C22.21 6.14 17.56 1.49 11.85 1.49Z"/>
</g>
<defs>
<clipPath id="clip0_2055_434">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

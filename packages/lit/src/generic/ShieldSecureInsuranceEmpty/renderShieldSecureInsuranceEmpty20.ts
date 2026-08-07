import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShieldSecureInsuranceEmpty20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1752)">
<path d="M10.03 19.57C7.94 19.57 5.87 17.5 4.22 13.75C2.87 10.69 2 6.96 2 4.25C2 3.9 2.28 3.62 2.63 3.62C4.81 3.62 8.15 1.62 9.59 0.18C9.71 0.06 9.87 0 10.04 0C10.21 0 10.37 0.06 10.48 0.18C11.92 1.62 15.26 3.62 17.44 3.62C17.79 3.62 18.08 3.9 18.08 4.25C18.08 6.95 17.21 10.68 15.86 13.75C14.2 17.5 12.14 19.57 10.05 19.57H10.03ZM10.03 1.52C10.03 1.52 9.98 1.52 9.96 1.54C8.38 2.9 5.64 4.51 3.36 4.82C3.31 4.82 3.27 4.87 3.27 4.92C3.4 7.38 4.23 10.64 5.37 13.23C6.79 16.45 8.49 18.3 10.03 18.3C11.57 18.3 13.27 16.45 14.69 13.23C15.83 10.65 16.65 7.39 16.79 4.92C16.79 4.87 16.76 4.82 16.7 4.82C14.41 4.51 11.67 2.9 10.09 1.54C10.07 1.52 10.05 1.52 10.02 1.52H10.03Z"/>
</g>
<defs>
<clipPath id="clip0_2055_1752">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

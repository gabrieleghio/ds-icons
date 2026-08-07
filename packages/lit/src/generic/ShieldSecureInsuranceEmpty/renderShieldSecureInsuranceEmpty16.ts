import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShieldSecureInsuranceEmpty16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1755)">
<path d="M7.5 15.8098C5.79 15.8098 4.12 14.1398 2.78 11.1098C1.7 8.64976 1 5.65976 1 3.47976C1 3.15976 1.26 2.89976 1.58 2.89976C3.31 2.89976 5.95 1.30976 7.09 0.169756C7.2 0.0597559 7.35 -0.000244141 7.5 -0.000244141C7.65 -0.000244141 7.8 0.0597559 7.91 0.169756C9.05 1.30976 11.7 2.89976 13.42 2.89976C13.75 2.89976 14.01 3.15976 14.01 3.47976C14.01 5.64976 13.31 8.64976 12.23 11.1098C10.89 14.1398 9.21 15.8098 7.51 15.8098H7.5ZM2.17 4.01976C2.28 5.98976 2.93 8.55976 3.84 10.6398C4.96 13.1898 6.3 14.6498 7.5 14.6498C8.7 14.6498 10.03 13.1898 11.16 10.6398C12.08 8.56976 12.72 5.98976 12.83 4.01976C11.05 3.77976 8.85 2.53976 7.5 1.37976C6.15 2.53976 3.95 3.77976 2.18 4.01976H2.17Z"/>
</g>
<defs>
<clipPath id="clip0_2055_1755">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

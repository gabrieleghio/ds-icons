import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderZoomOutMinusShrink32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_262)">
<path d="M29.61 30.43C29.39 30.43 29.19 30.35 29.03 30.19L22.03 23.19C19.88 25.15 17.04 26.23 14.11 26.23C7.43 26.23 2 20.8 2 14.12C2 7.44 7.43 2 14.11 2C20.79 2 26.22 7.43 26.22 14.11C26.22 17.04 25.14 19.88 23.19 22.1L30.19 29.03C30.34 29.18 30.43 29.39 30.43 29.61C30.43 29.83 30.35 30.03 30.19 30.19C30.04 30.34 29.83 30.43 29.61 30.43ZM14.11 3.63C8.33 3.63 3.63 8.33 3.63 14.11C3.63 19.89 8.33 24.59 14.11 24.59C19.89 24.59 24.59 19.89 24.59 14.11C24.59 8.33 19.89 3.63 14.11 3.63Z"/>
<path d="M8.11 14.93C7.66 14.93 7.29 14.56 7.29 14.11C7.29 13.66 7.66 13.29 8.11 13.29H20.12C20.57 13.29 20.94 13.66 20.94 14.11C20.94 14.56 20.57 14.93 20.12 14.93H8.11Z"/>
</g>
<defs>
<clipPath id="clip0_2055_262">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

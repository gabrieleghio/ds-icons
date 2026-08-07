import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderCircleMinus48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M35.4 22.55H11.63C11.08 22.55 10.63 23 10.63 23.55C10.63 24.1 11.08 24.55 11.63 24.55H35.4C35.95 24.55 36.4 24.1 36.4 23.55C36.4 23 35.95 22.55 35.4 22.55Z"/>
<path d="M23.51 0C10.54 0 0 10.55 0 23.51C0 36.47 10.55 47.02 23.51 47.02C36.47 47.02 47.02 36.47 47.02 23.51C47.02 10.55 36.48 0 23.51 0ZM23.51 45.02C11.65 45.02 2 35.37 2 23.51C2 11.65 11.65 2 23.51 2C35.37 2 45.02 11.65 45.02 23.51C45.02 35.37 35.37 45.02 23.51 45.02Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

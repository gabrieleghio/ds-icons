import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderClearFieldsRemove48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M24 0C10.75 0 0 10.7422 0 24.005C0 37.2678 10.75 48 24 48C37.25 48 48 37.2578 48 24.005C48 10.7522 37.25 0 24 0ZM36.8 34.6272C37.39 35.2173 37.39 36.1675 36.8 36.7477C36.51 37.0377 36.12 37.1877 35.74 37.1877C35.36 37.1877 34.97 37.0377 34.68 36.7477L24.02 26.0754L13.36 36.7477C13.07 37.0377 12.68 37.1877 12.3 37.1877C11.92 37.1877 11.53 37.0377 11.24 36.7477C10.65 36.1575 10.65 35.2073 11.24 34.6272L21.9 23.955L11.24 13.2828C10.65 12.6926 10.65 11.7424 11.24 11.1623C11.83 10.5822 12.78 10.5722 13.36 11.1623L24.02 21.8345L34.68 11.1623C35.27 10.5722 36.22 10.5722 36.8 11.1623C37.38 11.7524 37.39 12.7026 36.8 13.2828L26.14 23.955L36.8 34.6272Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

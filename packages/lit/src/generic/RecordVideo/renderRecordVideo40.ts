import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderRecordVideo40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_4044_16)">
<path d="M20.33 1C9.67 1 1 9.67 1 20.33C1 30.99 9.67 39.66 20.33 39.66C30.99 39.66 39.66 30.99 39.66 20.33C39.66 9.67 30.99 1 20.33 1ZM20.33 37.66C10.77 37.66 3 29.88 3 20.33C3 10.78 10.77 3 20.33 3C29.89 3 37.66 10.78 37.66 20.33C37.66 29.88 29.88 37.66 20.33 37.66Z"/>
<path d="M20.33 10.76C15.05 10.76 10.76 15.05 10.76 20.33C10.76 25.61 15.05 29.9 20.33 29.9C25.61 29.9 29.9 25.63 29.9 20.33C29.9 15.03 25.61 10.76 20.33 10.76Z"/>
</g>
<defs>
<clipPath id="clip0_4044_16">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

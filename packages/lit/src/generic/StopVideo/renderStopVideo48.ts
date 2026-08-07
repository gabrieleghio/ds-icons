import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderStopVideo48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M24 1C11.32 1 1 11.32 1 24C1 36.68 11.32 47 24 47C36.68 47 47 36.68 47 24C47 11.32 36.68 1 24 1ZM24 45C12.42 45 3 35.58 3 24C3 12.42 12.42 3 24 3C35.58 3 45 12.42 45 24C45 35.58 35.58 45 24 45Z"/>
<path d="M29.59 15.42H18.42C16.7631 15.42 15.42 16.7631 15.42 18.42V29.59C15.42 31.2469 16.7631 32.59 18.42 32.59H29.59C31.2469 32.59 32.59 31.2469 32.59 29.59V18.42C32.59 16.7631 31.2469 15.42 29.59 15.42Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderUndoRepeatChangeArrow16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_822)">
<path d="M8.39 15.79C4.31 15.79 1 12.47 1 8.4C1 8.1 1.24 7.85 1.54 7.85C1.84 7.85 2.09 8.1 2.09 8.4C2.09 11.88 4.92 14.7 8.39 14.7C11.86 14.7 14.69 11.87 14.69 8.4C14.69 4.93 11.87 2.09 8.39 2.09C6.6 2.09 4.92 2.84 3.72 4.16H5.54C5.84 4.16 6.08 4.4 6.08 4.7C6.08 5 5.84 5.25 5.54 5.25H2.43C2.13 5.25 1.89 5 1.89 4.7V1.54C1.89 1.24 2.13 1 2.43 1C2.73 1 2.98 1.24 2.98 1.54V3.36C4.37 1.85 6.32 1 8.39 1C12.47 1 15.78 4.32 15.78 8.4C15.78 12.48 12.46 15.79 8.39 15.79Z"/>
</g>
<defs>
<clipPath id="clip0_2055_822">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

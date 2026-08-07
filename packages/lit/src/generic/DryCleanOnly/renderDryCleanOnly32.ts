import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderDryCleanOnly32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_4017_114)">
<g clip-path="url(#clip1_4017_114)">
<path d="M15.83 31.65C7.1 31.65 0 24.55 0 15.82C0 7.09 7.1 0 15.83 0C24.56 0 31.66 7.1 31.66 15.82C31.66 24.54 24.56 31.64 15.83 31.64V31.65ZM15.83 1.64C8 1.64 1.64 8 1.64 15.82C1.64 23.64 8.01 30.01 15.83 30.01C23.65 30.01 30.02 23.64 30.02 15.82C30.02 8 23.66 1.64 15.83 1.64Z"/>
</g>
</g>
<defs>
<clipPath id="clip0_4017_114">
<rect width="32" height="32" fill="white"/>
</clipPath>
<clipPath id="clip1_4017_114">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

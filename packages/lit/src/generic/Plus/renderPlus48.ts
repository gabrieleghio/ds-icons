import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderPlus48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M23.82 44.64C23.27 44.64 22.82 44.19 22.82 43.64V4C22.82 3.45 23.27 3 23.82 3C24.37 3 24.82 3.45 24.82 4V43.65C24.82 44.2 24.37 44.65 23.82 44.65V44.64Z"/>
<path d="M43.64 24.82H4C3.45 24.82 3 24.37 3 23.82C3 23.27 3.45 22.82 4 22.82H43.64C44.19 22.82 44.64 23.27 44.64 23.82C44.64 24.37 44.19 24.82 43.64 24.82Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

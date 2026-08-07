import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderZoomOutMinusShrink16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_271)">
<path d="M14.98 15.56C14.82 15.56 14.68 15.5 14.57 15.39L11.2 12.02C10.08 12.95 8.68 13.46 7.23 13.46C3.79 13.46 1 10.66 1 7.23C1 3.8 3.8 1 7.23 1C10.66 1 13.46 3.8 13.46 7.23C13.46 8.68 12.95 10.08 12.02 11.2L15.39 14.57C15.62 14.8 15.62 15.17 15.39 15.39C15.28 15.5 15.13 15.56 14.98 15.56ZM7.23 2.17C4.44 2.17 2.17 4.44 2.17 7.23C2.17 10.02 4.44 12.3 7.24 12.3C10.04 12.3 12.3 10.03 12.3 7.23C12.3 4.43 10.02 2.17 7.23 2.17Z"/>
<path d="M4.23 7.81C3.91 7.81 3.65 7.55 3.65 7.23C3.65 6.91 3.91 6.65 4.23 6.65H10.24C10.56 6.65 10.82 6.91 10.82 7.23C10.82 7.55 10.56 7.81 10.24 7.81H4.23Z"/>
</g>
<defs>
<clipPath id="clip0_2055_271">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

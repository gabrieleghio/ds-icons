import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderHome40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_522)">
<path d="M36.87 37.7125H3.83C3.37 37.7125 3 37.3425 3 36.8825V14.8525C3 14.5725 3.14 14.3125 3.37 14.1625L19.89 3.1425C20.17 2.9525 20.53 2.9525 20.81 3.1425L37.33 14.1525C37.56 14.3025 37.7 14.5725 37.7 14.8425V36.8725C37.7 37.3325 37.33 37.7025 36.87 37.7025V37.7125ZM4.66 36.0525H36.04V15.2925L20.35 4.8325L4.66 15.2925V36.0525Z"/>
<path d="M24.59 37.7125C24.13 37.7125 23.76 37.3425 23.76 36.8825V26.7025H16.96V36.8825C16.96 37.3425 16.59 37.7125 16.13 37.7125C15.67 37.7125 15.3 37.3425 15.3 36.8825V25.8625C15.3 25.4025 15.67 25.0325 16.13 25.0325H24.6C25.06 25.0325 25.43 25.4025 25.43 25.8625V36.8825C25.43 37.3425 25.06 37.7125 24.6 37.7125H24.59Z"/>
</g>
<defs>
<clipPath id="clip0_2055_522">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderRulerFittingSizeMeasure48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M45.66 13.7998H3C2.45 13.7998 2 14.2498 2 14.7998V32.8098C2 33.3598 2.45 33.8098 3 33.8098H45.66C46.21 33.8098 46.66 33.3598 46.66 32.8098V14.7998C46.66 14.2498 46.21 13.7998 45.66 13.7998ZM44.66 31.8098H4V15.7998H10.53V22.5598C10.53 23.1098 10.98 23.5598 11.53 23.5598C12.08 23.5598 12.53 23.1098 12.53 22.5598V15.7998H19.06V22.5598C19.06 23.1098 19.51 23.5598 20.06 23.5598C20.61 23.5598 21.06 23.1098 21.06 22.5598V15.7998H27.59V22.5598C27.59 23.1098 28.04 23.5598 28.59 23.5598C29.14 23.5598 29.59 23.1098 29.59 22.5598V15.7998H36.12V22.5598C36.12 23.1098 36.57 23.5598 37.12 23.5598C37.67 23.5598 38.12 23.1098 38.12 22.5598V15.7998H44.65V31.8098H44.66Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderGoToFirstArrow48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M19.9 23.85L39.02 4.72C39.41 4.33 39.41 3.7 39.02 3.31C38.63 2.92 38 2.92 37.61 3.31L17.78 23.14C17.39 23.53 17.39 24.16 17.78 24.55L37.61 44.38C37.81 44.58 38.06 44.67 38.32 44.67C38.58 44.67 38.83 44.57 39.03 44.38C39.42 43.99 39.42 43.36 39.03 42.97L19.9 23.84V23.85Z"/>
<path d="M10 3C9.45 3 9 3.45 9 4V43.33C9 43.88 9.45 44.33 10 44.33C10.55 44.33 11 43.88 11 43.33V4C11 3.45 10.55 3 10 3Z"/>`)}
  </svg>`;

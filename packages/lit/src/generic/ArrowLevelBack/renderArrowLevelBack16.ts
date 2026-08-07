import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowLevelBack16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M15.02 4.53H3.17L5.61 2.09C5.73 1.97 5.8 1.81 5.8 1.64C5.8 1.47 5.73 1.31 5.62 1.19C5.5 1.07 5.34 1 5.17 1C5 1 4.84 1.07 4.72 1.19L1.19 4.71C1.13 4.77 1.09 4.84 1.05 4.91C1.02 4.99 1 5.07 1 5.16C1 5.25 1.02 5.33 1.05 5.41C1.05 5.43 1.07 5.44 1.08 5.46C1.11 5.51 1.14 5.57 1.18 5.61L4.7 9.13C4.82 9.25 4.98 9.32 5.15 9.32C5.32 9.32 5.48 9.25 5.6 9.13C5.72 9.01 5.79 8.85 5.79 8.68C5.79 8.51 5.72 8.35 5.6 8.23L3.16 5.79H14.38V14.98C14.38 15.33 14.66 15.61 15.01 15.61C15.36 15.61 15.64 15.33 15.64 14.98V5.16C15.64 4.81 15.36 4.53 15.01 4.53H15.02Z"/>`)}
  </svg>`;

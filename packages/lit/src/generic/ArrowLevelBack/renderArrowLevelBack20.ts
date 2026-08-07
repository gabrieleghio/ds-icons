import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowLevelBack20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M18.41 19.06C18.03 19.06 17.72 18.75 17.72 18.37V6.88C17.72 6.82 17.68 6.78 17.62 6.78H3.6C3.6 6.78 3.52 6.8 3.51 6.84C3.5 6.88 3.51 6.92 3.53 6.95L6.58 10C6.71 10.13 6.78 10.3 6.78 10.49C6.78 10.68 6.71 10.85 6.58 10.98C6.45 11.11 6.28 11.18 6.09 11.18C5.9 11.18 5.73 11.11 5.6 10.98L1.2 6.58C1.2 6.58 1.12 6.48 1.09 6.41C1.02 6.27 1 6.18 1 6.09C1 6 1.02 5.91 1.05 5.82C1.08 5.74 1.14 5.66 1.2 5.6L5.6 1.2C5.73 1.07 5.9 1 6.09 1C6.28 1 6.45 1.07 6.58 1.21C6.71 1.34 6.78 1.51 6.78 1.7C6.78 1.89 6.71 2.06 6.58 2.19L3.53 5.24C3.53 5.24 3.49 5.31 3.51 5.35C3.53 5.39 3.56 5.41 3.6 5.41H18.42C18.8 5.41 19.11 5.72 19.11 6.1V18.38C19.11 18.76 18.8 19.07 18.42 19.07L18.41 19.06Z"/>`)}
  </svg>`;

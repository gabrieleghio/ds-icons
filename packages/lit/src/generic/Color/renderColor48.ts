import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderColor48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M29.18 6.71C28.12 5.01 26.29 4 24.3 4C22.31 4 20.48 5.01 19.42 6.71C14.67 14.3 9 24.44 9 29.66C9 38.1 15.87 44.96 24.3 44.96C32.73 44.96 39.6 38.09 39.6 29.65C39.6 24.43 33.93 14.29 29.18 6.7V6.71ZM24.3 42.96V6C25.6 6 26.8 6.66 27.49 7.77C34.01 18.18 37.6 25.96 37.61 29.66C37.61 37 31.64 42.96 24.31 42.96H24.3Z"/>`)}
  </svg>`;

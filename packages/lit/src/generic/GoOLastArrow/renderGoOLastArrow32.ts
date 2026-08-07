import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderGoOLastArrow32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M6.82 30.09C6.6 30.09 6.4 30.01 6.24 29.85C6.09 29.7 6 29.49 6 29.27C6 29.05 6.08 28.85 6.24 28.69L18.92 16.01L6.25 3.41C6.1 3.26 6.01 3.05 6.01 2.83C6.01 2.61 6.09 2.41 6.25 2.25C6.4 2.1 6.61 2.01 6.83 2.01C7.05 2.01 7.25 2.09 7.41 2.25L20.63 15.47C20.78 15.62 20.87 15.83 20.87 16.05C20.87 16.27 20.79 16.47 20.63 16.63L7.41 29.85C7.26 30 7.05 30.09 6.83 30.09H6.82Z"/>
<path d="M25.7 29.86C25.25 29.86 24.88 29.49 24.88 29.04V2.82C24.88 2.37 25.25 2 25.7 2C26.15 2 26.52 2.37 26.52 2.82V29.04C26.52 29.49 26.15 29.86 25.7 29.86Z"/>`)}
  </svg>`;

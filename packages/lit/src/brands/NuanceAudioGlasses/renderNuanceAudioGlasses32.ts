import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderNuanceAudioGlasses32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M25.39 3L27.76 5.73C28.06 6.16 28.22 6.67 28.22 7.19V17.24C28.22 18.38 27.3 19.3 26.16 19.3H19.16C18.73 19.3 18.31 19.41 17.93 19.62L16.61 20.72C15.99 21.06 15.24 21.06 14.62 20.72L13.3 19.62C12.92 19.41 12.5 19.3 12.07 19.3H5.07C3.93 19.3 3.01 18.38 3.01 17.24V7.19C3.01 6.67 3.17 6.16 3.47 5.73L5.84 3M3 23.05V24.01C3 26.38 4.92 28.31 7.3 28.31H8.45C9.8 28.31 11.07 27.67 11.89 26.59L13.27 24.76M28.26 23.05V24.01C28.26 26.38 26.34 28.31 23.96 28.31H22.81C21.46 28.31 20.19 27.67 19.37 26.59L17.99 24.76" stroke="#0E0E0E" stroke-linecap="round" stroke-linejoin="round"/>`)}
  </svg>`;

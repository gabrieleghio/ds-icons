import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderNuanceAudioGlasses20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M16 2L17.48 3.71C17.67 3.98 17.77 4.3 17.77 4.62V10.9C17.77 11.61 17.19 12.19 16.48 12.19H12.1C11.83 12.19 11.57 12.26 11.33 12.39L10.5 13.07C10.11 13.29 9.64 13.29 9.26 13.07L8.43 12.39C8.2 12.26 7.93 12.19 7.66 12.19H3.29C2.58 12.19 2 11.61 2 10.9V4.62C2 4.29 2.1 3.97 2.29 3.71L3.77 2M2.01 14.53V15.13C2.01 16.61 3.21 17.82 4.7 17.82H5.42C6.26 17.82 7.06 17.42 7.57 16.75L8.43 15.6M17.79 14.53V15.13C17.79 16.61 16.59 17.82 15.1 17.82H14.38C13.54 17.82 12.74 17.42 12.23 16.75L11.37 15.6" stroke="#0E0E0E" stroke-linecap="round" stroke-linejoin="round"/>`)}
  </svg>`;

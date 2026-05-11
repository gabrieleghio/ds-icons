import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderDownloaded24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.83 21.95C1.37 21.95 1 21.58 1 21.12V16.05C1 15.59 1.37 15.22 1.83 15.22C2.29 15.22 2.66 15.59 2.66 16.05V20.17C2.66 20.24 2.71 20.29 2.78 20.29H20.72C20.79 20.29 20.84 20.24 20.84 20.17V16.05C20.84 15.59 21.21 15.22 21.67 15.22C22.13 15.22 22.5 15.59 22.5 16.05V21.12C22.5 21.58 22.13 21.95 21.67 21.95H1.83Z" fill="black"/>
<path d="M9.29 14.48C9.07 14.48 8.86 14.39 8.7 14.24L3.79 9.33C3.63 9.17 3.55 8.96 3.55 8.74C3.55 8.52 3.64 8.31 3.79 8.15C3.95 8 4.16 7.91 4.38 7.91C4.6 7.91 4.81 8 4.97 8.15L9.21 12.39C9.21 12.39 9.26 12.43 9.29 12.43C9.32 12.43 9.35 12.42 9.37 12.39L18.52 3.24C18.68 3.08 18.88 3 19.11 3C19.34 3 19.54 3.09 19.7 3.24C19.86 3.4 19.94 3.61 19.94 3.83C19.94 4.05 19.85 4.26 19.7 4.42L9.88 14.24C9.72 14.4 9.52 14.48 9.29 14.48Z" fill="black"/>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderDownloadPhotoArrow48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M33.73 27.62L25 36.35V9.23C25 8.68 24.55 8.23 24 8.23C23.45 8.23 23 8.68 23 9.23V36.35L14.27 27.62C13.88 27.23 13.25 27.23 12.86 27.62C12.47 28.01 12.47 28.64 12.86 29.03L23.3 39.47C23.39 39.56 23.5 39.64 23.63 39.69C23.75 39.74 23.88 39.77 24.01 39.77C24.14 39.77 24.27 39.74 24.39 39.69C24.51 39.64 24.62 39.57 24.72 39.47L35.16 29.03C35.55 28.64 35.55 28.01 35.16 27.62C34.77 27.23 34.14 27.23 33.75 27.62H33.73Z"/>
<path d="M24 1C11.32 1 1 11.32 1 24C1 36.68 11.32 47 24 47C36.68 47 47 36.68 47 24C47 11.32 36.68 1 24 1ZM24 45C12.42 45 3 35.58 3 24C3 12.42 12.42 3 24 3C35.58 3 45 12.42 45 24C45 35.58 35.58 45 24 45Z"/>`)}
  </svg>`;

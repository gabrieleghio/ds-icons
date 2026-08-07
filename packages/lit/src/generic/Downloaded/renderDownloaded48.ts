import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderDownloaded48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M4 42.5625C3.45 42.5625 3 42.1125 3 41.5625V31.4225C3 30.8725 3.45 30.4225 4 30.4225C4.55 30.4225 5 30.8725 5 31.4225V40.5625H42.67V31.4225C42.67 30.8725 43.12 30.4225 43.67 30.4225C44.22 30.4225 44.67 30.8725 44.67 31.4225V41.5625C44.67 42.1125 44.22 42.5625 43.67 42.5625H4Z"/>
<path d="M18.92 27.6325C18.66 27.6325 18.41 27.5325 18.21 27.3425L8.39 17.5225C8 17.1325 8 16.5025 8.39 16.1125C8.78 15.7225 9.41 15.7225 9.8 16.1125L18.92 25.2325L37.86 6.2925C38.25 5.9025 38.88 5.9025 39.27 6.2925C39.66 6.6825 39.66 7.3125 39.27 7.7025L19.63 27.3425C19.43 27.5425 19.18 27.6325 18.92 27.6325Z"/>`)}
  </svg>`;

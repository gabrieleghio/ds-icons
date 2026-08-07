import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderTrainingWorkingOut48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M44.57 22.55H42.17V20C42.17 19.45 41.72 19 41.17 19H37.31V16C37.31 15.45 36.86 15 36.31 15H31.37C30.82 15 30.37 15.45 30.37 16V22.55H18.2V16C18.2 15.45 17.75 15 17.2 15H12.26C11.71 15 11.26 15.45 11.26 16V19H7.4C6.85 19 6.4 19.45 6.4 20V22.55H4C3.45 22.55 3 23 3 23.55C3 24.1 3.45 24.55 4 24.55H6.4V27.1C6.4 27.65 6.85 28.1 7.4 28.1H11.26V31.1C11.26 31.65 11.71 32.1 12.26 32.1H17.2C17.75 32.1 18.2 31.65 18.2 31.1V24.55H30.37V31.1C30.37 31.65 30.82 32.1 31.37 32.1H36.31C36.86 32.1 37.31 31.65 37.31 31.1V28.1H41.17C41.72 28.1 42.17 27.65 42.17 27.1V24.55H44.57C45.12 24.55 45.57 24.1 45.57 23.55C45.57 23 45.12 22.55 44.57 22.55ZM11.11 26.1H8.42V21H11.11V26.1ZM16.21 30.1H13.27V17H16.21V30.1ZM35.32 30.1H32.38V17H35.32V30.1ZM40.17 26.1H37.48V21H40.17V26.1Z"/>`)}
  </svg>`;

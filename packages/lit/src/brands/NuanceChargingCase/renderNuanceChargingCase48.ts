import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderNuanceChargingCase48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M30.58 27.06H12.76C8.48 27.06 5.01 23.59 5.01 19.31V10H42.48L42.51 16.39M5 14.04C5 14.04 15.47 19.12 19.25 19.85C21.47 20.28 26.08 20.28 28.3 19.85C32.05 19.11 42.46 14.05 42.46 14.05M43 24.6L35.81 31.79H43L36.01 38.78" stroke="#0E0E0E" stroke-linecap="round" stroke-linejoin="round"/>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderNuanceChargingCase32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M20.05 18.38H8.17C5.32 18.38 3 16.07 3 13.21V7H27.98L28 11.26M3 9.7C3 9.7 9.98 13.08 12.5 13.58C13.98 13.87 17.06 13.87 18.54 13.58C21.04 13.09 27.98 9.71 27.98 9.71M28.32 15.74L23.53 20.53H28.32L23.66 25.19" stroke="#0E0E0E" stroke-linecap="round" stroke-linejoin="round"/>`)}
  </svg>`;

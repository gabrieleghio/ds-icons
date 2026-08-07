import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderNuanceChargingCase20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M12.66 11.11H5.23C3.45 11.11 2 9.66 2 7.88V4H17.61V6.66M2.01 5.69C2.01 5.69 6.37 7.8 7.95 8.11C8.88 8.29 10.8 8.29 11.72 8.11C13.28 7.8 17.62 5.69 17.62 5.69M17.83 10.09L14.84 13.08H17.83L14.92 15.99" stroke="#0E0E0E" stroke-linecap="round" stroke-linejoin="round"/>`)}
  </svg>`;

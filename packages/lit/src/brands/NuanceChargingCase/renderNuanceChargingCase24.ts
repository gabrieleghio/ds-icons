import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderNuanceChargingCase24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M14.79 13.53H5.88C3.74 13.53 2 11.79 2 9.65V5H20.73L20.75 8.2M2 7.01C2 7.01 7.24 9.55 9.12 9.92C10.23 10.14 12.54 10.13 13.65 9.92C15.53 9.55 20.73 7.02 20.73 7.02M21 12.29L17.4 15.89H21L17.5 19.38" stroke="#0E0E0E" stroke-linecap="round" stroke-linejoin="round"/>`)}
  </svg>`;

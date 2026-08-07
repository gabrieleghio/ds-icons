import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderWashDryFlat40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M36.2803 2.00003C36.7677 2.00028 37.1602 2.39246 37.1602 2.87991V36.2803C37.1599 36.7675 36.7675 37.1599 36.2803 37.1602H2.87988C2.39243 37.1602 2.00025 36.7677 2 36.2803V2.87991C2 2.3923 2.39227 2.00003 2.87988 2.00003H36.2803ZM3.75977 35.3994H35.3994V3.7598H3.75977V35.3994ZM30.0195 18.7002C30.5071 18.7002 30.8994 19.0925 30.8994 19.5801C30.8993 20.0676 30.5071 20.46 30.0195 20.46H9.12988C8.64236 20.46 8.25015 20.0676 8.25 19.5801C8.25 19.0925 8.64227 18.7002 9.12988 18.7002H30.0195Z"/>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFolder16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M1.24406 13.2301C0.924063 13.2301 0.664062 12.9701 0.664062 12.6501V3.47014C0.664062 3.15014 0.924063 2.89014 1.24406 2.89014H5.02406C5.22406 2.89014 5.41406 3.00014 5.52406 3.17014L6.44406 4.65014L14.2841 4.60014C14.6041 4.60014 14.8641 4.86014 14.8641 5.18014V12.6401C14.8641 12.9601 14.6041 13.2201 14.2841 13.2201H1.24406V13.2301ZM13.6941 12.0601V5.77014H6.08406C5.88406 5.77014 5.69406 5.66014 5.58406 5.49014L4.66406 4.01014L1.82406 4.05014V12.0601H13.6841H13.6941Z"/>`)}
  </svg>`;

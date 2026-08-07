import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueSingleLayoutFilled16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M14.79 1H1.58C1.25967 1 1 1.25967 1 1.58V7.16C1 7.48033 1.25967 7.74 1.58 7.74H14.79C15.1103 7.74 15.37 7.48033 15.37 7.16V1.58C15.37 1.25967 15.1103 1 14.79 1Z"/>
<path d="M14.79 8.64H1.58C1.25967 8.64 1 8.89967 1 9.22V14.8C1 15.1203 1.25967 15.38 1.58 15.38H14.79C15.1103 15.38 15.37 15.1203 15.37 14.8V9.22C15.37 8.89967 15.1103 8.64 14.79 8.64Z"/>`)}
  </svg>`;

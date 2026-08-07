import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueSingleLayout16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M1.58 7.73C1.26 7.73 1 7.47 1 7.15V1.58C1 1.26 1.26 1 1.58 1H14.79C15.11 1 15.37 1.26 15.37 1.58V7.15C15.37 7.47 15.11 7.73 14.79 7.73H1.58ZM14.2 6.56V2.16H2.16V6.56H14.2Z"/>
<path d="M1.58 15.37C1.26 15.37 1 15.11 1 14.79V9.22C1 8.9 1.26 8.64 1.58 8.64H14.79C15.11 8.64 15.37 8.9 15.37 9.22V14.79C15.37 15.11 15.11 15.37 14.79 15.37H1.58ZM14.2 14.2V9.8H2.16V14.2H14.2Z"/>`)}
  </svg>`;

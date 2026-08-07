import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderWashDryNormal20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M9.98 16.65C6.3 16.65 3.31 13.66 3.31 9.98C3.31 6.3 6.3 3.31 9.98 3.31C13.66 3.31 16.65 6.3 16.65 9.98C16.65 13.66 13.66 16.65 9.98 16.65ZM9.98 4.57C7 4.57 4.57 7 4.57 9.98C4.57 12.96 7 15.39 9.98 15.39C12.96 15.39 15.39 12.96 15.39 9.98C15.39 7 12.96 4.57 9.98 4.57Z"/>
<path d="M1.63 18.96C1.28 18.96 1 18.68 1 18.33V1.63C1 1.28 1.28 1 1.63 1H18.33C18.68 1 18.96 1.28 18.96 1.63V18.33C18.96 18.68 18.68 18.96 18.33 18.96H1.63ZM2.36 2.26C2.3 2.26 2.26 2.3 2.26 2.36V17.6C2.26 17.66 2.3 17.7 2.36 17.7H17.6C17.66 17.7 17.7 17.66 17.7 17.6V2.36C17.7 2.3 17.66 2.26 17.6 2.26H2.36Z"/>`)}
  </svg>`;

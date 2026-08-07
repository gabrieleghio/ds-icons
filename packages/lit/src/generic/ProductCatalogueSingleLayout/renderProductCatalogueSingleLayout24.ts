import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueSingleLayout24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M1.76 10.87C1.34 10.87 1 10.53 1 10.11V1.76C1 1.34 1.34 1 1.76 1H21.57C21.99 1 22.32 1.34 22.32 1.76V10.11C22.32 10.53 21.98 10.87 21.57 10.87H1.76ZM2.63 2.51C2.56 2.51 2.51 2.56 2.51 2.63V9.23C2.51 9.3 2.56 9.35 2.63 9.35H20.69C20.76 9.35 20.81 9.3 20.81 9.23V2.63C20.81 2.56 20.76 2.51 20.69 2.51H2.63Z"/>
<path d="M1.76 22.32C1.34 22.32 1 21.98 1 21.57V13.22C1 12.8 1.34 12.46 1.76 12.46H21.57C21.99 12.46 22.32 12.8 22.32 13.22V21.57C22.32 21.99 21.98 22.32 21.57 22.32H1.76ZM2.63 13.97C2.56 13.97 2.51 14.02 2.51 14.09V20.69C2.51 20.76 2.56 20.81 2.63 20.81H20.69C20.76 20.81 20.81 20.76 20.81 20.69V14.09C20.81 14.02 20.76 13.97 20.69 13.97H2.63Z"/>`)}
  </svg>`;

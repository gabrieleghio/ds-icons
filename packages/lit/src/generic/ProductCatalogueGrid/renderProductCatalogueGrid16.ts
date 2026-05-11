import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueGrid16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.58 7.72C1.26 7.72 1 7.46 1 7.14V1.58C1 1.26 1.26 1 1.58 1H7.14C7.46 1 7.72 1.26 7.72 1.58V7.14C7.72 7.46 7.46 7.72 7.14 7.72H1.58ZM6.55 6.55V2.16H2.16V6.55H6.55Z" fill="black"/>
<path d="M9.2 7.72C8.88 7.72 8.62 7.46 8.62 7.14V1.58C8.62 1.26 8.88 1 9.2 1H14.76C15.08 1 15.34 1.26 15.34 1.58V7.14C15.34 7.46 15.08 7.72 14.76 7.72H9.2ZM14.18 6.55V2.16H9.79V6.55H14.18Z" fill="black"/>
<path d="M1.58 15.35C1.26 15.35 1 15.09 1 14.77V9.21C1 8.89 1.26 8.63 1.58 8.63H7.14C7.46 8.63 7.72 8.89 7.72 9.21V14.77C7.72 15.09 7.46 15.35 7.14 15.35H1.58ZM6.55 14.18V9.79H2.16V14.18H6.55Z" fill="black"/>
<path d="M9.2 15.35C8.88 15.35 8.62 15.09 8.62 14.77V9.21C8.62 8.89 8.88 8.63 9.2 8.63H14.76C15.08 8.63 15.34 8.89 15.34 9.21V14.77C15.34 15.09 15.08 15.35 14.76 15.35H9.2ZM14.18 14.18V9.79H9.79V14.18H14.18Z" fill="black"/>`)}
  </svg>`;

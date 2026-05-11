import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderWashDryFlat20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.63 18.96C1.28 18.96 1 18.68 1 18.33V1.63C1 1.28 1.28 1 1.63 1H18.33C18.68 1 18.96 1.28 18.96 1.63V18.33C18.96 18.68 18.68 18.96 18.33 18.96H1.63ZM2.36 2.26C2.3 2.26 2.26 2.3 2.26 2.36V17.6C2.26 17.66 2.3 17.7 2.36 17.7H17.6C17.66 17.7 17.7 17.66 17.7 17.6V2.36C17.7 2.3 17.66 2.26 17.6 2.26H2.36Z" fill="black"/>
<path d="M4.76 10.61C4.41 10.61 4.13 10.33 4.13 9.98C4.13 9.63 4.41 9.35 4.76 9.35H15.21C15.56 9.35 15.84 9.63 15.84 9.98C15.84 10.33 15.56 10.61 15.21 10.61H4.76Z" fill="black"/>`)}
  </svg>`;

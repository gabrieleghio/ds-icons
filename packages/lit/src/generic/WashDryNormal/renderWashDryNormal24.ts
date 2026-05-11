import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderWashDryNormal24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M11.78 19.78C7.37 19.78 3.78 16.19 3.78 11.78C3.78 7.37 7.37 3.78 11.78 3.78C16.19 3.78 19.78 7.37 19.78 11.78C19.78 16.19 16.19 19.78 11.78 19.78ZM11.78 5.29C8.2 5.29 5.29 8.2 5.29 11.78C5.29 15.36 8.2 18.27 11.78 18.27C15.36 18.27 18.27 15.36 18.27 11.78C18.27 8.2 15.36 5.29 11.78 5.29Z" fill="black"/>
<path d="M1.76 22.56C1.34 22.56 1 22.22 1 21.8V1.76C1 1.34 1.34 1 1.76 1H21.8C22.22 1 22.55 1.34 22.55 1.76V21.8C22.55 22.22 22.21 22.56 21.8 22.56H1.76ZM2.63 2.51C2.56 2.51 2.51 2.56 2.51 2.63V20.92C2.51 20.99 2.56 21.04 2.63 21.04H20.92C20.99 21.04 21.04 20.99 21.04 20.92V2.63C21.04 2.56 20.99 2.51 20.92 2.51H2.63Z" fill="black"/>`)}
  </svg>`;

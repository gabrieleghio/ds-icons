import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderWashDryFlat24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.76 22.56C1.34 22.56 1 22.22 1 21.8V1.76003C1 1.34003 1.34 1.00003 1.76 1.00003H21.8C22.22 1.00003 22.55 1.34003 22.55 1.76003V21.8C22.55 22.22 22.21 22.56 21.8 22.56H1.76ZM2.63 2.51003C2.56 2.51003 2.51 2.56003 2.51 2.63003V20.92C2.51 20.99 2.56 21.04 2.63 21.04H20.92C20.99 21.04 21.04 20.99 21.04 20.92V2.63003C21.04 2.56003 20.99 2.51003 20.92 2.51003H2.63Z" fill="black"/>
<path d="M5.51 12.54C5.09 12.54 4.76 12.2 4.76 11.78C4.76 11.36 5.1 11.03 5.51 11.03H18.05C18.47 11.03 18.8 11.37 18.8 11.78C18.8 12.19 18.46 12.54 18.05 12.54H5.51Z" fill="black"/>`)}
  </svg>`;

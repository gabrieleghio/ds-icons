import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueSingleLayout32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M2.82 14.78C2.37 14.78 2 14.41 2 13.96V2.82C2 2.37 2.37 2 2.82 2H29.23C29.68 2 30.05 2.37 30.05 2.82V13.96C30.05 14.41 29.68 14.78 29.23 14.78H2.82ZM3.64 13.2L28.47 13.15L28.42 3.59L3.64 3.64V13.2Z" fill="black"/>
<path d="M2.82 30.05C2.37 30.05 2 29.68 2 29.23V18.09C2 17.64 2.37 17.27 2.82 17.27H29.23C29.68 17.27 30.05 17.64 30.05 18.09V29.23C30.05 29.68 29.68 30.05 29.23 30.05H2.82ZM3.64 28.47L28.47 28.42L28.42 18.86L3.64 18.91V28.47Z" fill="black"/>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderVideoCamera16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M3.45 6.94C3.13 6.94 2.87 6.68 2.87 6.36C2.87 6.04 3.13 5.78 3.45 5.78H5.82C6.14 5.78 6.4 6.04 6.4 6.36C6.4 6.68 6.14 6.94 5.82 6.94H3.45Z" fill="black"/>
<path d="M3.25 12.65C2.01 12.65 1 11.64 1 10.4V6.25C1 5.01 2.01 4 3.25 4H10.8C11.81 4 12.67 4.65 12.95 5.6L14.45 5.14C14.51 5.12 14.56 5.11 14.62 5.11C14.74 5.11 14.87 5.15 14.97 5.23C15.12 5.34 15.21 5.51 15.21 5.7V10.96C15.21 11.15 15.12 11.32 14.97 11.43C14.87 11.5 14.75 11.54 14.63 11.54L14.48 11.52L12.96 11.05C12.68 12 11.81 12.65 10.81 12.65H3.25ZM3.25 5.17C2.65 5.17 2.17 5.66 2.17 6.25V10.4C2.17 11 2.66 11.48 3.25 11.48H10.8C11.4 11.48 11.88 10.99 11.88 10.4V6.25C11.88 5.65 11.39 5.17 10.8 5.17H3.25ZM14.04 6.49L13.05 6.8V9.87L14.04 10.18V6.49Z" fill="black"/>`)}
  </svg>`;

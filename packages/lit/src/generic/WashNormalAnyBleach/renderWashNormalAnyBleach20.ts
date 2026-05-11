import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderWashNormalAnyBleach20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.69 18.43C1.31 18.43 1 18.12 1 17.74C1 17.57 1.07 17.4 1.19 17.27L9.4 1.36003C9.46 1.23003 9.57 1.14003 9.71 1.07003C9.79 1.03003 9.85 1.01003 9.93 1.00003H10.13L10.3 1.05003C10.48 1.14003 10.58 1.23003 10.65 1.36003L18.9 17.31C19.04 17.58 18.98 17.9 18.76 18.12C18.7 18.28 18.48 18.44 18.2 18.44H1.69V18.43ZM10.02 3.29003C10.02 3.29003 9.95 3.31003 9.93 3.34003L2.92 16.9C2.92 16.9 2.91 16.97 2.92 17C2.94 17.03 2.97 17.05 3 17.05H17.02C17.02 17.05 17.09 17.03 17.1 17C17.12 16.97 17.12 16.93 17.1 16.9L10.1 3.34003C10.1 3.34003 10.05 3.29003 10.01 3.29003H10.02Z" fill="black"/>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderEducationGraduation16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M8.22 13.25C5.47 13.25 3.32 12.13 3.32 10.71V8.09L1.34 7.17C1.13 7.08 1 6.87 1 6.64C1 6.41 1.13 6.2 1.34 6.11L7.95 3.05C8.03 3.01 8.11 3 8.19 3C8.27 3 8.36 3.02 8.43 3.05L15.03 6.1C15.09 6.13 15.14 6.16 15.2 6.21C15.26 6.28 15.29 6.32 15.32 6.38C15.36 6.49 15.38 6.56 15.38 6.63V9.69C15.38 10.01 15.12 10.27 14.8 10.27C14.48 10.27 14.22 10.01 14.22 9.69V7.54L13.11 8.05V10.68C13.11 12.11 10.96 13.22 8.21 13.22L8.22 13.25ZM4.49 10.71C4.49 11.18 5.81 12.09 8.22 12.09C10.63 12.09 11.95 11.18 11.95 10.71V8.62L8.44 10.24C8.36 10.28 8.28 10.29 8.2 10.29C8.12 10.29 8.03 10.27 7.95 10.24L4.49 8.64V10.72V10.71ZM8.24 9.08L13.42 6.65L8.19 4.23L2.97 6.65L8.24 9.08Z" fill="black"/>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderDownloaded20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.69 17.79C1.31 17.79 1 17.48 1 17.1V12.88C1 12.5 1.31 12.19 1.69 12.19C2.07 12.19 2.38 12.5 2.38 12.88V16.31C2.38 16.37 2.42 16.41 2.48 16.41H17.43C17.49 16.41 17.53 16.37 17.53 16.31V12.88C17.53 12.5 17.84 12.19 18.22 12.19C18.6 12.19 18.91 12.5 18.91 12.88V17.1C18.91 17.48 18.6 17.79 18.22 17.79H1.69Z" fill="black"/>
<path d="M7.9 11.56C7.71 11.56 7.54 11.49 7.41 11.36L3.32 7.27C3.19 7.14 3.12 6.96 3.12 6.78C3.12 6.6 3.19 6.42 3.32 6.29C3.45 6.16 3.62 6.09 3.81 6.09C4 6.09 4.17 6.16 4.3 6.29L7.83 9.82C7.83 9.82 7.87 9.85 7.9 9.85C7.93 9.85 7.95 9.85 7.97 9.82L15.6 2.2C15.73 2.07 15.9 2 16.09 2C16.28 2 16.45 2.07 16.58 2.2C16.71 2.33 16.78 2.5 16.78 2.69C16.78 2.88 16.71 3.05 16.58 3.18L8.4 11.36C8.27 11.49 8.1 11.56 7.91 11.56H7.9Z" fill="black"/>`)}
  </svg>`;

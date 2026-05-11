import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderEducationGraduation32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M16.08 25.8C10.78 25.8 6.64 23.72 6.64 21.06V15.58L2.47 13.68C2.18 13.55 2 13.26 2 12.94C2 12.62 2.19 12.33 2.47 12.2L15.7 6.08C15.81 6.03 15.92 6 16.04 6C16.16 6 16.27 6.03 16.38 6.07L29.59 12.18C29.68 12.22 29.75 12.27 29.83 12.34C29.93 12.45 29.97 12.51 30 12.57C30.06 12.73 30.09 12.83 30.09 12.93V19.05C30.09 19.5 29.72 19.87 29.27 19.87C28.82 19.87 28.45 19.5 28.45 19.05V14.13L25.5 15.57L25.53 21.05C25.53 23.71 21.38 25.79 16.09 25.79L16.08 25.8ZM8.27 21.06C8.27 22.53 11.48 24.17 16.08 24.17C20.68 24.17 23.89 22.53 23.89 21.06V16.25L16.38 19.8C16.27 19.85 16.16 19.88 16.04 19.88C15.92 19.88 15.81 19.85 15.7 19.8L8.28 16.37V21.07L8.27 21.06ZM4.66 12.98L16.1 18.18L27.42 12.89L16.04 7.72L4.66 12.98Z" fill="black"/>`)}
  </svg>`;

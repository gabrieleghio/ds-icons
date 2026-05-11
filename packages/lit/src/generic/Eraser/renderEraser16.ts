import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderEraser16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.58 14.18C1.26 14.18 1 13.92 1 13.6C1 13.28 1.26 13.02 1.58 13.02H6.32L3.56 10.26C3.45 10.15 3.39 10 3.39 9.85C3.39 9.7 3.45 9.55 3.56 9.44L10.83 2.17C10.94 2.06 11.09 2 11.24 2C11.39 2 11.54 2.06 11.65 2.17L15.4 5.92C15.51 6.03 15.57 6.18 15.57 6.33C15.57 6.48 15.51 6.63 15.4 6.74L8.13 14.01C8.08 14.07 8.01 14.11 7.94 14.14C7.88 14.17 7.8 14.18 7.72 14.18H1.58ZM7.73 12.78L8.91 11.6L5.98 8.67L4.8 9.85L7.73 12.78ZM9.74 10.77L14.18 6.33L11.25 3.4L6.81 7.84L9.74 10.77Z" fill="black"/>`)}
  </svg>`;

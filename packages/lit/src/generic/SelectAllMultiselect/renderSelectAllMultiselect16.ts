import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSelectAllMultiselect16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M11.99 4.16V2.6C11.99 1.71 11.27 1 10.39 1H2.6C1.72 1 1 1.71 1 2.6V10.82C1 11.7 1.72 12.42 2.6 12.42H10.4C11.28 12.42 12 11.7 12 10.82V4.16H11.99ZM10.4 11.25H2.6C2.36 11.25 2.17 11.06 2.17 10.82V2.6C2.17 2.36 2.36 2.16 2.6 2.16H10.39C10.63 2.16 10.82 2.36 10.82 2.6V10.82C10.83 11.06 10.64 11.25 10.4 11.25Z" fill="#010101"/>
<path d="M13.99 4.6C13.99 3.71 13.27 3 12.39 3H11.99V4.16H12.39C12.63 4.16 12.82 4.36 12.82 4.6V12.82C12.83 13.06 12.64 13.25 12.4 13.25H4.6C4.36 13.25 4.17 13.06 4.17 12.82V12.42H3V12.82C3 13.7 3.72 14.42 4.6 14.42H12.4C13.28 14.42 14 13.7 14 12.82V4.6H13.99Z" fill="#010101"/>`)}
  </svg>`;

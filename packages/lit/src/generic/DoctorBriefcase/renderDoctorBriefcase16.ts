import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderDoctorBriefcase16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.58 14.12C1.26 14.12 1 13.86 1 13.54V4.77C1 4.45 1.26 4.19 1.58 4.19H5.4V3.96C5.4 2.88 6.28 2 7.36 2H9.01C10.09 2 10.97 2.88 10.97 3.96V4.19H14.79C15.11 4.19 15.37 4.45 15.37 4.77V13.54C15.37 13.86 15.11 14.12 14.79 14.12H1.58ZM14.2 12.95V7.93C14.12 8.03 14.03 8.13 13.94 8.22C13.02 9.14 11.79 9.65 10.49 9.65H9.72V10.44C9.72 10.76 9.46 11.02 9.14 11.02H7.25C6.93 11.02 6.67 10.76 6.67 10.44V9.65H5.9C4.44 9.65 3.11 9.03 2.18 7.93V12.95H14.22H14.2ZM8.54 9.86V8.29H7.82V9.86H8.54ZM10.48 8.49C11.47 8.49 12.41 8.1 13.11 7.4C13.66 6.85 14.03 6.13 14.15 5.36H2.21C2.49 7.13 4.07 8.49 5.88 8.49H6.65V7.7C6.65 7.38 6.91 7.12 7.23 7.12H9.12C9.44 7.12 9.7 7.38 9.7 7.7V8.49H10.48ZM9.79 4.1V3.95C9.79 3.52 9.44 3.16 9 3.16H7.35C6.91 3.16 6.56 3.51 6.56 3.95V4.1H9.79Z" fill="black"/>`)}
  </svg>`;

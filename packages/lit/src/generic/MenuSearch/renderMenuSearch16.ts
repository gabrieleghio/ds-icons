import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderMenuSearch16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_515)">
<path d="M14.51 12.41C14.35 12.41 14.21 12.35 14.1 12.24L12.17 10.31C11.47 10.83 10.62 11.12 9.74 11.12C7.5 11.12 5.68 9.3 5.68 7.06C5.68 4.82 7.5 3 9.74 3C11.98 3 13.8 4.82 13.8 7.06C13.8 7.93 13.51 8.79 12.99 9.49L14.92 11.42C15.15 11.65 15.15 12.02 14.92 12.25C14.81 12.36 14.66 12.42 14.51 12.42V12.41ZM9.74 4.16C8.15 4.16 6.85 5.46 6.85 7.05C6.85 8.64 8.15 9.94 9.74 9.94C11.33 9.94 12.63 8.64 12.63 7.05C12.63 5.46 11.33 4.16 9.74 4.16ZM1.58 11.96C1.26 11.96 1 11.7 1 11.38C1 11.06 1.26 10.8 1.58 10.8H6.91C7.23 10.8 7.49 11.06 7.49 11.38C7.49 11.7 7.23 11.96 6.91 11.96H1.58ZM1.58 8.28C1.26 8.28 1 8.02 1 7.7C1 7.38 1.26 7.12 1.58 7.12H4.41C4.73 7.12 4.99 7.38 4.99 7.7C4.99 8.02 4.73 8.28 4.41 8.28H1.58ZM1.58 4.61C1.26 4.61 1 4.35 1 4.03C1 3.71 1.26 3.45 1.58 3.45H5.41C5.73 3.45 5.99 3.71 5.99 4.03C5.99 4.35 5.73 4.61 5.41 4.61H1.58Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_515">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

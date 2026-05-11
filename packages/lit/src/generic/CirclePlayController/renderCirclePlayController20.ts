import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCirclePlayController20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1714)">
<path d="M9.8 19.6C4.4 19.6 0 15.2 0 9.8C0 4.4 4.4 0 9.8 0C15.2 0 19.6 4.39 19.6 9.8C19.6 15.21 15.2 19.6 9.8 19.6ZM9.8 1.26C5.09 1.26 1.26 5.09 1.26 9.8C1.26 14.51 5.09 18.34 9.8 18.34C14.51 18.34 18.34 14.51 18.34 9.8C18.34 5.09 14.51 1.26 9.8 1.26Z" fill="black"/>
<path d="M6.59 15.03C6.24 15.03 5.96 14.75 5.96 14.4V5.15C5.96 4.8 6.24 4.52 6.59 4.52C6.94 4.52 7.22 4.8 7.22 5.15V14.41C7.22 14.76 6.94 15.04 6.59 15.04V15.03Z" fill="black"/>
<path d="M14.67 10.45C14.56 10.45 14.45 10.42 14.36 10.37L6.34 5.73C6.04 5.56 5.94 5.17 6.11 4.87C6.22 4.68 6.43 4.55 6.65 4.55C6.76 4.55 6.87 4.58 6.96 4.64L14.98 9.27C15.12 9.35 15.23 9.49 15.27 9.65C15.31 9.81 15.29 9.98 15.21 10.13C15.1 10.32 14.89 10.45 14.66 10.45H14.67Z" fill="black"/>
<path d="M6.66 15.08C6.43 15.08 6.23 14.96 6.12 14.77C6.04 14.62 6.01 14.46 6.05 14.29C6.09 14.13 6.2 13.99 6.34 13.91L14.36 9.28C14.46 9.22 14.57 9.2 14.67 9.2C14.89 9.2 15.1 9.32 15.22 9.51C15.39 9.81 15.29 10.2 14.99 10.37L6.97 15C6.87 15.06 6.76 15.08 6.66 15.08Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1714">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

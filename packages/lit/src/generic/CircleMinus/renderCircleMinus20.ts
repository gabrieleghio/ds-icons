import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCircleMinus20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_418)">
<path d="M4.92 10.5C4.57 10.5 4.29 10.22 4.29 9.87C4.29 9.52 4.57 9.24 4.92 9.24H14.82C15.17 9.24 15.45 9.52 15.45 9.87C15.45 10.22 15.17 10.5 14.82 10.5H4.92Z" fill="black"/>
<path d="M9.87 19.74C4.43 19.74 0 15.31 0 9.87C0 4.43 4.43 0 9.87 0C15.31 0 19.74 4.43 19.74 9.87C19.74 15.31 15.31 19.74 9.87 19.74ZM9.87 1.24C5.11 1.24 1.24 5.11 1.24 9.87C1.24 14.63 5.11 18.5 9.87 18.5C14.63 18.5 18.5 14.63 18.5 9.87C18.5 5.11 14.63 1.24 9.87 1.24Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_418">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

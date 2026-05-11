import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderInfo20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_342)">
<path d="M9.87 19.74C4.43 19.74 0 15.31 0 9.87C0 4.43 4.43 0 9.87 0C15.31 0 19.74 4.43 19.74 9.87C19.74 15.31 15.31 19.74 9.87 19.74ZM9.87 1.24C5.11 1.24 1.24 5.11 1.24 9.87C1.24 14.63 5.11 18.5 9.87 18.5C14.63 18.5 18.5 14.63 18.5 9.87C18.5 5.11 14.63 1.24 9.87 1.24Z" fill="black"/>
<path d="M9.87 13.9C9.56 13.9 9.31 13.65 9.31 13.34V8.93C9.31 8.62 9.56 8.37 9.87 8.37C10.18 8.37 10.43 8.62 10.43 8.93V13.34C10.43 13.65 10.18 13.9 9.87 13.9Z" fill="black"/>
<path d="M9.87 7.01C9.55 7.01 9.28 6.75 9.28 6.43C9.28 6.11 9.54 5.84 9.87 5.84C10.2 5.84 10.46 6.1 10.46 6.43C10.46 6.76 10.2 7.01 9.87 7.01Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_342">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

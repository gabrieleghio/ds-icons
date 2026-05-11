import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderHome16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_534)">
<path d="M1.58 15.38C1.26 15.38 1 15.12 1 14.8V5.99C1 5.79 1.1 5.61 1.26 5.5L7.87 1.1C7.97 1.04 8.08 1 8.19 1C8.3 1 8.42 1.03 8.51 1.1L15.12 5.5C15.28 5.61 15.38 5.79 15.38 5.99V14.8C15.38 15.12 15.12 15.38 14.8 15.38H1.58ZM14.22 14.22V6.25L8.2 2.29L2.12 6.33L2.16 14.22H14.22Z" fill="black"/>
<path d="M9.88 15.38C9.56 15.38 9.3 15.12 9.3 14.8V10.98H7.08V14.8C7.08 15.12 6.82 15.38 6.5 15.38C6.18 15.38 5.92 15.12 5.92 14.8V10.39C5.92 10.07 6.18 9.81 6.5 9.81H9.89C10.21 9.81 10.47 10.07 10.47 10.39V14.8C10.47 15.12 10.21 15.38 9.89 15.38H9.88Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_534">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

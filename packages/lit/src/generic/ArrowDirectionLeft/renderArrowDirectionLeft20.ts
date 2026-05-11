import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderArrowDirectionLeft20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1569)">
<path d="M5.47 15.89C5.3 15.89 5.14 15.82 5.02 15.71L0.2 10.88C0.08 10.76 0.01 10.6 0.01 10.44C0.01 10.28 0.08 10.11 0.2 9.99C0.32 9.87 0.48 9.81 0.64 9.81C0.8 9.81 0.97 9.88 1.09 9.99L5.91 14.81C6.03 14.93 6.1 15.09 6.1 15.25C6.1 15.41 6.03 15.58 5.91 15.7C5.79 15.82 5.63 15.88 5.47 15.88V15.89Z" fill="black"/>
<path d="M0.64 11.07C0.47 11.07 0.31 11 0.19 10.89C0.07 10.77 0 10.61 0 10.45C0 10.29 0.07 10.12 0.19 10.01L5.01 5.18C5.13 5.06 5.29 5 5.46 5C5.63 5 5.79 5.07 5.9 5.18C6.02 5.3 6.09 5.46 6.09 5.62C6.09 5.78 6.02 5.95 5.9 6.06L1.09 10.88C0.97 11 0.81 11.06 0.65 11.06L0.64 11.07Z" fill="black"/>
<path d="M0.64 11.07C0.29 11.07 0.01 10.79 0.01 10.44C0.01 10.09 0.29 9.81 0.64 9.81H18.97C19.32 9.81 19.6 10.09 19.6 10.44C19.6 10.79 19.32 11.07 18.97 11.07H0.64Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1569">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

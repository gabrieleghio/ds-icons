import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCheckMarkValidation20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_686)">
<path d="M7.13377 16.26C6.96377 16.26 6.80377 16.19 6.69377 16.08L1.18377 10.57C0.943769 10.32 0.933769 9.93 1.18377 9.68C1.30377 9.56 1.46377 9.5 1.63377 9.5C1.80377 9.5 1.96377 9.56 2.07377 9.68L7.06377 14.66C7.06377 14.66 7.10377 14.69 7.13377 14.69C7.16377 14.69 7.18377 14.69 7.20377 14.66L17.6838 4.18C17.8038 4.06 17.9638 4 18.1238 4C18.2838 4 18.4538 4.07 18.5738 4.18C18.6938 4.3 18.7538 4.46 18.7538 4.62C18.7538 4.78 18.6838 4.95 18.5738 5.07L7.58377 16.07C7.46377 16.19 7.30377 16.25 7.13377 16.25V16.26Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_686">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

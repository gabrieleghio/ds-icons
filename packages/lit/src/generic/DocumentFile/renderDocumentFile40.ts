import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderDocumentFile40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_734)">
<path d="M33.11 13.3901C33.11 13.3101 33.09 13.2401 33.07 13.1701C33.07 13.1401 33.05 13.1201 33.04 13.0901C33 13.0101 32.95 12.9301 32.88 12.8601L23.27 3.24012C23.2 3.17012 23.12 3.12012 23.04 3.08012C23.01 3.07012 22.99 3.06012 22.96 3.05012C22.89 3.02012 22.81 3.01012 22.74 3.01012C22.72 3.01012 22.71 3.00012 22.69 3.00012H7.83C7.37 3.00012 7 3.37012 7 3.83012V36.8301C7 37.2901 7.37 37.6601 7.83 37.6601H32.29C32.75 37.6601 33.12 37.2901 33.12 36.8301V13.4401C33.12 13.4401 33.12 13.4101 33.11 13.3901ZM23.51 5.84012L30.28 12.6101H23.51V5.84012ZM8.66 36.0001V4.66012H21.84V13.4401C21.84 13.9001 22.21 14.2701 22.67 14.2701H31.45V36.0001H8.66Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_734">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

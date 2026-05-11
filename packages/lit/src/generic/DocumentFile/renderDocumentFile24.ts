import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderDocumentFile24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_740)">
<path d="M4.76 22.31C4.34 22.31 4 21.97 4 21.56V1.75C4 1.33 4.34 1 4.76 1H13.67C13.8 1.01 13.86 1.03 13.92 1.05C14.08 1.12 14.14 1.16 14.2 1.22L19.97 6.99C20.03 7.06 20.08 7.13 20.12 7.21C20.17 7.34 20.18 7.41 20.19 7.48V21.56C20.19 21.98 19.86 22.31 19.44 22.31H4.76ZM5.64 2.51C5.57 2.51 5.52 2.56 5.52 2.63V20.68C5.52 20.75 5.57 20.8 5.64 20.8H18.57C18.64 20.8 18.69 20.75 18.69 20.68V8.39C18.69 8.32 18.64 8.27 18.57 8.27H13.68C13.26 8.27 12.93 7.93 12.93 7.51V2.63C12.93 2.56 12.88 2.51 12.81 2.51H5.65H5.64ZM14.5 3.76C14.5 3.76 14.43 3.82 14.43 3.87V6.65C14.43 6.72 14.48 6.77 14.55 6.77H17.33C17.33 6.77 17.42 6.74 17.44 6.7C17.46 6.66 17.44 6.6 17.41 6.57L14.63 3.79C14.63 3.79 14.58 3.75 14.55 3.75C14.53 3.75 14.52 3.75 14.5 3.75V3.76Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_740">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

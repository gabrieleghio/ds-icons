import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderInfo40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_333)">
<path d="M19.58 0C8.78 0 0 8.79 0 19.58C0 30.37 8.78 39.16 19.58 39.16C30.38 39.16 39.16 30.38 39.16 19.58C39.16 8.78 30.38 0 19.58 0ZM19.58 37.49C9.7 37.49 1.67 29.46 1.67 19.58C1.67 9.7 9.7 1.67 19.58 1.67C29.46 1.67 37.49 9.7 37.49 19.58C37.49 29.46 29.45 37.49 19.58 37.49Z" fill="black"/>
<path d="M19.58 15.39C19.12 15.39 18.75 15.76 18.75 16.22V29.19C18.75 29.65 19.12 30.02 19.58 30.02C20.04 30.02 20.41 29.65 20.41 29.19V16.22C20.41 15.76 20.04 15.39 19.58 15.39Z" fill="black"/>
<path d="M19.58 11.16C20.2648 11.16 20.82 10.6048 20.82 9.92C20.82 9.23517 20.2648 8.68 19.58 8.68C18.8952 8.68 18.34 9.23517 18.34 9.92C18.34 10.6048 18.8952 11.16 19.58 11.16Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_333">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

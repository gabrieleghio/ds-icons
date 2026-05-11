import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderHeartFavFilled20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1180)">
<path d="M18.7505 5.11071C18.4964 4.50238 18.1339 3.95238 17.6672 3.48571C17.2005 3.01904 16.6547 2.65238 16.0422 2.40238C14.8214 1.89821 13.4339 1.89821 12.213 2.40238C11.6047 2.65654 11.0589 3.01904 10.588 3.48571L10.0005 4.07321L9.40885 3.48571C8.46302 2.53988 7.20885 2.01904 5.87135 2.01904C4.53385 2.01904 3.27969 2.53988 2.33385 3.48571C1.38802 4.43154 0.867188 5.68571 0.867188 7.02321C0.867188 8.36071 1.38802 9.61488 2.33385 10.5607L9.70469 17.9315C9.78802 18.0149 9.89219 18.0524 10.0005 18.0524C10.1089 18.0524 10.213 18.0107 10.2964 17.9315L17.6672 10.5607C18.1339 10.094 18.5005 9.54821 18.7505 8.93571C19.0047 8.32738 19.1339 7.68154 19.1339 7.01904C19.1339 6.35654 19.0047 5.71488 18.7505 5.10238V5.11071Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1180">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

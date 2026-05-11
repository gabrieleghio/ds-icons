import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaYoutubeFilled40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1392)">
<path d="M39.1667 10.5002C38.6667 8.75016 37.3333 7.41683 35.6667 6.91683C32.5833 6.0835 20 6.0835 20 6.0835C20 6.0835 7.5 6.0835 4.33333 6.91683C2.66667 7.41683 1.33333 8.75016 0.833333 10.5002C0 13.5835 0 20.1668 0 20.1668C0 20.1668 0 26.7502 0.833333 29.8335C1.33333 31.5835 2.66667 32.9168 4.33333 33.4168C7.41667 34.2502 20 34.2502 20 34.2502C20 34.2502 32.5 34.2502 35.6667 33.4168C37.4167 32.9168 38.75 31.5835 39.1667 29.8335C40 26.6668 40 20.1668 40 20.1668C40 20.1668 40 13.5835 39.1667 10.5002ZM15.9167 26.0835V14.2502L26.3333 20.1668L15.9167 26.0835Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1392">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

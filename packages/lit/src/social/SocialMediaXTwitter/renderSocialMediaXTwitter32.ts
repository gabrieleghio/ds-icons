import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaXTwitter32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1415)">
<path d="M0.0760015 1.6665L12.1767 17.8458L0 30.9998H2.74067L13.4013 19.4825L22.0147 30.9998H31.3407L18.5593 13.9112L29.8933 1.6665H27.1527L17.3347 12.2732L9.402 1.6665H0.0760015ZM4.106 3.6845H8.39L27.3093 28.9805H23.0253L4.106 3.6845Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1415">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

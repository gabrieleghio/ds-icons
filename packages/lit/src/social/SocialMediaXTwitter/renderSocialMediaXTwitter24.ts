import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaXTwitter24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1419)">
<path d="M0.0570011 1L9.1325 13.1345L0 23H2.0555L10.051 14.362L16.511 23H23.5055L13.9195 10.1835L22.42 1H20.3645L13.001 8.955L7.0515 1H0.0570011ZM3.0795 2.5135H6.2925L20.482 21.4855H17.269L3.0795 2.5135Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1419">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

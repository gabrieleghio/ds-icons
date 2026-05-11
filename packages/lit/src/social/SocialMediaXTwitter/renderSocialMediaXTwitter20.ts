import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaXTwitter20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1423)">
<path d="M0.0475009 1.1665L7.61042 11.2786L0 19.4998H1.71292L8.37583 12.3015L13.7592 19.4998H19.5879L11.5996 8.81942L18.6833 1.1665H16.9704L10.8342 7.79567L5.87625 1.1665H0.0475009ZM2.56625 2.42775H5.24375L17.0683 18.2378H14.3908L2.56625 2.42775Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1423">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

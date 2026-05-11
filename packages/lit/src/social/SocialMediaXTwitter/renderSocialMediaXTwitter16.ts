import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaXTwitter16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1427)">
<path d="M0.0380007 0.333496L6.08833 8.42316L0 15.0002H1.37033L6.70067 9.2415L11.0073 15.0002H15.6703L9.27967 6.45583L14.9467 0.333496H13.5763L8.66733 5.63683L4.701 0.333496H0.0380007ZM2.053 1.3425H4.195L13.6547 13.9905H11.5127L2.053 1.3425Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1427">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowChevronUpTop24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1656)">
<path d="M24 17.8604C24 17.6898 23.9488 17.527 23.8574 17.3857L23.7539 17.252L23.751 17.25L12.751 6.25C12.5924 6.09146 12.3772 6 12.1504 6C11.9236 6 11.7083 6.09146 11.5498 6.25L0.549805 17.25C0.391336 17.4085 0.300781 17.6238 0.300781 17.8506V17.8604C0.300781 18.0872 0.391264 18.3024 0.549805 18.4609C0.708344 18.6195 0.923569 18.71 1.15039 18.71C1.37721 18.71 1.59244 18.6195 1.75098 18.4609L12.1152 8.09766C12.1236 8.09511 12.1333 8.09161 12.1436 8.08984C12.1555 8.08779 12.164 8.08936 12.1689 8.08984L22.5498 18.4609C22.7083 18.6195 22.9236 18.71 23.1504 18.71C23.3772 18.71 23.5924 18.6195 23.751 18.4609C23.9095 18.3024 24 18.0872 24 17.8604Z"/>
</g>
<defs>
<clipPath id="clip0_2055_1656">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

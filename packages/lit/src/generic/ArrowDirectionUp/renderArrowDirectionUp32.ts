import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderArrowDirectionUp32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1581)">
<path d="M15.9775 1.05C15.9475 1.03 15.9075 1.01 15.8675 1.01C15.8475 1.01 15.7575 1.05 15.7575 1.05L8.0375 8.77C7.9875 8.82 7.9875 8.93 8.0375 8.98C8.0475 8.99 8.1475 9.02 8.1475 9.02C8.1675 9.02 8.2575 8.98 8.2575 8.98L15.9775 1.26C16.0275 1.21 16.0275 1.1 15.9775 1.05ZM15.7575 1.05C15.7075 1.1 15.7575 1.26 15.7575 1.26L23.4775 8.98C23.4875 8.99 23.5875 9.02 23.5875 9.02C23.6075 9.02 23.6975 8.98 23.6975 8.98C23.7475 8.93 23.6975 8.77 23.6975 8.77L15.9775 1.05M15.8675 30.64C15.7875 30.64 15.7175 30.57 15.7175 30.49V1.15C15.7175 1.07 15.7875 1 15.8675 1C15.9475 1 16.0175 1.07 16.0175 1.15V30.48C16.0175 30.56 15.9475 30.63 15.8675 30.63V30.64Z" stroke="black" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2055_1581">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

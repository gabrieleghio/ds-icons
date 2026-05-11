import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCheckMarkValidation40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_677)">
<path d="M14.8375 31.6675C14.6275 31.6675 14.4075 31.5875 14.2475 31.4275L3.2475 20.4275C2.9175 20.0975 2.9175 19.5775 3.2475 19.2475C3.5775 18.9175 4.0975 18.9175 4.4275 19.2475L14.8375 29.6575L36.2475 8.2475C36.5775 7.9175 37.0975 7.9175 37.4275 8.2475C37.7575 8.5775 37.7575 9.0975 37.4275 9.4275L15.4275 31.4275C15.2675 31.5875 15.0475 31.6675 14.8375 31.6675Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_677">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

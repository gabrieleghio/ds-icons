import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderPlus32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 29 29" width="29" height="29"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_281)">
<path d="M14.4947 28.9997C14.0298 28.9997 13.6475 28.6174 13.6475 28.1525V0.847158C13.6475 0.382254 14.0298 0 14.4947 0C14.9596 0 15.3418 0.382254 15.3418 0.847158V28.1525C15.3418 28.6174 14.9596 28.9997 14.4947 28.9997Z" fill="black"/>
<path d="M0.847158 15.3522C0.382254 15.3522 0 14.9699 0 14.505C0 14.0401 0.382254 13.6578 0.847158 13.6578H28.1525C28.6174 13.6578 28.9997 14.0401 28.9997 14.505C28.9997 14.9699 28.6174 15.3522 28.1525 15.3522H0.847158Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_281">
<rect width="28.07" height="28.07" fill="white" transform="scale(1.03312)"/>
</clipPath>
</defs>`)}
  </svg>`;

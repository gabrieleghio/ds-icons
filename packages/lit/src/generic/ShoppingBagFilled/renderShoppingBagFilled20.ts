import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShoppingBagFilled20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2207_39)">
<path d="M17.2872 5.3876C17.2497 5.0126 16.9372 4.7376 16.5622 4.7376H13.6997V4.6251C13.6997 2.5751 12.0372 0.912598 9.98719 0.912598C7.93719 0.912598 6.27469 2.5751 6.27469 4.6251V4.7376H3.41219C3.03719 4.7376 2.72469 5.0126 2.68719 5.3876L1.29969 18.2751C1.27469 18.4876 1.34969 18.6876 1.48719 18.8376C1.62469 18.9876 1.82469 19.0751 2.02469 19.0751H17.9247C18.1372 19.0751 18.3247 18.9876 18.4622 18.8376C18.5997 18.6876 18.6747 18.4751 18.6497 18.2751L17.2622 5.3751L17.2872 5.3876ZM12.2497 4.7251H7.74969V4.6126C7.74969 3.3751 8.76219 2.3626 9.99969 2.3626C11.2372 2.3626 12.2497 3.3751 12.2497 4.6126V4.7251Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2207_39">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

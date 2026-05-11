import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderBellNotificationFilled20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2226_4063)">
<path d="M9.97016 19.1277C8.41016 19.1277 7.12016 17.9677 6.92016 16.4677H1.98016C1.82016 16.4677 1.67016 16.3677 1.60016 16.2177C1.53016 16.0677 1.56016 15.8877 1.67016 15.7677C1.69016 15.7377 4.01016 13.1277 4.01016 11.0777V6.6777C4.01016 4.6777 5.15016 2.8177 6.99016 1.8377C8.58016 0.987695 11.3702 0.987695 12.9602 1.8377C14.8002 2.8177 15.9402 4.6677 15.9402 6.6777V11.0777C15.9402 13.3277 18.2402 15.7377 18.2602 15.7577C18.3802 15.8777 18.4102 16.0577 18.3402 16.2077C18.2702 16.3577 18.1202 16.4577 17.9602 16.4577H13.0202C12.8202 17.9577 11.5302 19.1177 9.97016 19.1177V19.1277Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2226_4063">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

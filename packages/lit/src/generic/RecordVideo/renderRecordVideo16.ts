import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderRecordVideo16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_4044_4)">
<path d="M7.92969 0C12.3049 4.23609e-05 15.8594 3.55448 15.8594 7.92969C15.8593 12.3049 12.3049 15.8593 7.92969 15.8594C3.55448 15.8594 4.23596e-05 12.3049 0 7.92969C0 3.55446 3.55446 0 7.92969 0ZM7.92969 1.19922C4.21501 1.19922 1.19922 4.22482 1.19922 7.92969C1.19926 11.6345 4.21504 14.6592 7.92969 14.6592C11.6344 14.6591 14.6591 11.6344 14.6592 7.92969C14.6592 4.22485 11.6443 1.19926 7.92969 1.19922ZM7.92969 4C10.1049 4.00004 11.8594 5.75449 11.8594 7.92969C11.8593 10.1049 10.1049 11.8593 7.92969 11.8594C5.75432 11.8594 4.00004 10.0947 4 7.92969C4 5.76446 5.76446 4 7.92969 4Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_4044_4">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderArrowDirectionUp40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1578)">
<path d="M29.3 11.6502L19.65 2.00024L10 11.6502M19.65 2.00024V38.6602" stroke="black" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2055_1578">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

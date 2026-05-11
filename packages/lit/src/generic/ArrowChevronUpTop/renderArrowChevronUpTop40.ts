import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderArrowChevronUpTop40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1650)">
<path d="M38.7551 29.7558C39.0812 29.4299 39.0818 28.9013 38.7561 28.5751L20.426 10.2343C20.2694 10.0777 20.0567 9.99018 19.8352 9.99018C19.6137 9.9902 19.401 10.0777 19.2444 10.2343L0.914288 28.5751C0.588692 28.9013 0.589222 29.4299 0.915264 29.7558C1.24146 30.0816 1.77001 30.0809 2.09593 29.7548L19.8352 12.0068L37.5744 29.7548C37.9003 30.0809 38.4289 30.0815 38.7551 29.7558Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1650">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

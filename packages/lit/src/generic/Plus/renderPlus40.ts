import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderPlus40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_278)">
<path d="M20.35 37.7C19.89 37.7 19.52 37.33 19.52 36.87V3.83C19.52 3.37 19.89 3 20.35 3C20.81 3 21.18 3.37 21.18 3.83V36.87C21.18 37.33 20.81 37.7 20.35 37.7Z" fill="black"/>
<path d="M36.87 21.18H3.83C3.37 21.18 3 20.81 3 20.35C3 19.89 3.37 19.52 3.83 19.52H36.87C37.33 19.52 37.7 19.89 37.7 20.35C37.7 20.81 37.33 21.18 36.87 21.18Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_278">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

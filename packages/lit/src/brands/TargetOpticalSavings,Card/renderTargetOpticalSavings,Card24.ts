import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderTargetOpticalSavings,Card24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_5350_261)">
<path d="M22.0387 4.00003H1.96133C0.878264 4.00003 0 4.8783 0 5.96138V17.3114C0 18.3945 0.878264 19.2728 1.96133 19.2728H22.0387C23.1217 19.2728 24 18.3945 24 17.3114V5.96138C24 4.8783 23.1217 4.00003 22.0387 4.00003Z" fill="#CC0000"/>
<path d="M22.0387 4.00003H12V19.2728H22.0387C23.1217 19.2728 24 18.3945 24 17.3114V5.96138C24 4.8783 23.1217 4.00003 22.0387 4.00003Z" fill="#A60D0D"/>
<path d="M2.78125 16.0511H10.1972V16.9781H2.78125V16.0511Z" fill="#D6D6D6"/>
<path d="M0 6.99998H24V9.99998H0V6.99998Z" fill="#333333"/>
<path d="M16.584 14.5511H21V16.9781H16.584V14.5511Z" fill="#D6D6D6"/>
</g>
<defs>
<clipPath id="clip0_5350_261">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

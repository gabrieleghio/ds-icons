import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderTargetOpticalSavings,Card16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_5350_255)">
<path d="M14.6924 3.00003H1.30755C0.585509 3.00003 0 3.58555 0 4.30759V11.8743C0 12.5963 0.585509 13.1818 1.30755 13.1818H14.6924C15.4145 13.1818 16 12.5963 16 11.8743V4.30759C16 3.58555 15.4145 3.00003 14.6924 3.00003Z" fill="#CC0000"/>
<path d="M14.6924 3.00003H8V13.1818H14.6924C15.4145 13.1818 16 12.5963 16 11.8743V4.30759C16 3.58555 15.4145 3.00003 14.6924 3.00003Z" fill="#A60D0D"/>
<path d="M1.85417 11.034H6.79816V11.6521H1.85417V11.034Z" fill="#D6D6D6"/>
<path d="M0 5H16V7H0V5Z" fill="#333333"/>
<path d="M11.056 10.0341H14V11.6521H11.056V10.0341Z" fill="#D6D6D6"/>
</g>
<defs>
<clipPath id="clip0_5350_255">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

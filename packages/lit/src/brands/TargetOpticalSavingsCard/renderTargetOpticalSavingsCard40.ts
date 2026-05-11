import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderTargetOpticalSavingsCard40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_5350_267)">
<path d="M36.7311 7.00003H3.26888C1.46377 7.00003 0 8.46382 0 10.2689V29.1857C0 30.9908 1.46377 32.4546 3.26888 32.4546H36.7311C38.5362 32.4546 40 30.9908 40 29.1857V10.2689C40 8.46382 38.5362 7.00003 36.7311 7.00003Z" fill="#CC0000"/>
<path d="M36.7311 7.00003H20V32.4546H36.7311C38.5362 32.4546 40 30.9908 40 29.1857V10.2689C40 8.46382 38.5362 7.00003 36.7311 7.00003Z" fill="#A60D0D"/>
<path d="M4.63542 27.0851H16.9954V28.6301H4.63542V27.0851Z" fill="#D6D6D6"/>
<path d="M0 12H40V17H0V12Z" fill="#333333"/>
<path d="M27.64 24.5851H35V28.6301H27.64V24.5851Z" fill="#D6D6D6"/>
</g>
<defs>
<clipPath id="clip0_5350_267">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

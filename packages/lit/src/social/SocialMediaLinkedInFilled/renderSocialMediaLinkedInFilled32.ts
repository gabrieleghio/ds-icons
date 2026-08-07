import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSocialMediaLinkedInFilled32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1506)">
<g clip-path="url(#clip1_2055_1506)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.4444 0.000244141C30.4081 0.000244141 32 1.59212 32 3.5558V28.4447C32 30.4084 30.4081 32.0002 28.4444 32.0002H3.55556C1.59188 32.0002 0 30.4084 0 28.4447V3.5558C0 1.59212 1.59188 0.000244141 3.55556 0.000244141H28.4444ZM4.90321 27.5558H9.67535V12.1482H4.90321V27.5558ZM21.9479 11.6778C18.6784 11.6778 17.3021 14.2238 17.3021 14.2238V12.1482H12.7261V27.5558H17.3021V19.4677C17.3021 17.3007 18.2999 16.0111 20.2092 16.0111C21.9643 16.0111 22.8068 17.2503 22.8069 19.4677V27.5558H27.5556V17.8006C27.5555 13.6733 25.2159 11.6778 21.9479 11.6778ZM7.26649 4.44469C5.7077 4.44469 4.44444 5.71794 4.44444 7.288C4.44455 8.85798 5.70776 10.1309 7.26649 10.1309C8.82517 10.1308 10.0876 8.85794 10.0877 7.288C10.0877 5.71798 8.82524 4.44475 7.26649 4.44469Z"/>
</g>
</g>
<defs>
<clipPath id="clip0_2055_1506">
<rect width="32" height="31.9994" fill="white"/>
</clipPath>
<clipPath id="clip1_2055_1506">
<rect width="32" height="31.9994" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

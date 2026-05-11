import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderPaletteColorSwatch32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_13)">
<path d="M4.34422 20.2449L19.2742 5.31494L26.6042 12.6449L20.5242 18.7249M2.82422 23.9249V2.81494H13.1942V11.3949M8.01422 18.7349H29.1242V29.1049H8.01422C5.15422 29.1049 2.82422 26.7849 2.82422 23.9149C2.82422 21.0549 5.14422 18.7249 8.01422 18.7249V18.7349ZM7.61422 23.9149C7.61422 24.3071 7.29634 24.6249 6.90422 24.6249C6.5121 24.6249 6.19422 24.3071 6.19422 23.9149C6.19422 23.5228 6.5121 23.2049 6.90422 23.2049C7.29634 23.2049 7.61422 23.5228 7.61422 23.9149Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2055_13">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

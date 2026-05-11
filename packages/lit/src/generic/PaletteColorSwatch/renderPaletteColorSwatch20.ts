import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderPaletteColorSwatch20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_19)">
<path d="M18.04 10.9502H14.12L16.9 8.17024C17.01 8.06024 17.08 7.91024 17.08 7.75024C17.08 7.59024 17.02 7.44024 16.9 7.33024L12.32 2.75024C12.09 2.52024 11.71 2.52024 11.47 2.75024L8.7 5.52024V1.60024C8.7 1.27024 8.43 1.00024 8.1 1.00024H1.6C1.27 1.00024 1 1.27024 1 1.60024V14.8002C1 16.9102 2.73 18.6302 4.84 18.6302H18.04C18.37 18.6302 18.64 18.3602 18.64 18.0302V11.5502C18.64 11.2202 18.37 10.9502 18.04 10.9502ZM11.88 4.02024L15.62 7.75024L12.42 10.9502H4.95L11.88 4.02024ZM7.48 2.20024V6.72024L2.2 12.0002V2.20024H7.48ZM17.44 17.4302H4.84C3.38 17.4302 2.2 16.2402 2.2 14.7902C2.2 13.3402 3.38 12.1502 4.84 12.1502H17.44V17.4302Z" fill="black"/>
<path d="M4.15 13.7402C3.57 13.7402 3.1 14.2102 3.1 14.7802C3.1 15.3502 3.57 15.8302 4.15 15.8302C4.73 15.8302 5.2 15.3602 5.2 14.7802C5.2 14.2002 4.73 13.7402 4.15 13.7402Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_19">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

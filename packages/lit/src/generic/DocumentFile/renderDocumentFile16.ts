import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderDocumentFile16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_746)">
<path d="M3.58 15.37C3.26 15.37 3 15.11 3 14.79V1.58C3 1.26 3.26 1 3.58 1H9.52C9.61 1 9.66 1.02 9.71 1.04C9.82 1.09 9.88 1.12 9.93 1.17L13.78 5.02C13.83 5.07 13.87 5.12 13.89 5.19C13.93 5.29 13.94 5.34 13.94 5.4V14.79C13.94 15.11 13.68 15.37 13.36 15.37H3.58ZM12.78 14.2V6.01H9.52C9.2 6.01 8.94 5.75 8.94 5.43V2.17H4.16V14.21H12.78V14.2ZM11.95 4.85L10.1 3V4.85H11.95Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_746">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

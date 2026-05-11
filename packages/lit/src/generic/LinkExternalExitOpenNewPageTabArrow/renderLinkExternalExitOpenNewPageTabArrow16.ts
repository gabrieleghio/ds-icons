import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderLinkExternalExitOpenNewPageTabArrow16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_860)">
<path d="M1.58 15.34C1.25 15.34 1 15.08 1 14.76V3.53C1 3.21 1.26 2.95 1.58 2.95H11.5C11.56 2.95 11.62 2.99 11.64 3.04C11.66 3.09 11.65 3.16 11.61 3.2L10.78 4.04C10.78 4.04 10.71 4.08 10.67 4.08L2.17 4.11V14.17H12.23V5.74C12.23 5.74 12.24 5.66 12.27 5.64L12.97 4.91L13.14 4.74C13.14 4.74 13.21 4.7 13.25 4.7C13.27 4.7 13.29 4.7 13.31 4.71C13.37 4.73 13.4 4.79 13.4 4.85V14.77C13.4 15.09 13.14 15.35 12.82 15.35H1.58V15.34Z" fill="black"/>
<path d="M10.68 6.25C10.53 6.25 10.37 6.19 10.27 6.08C10.16 5.97 10.1 5.82 10.1 5.67C10.1 5.52 10.16 5.37 10.27 5.26L13.37 2.16H10.85C10.53 2.16 10.27 1.9 10.27 1.58C10.27 1.26 10.53 1 10.85 1H14.78C14.86 1 14.93 1.01 15 1.04C15.14 1.1 15.26 1.22 15.32 1.36C15.35 1.43 15.36 1.5 15.36 1.58V5.51C15.36 5.83 15.1 6.09 14.78 6.09C14.46 6.09 14.2 5.83 14.2 5.51V2.99L11.09 6.1C10.98 6.21 10.83 6.27 10.68 6.27V6.25Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_860">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

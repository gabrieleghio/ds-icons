import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderLinkExternalExitOpenNewPageTabArrow32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_851)">
<path d="M2.82 30.04C2.36 30.04 2 29.68 2 29.22V6.76C2 6.31 2.37 5.94 2.82 5.94H22.17C22.23 5.94 22.28 5.98 22.31 6.03C22.33 6.09 22.32 6.15 22.28 6.19L20.95 7.52L3.58 7.56L3.63 28.44L24.51 28.39L24.46 11.18L25.84 9.75C25.84 9.75 25.93 9.71 25.95 9.71C26.06 9.75 26.1 9.8 26.1 9.86V29.21C26.1 29.66 25.73 30.03 25.28 30.03H2.82V30.04Z" fill="black"/>
<path d="M21 11.85C20.78 11.85 20.58 11.77 20.42 11.61C20.27 11.46 20.18 11.25 20.18 11.03C20.18 10.81 20.26 10.61 20.42 10.45L27.31 3.56L21.34 3.64C20.89 3.64 20.52 3.27 20.52 2.82C20.52 2.37 20.89 2 21.34 2H29.19C29.29 2 29.4 2.02 29.5 2.06C29.7 2.14 29.86 2.3 29.94 2.5C29.98 2.6 30 2.71 30 2.81V10.66C30 11.11 29.63 11.48 29.18 11.48C28.73 11.48 28.36 11.11 28.36 10.66V4.66L21.55 11.59C21.4 11.74 21.19 11.83 20.97 11.83L21 11.85Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_851">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

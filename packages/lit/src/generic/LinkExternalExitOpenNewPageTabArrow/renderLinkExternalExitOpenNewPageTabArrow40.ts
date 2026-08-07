import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderLinkExternalExitOpenNewPageTabArrow40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_848)">
<path d="M31.07 35.98H4.66V9.57H26.36L28.02 7.9H3.83C3.36 7.9 3 8.28 3 8.73V36.81C3 37.28 3.37 37.64 3.83 37.64H31.9C32.36 37.64 32.73 37.27 32.73 36.81V12.62L31.06 14.28V35.98H31.07Z"/>
<path d="M37.58 3.51C37.5 3.31 37.33 3.14 37.13 3.06C37.03 3.02 36.92 3 36.81 3H26.99C26.53 3 26.16 3.37 26.16 3.83C26.16 4.29 26.53 4.66 26.99 4.66H34.8L25.97 13.49C25.64 13.82 25.64 14.34 25.97 14.67C26.13 14.83 26.35 14.91 26.56 14.91C26.77 14.91 26.99 14.83 27.15 14.67L35.98 5.84V13.65C35.98 14.11 36.35 14.48 36.81 14.48C37.27 14.48 37.64 14.11 37.64 13.65V3.83C37.64 3.72 37.62 3.61 37.58 3.51Z"/>
</g>
<defs>
<clipPath id="clip0_2055_848">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

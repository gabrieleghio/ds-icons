import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCameraPhoto40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_829)">
<path d="M20.37 14.59C16.93 14.59 14.13 17.39 14.13 20.83C14.13 24.27 16.93 27.07 20.37 27.07C23.81 27.07 26.61 24.27 26.61 20.83C26.61 17.39 23.81 14.59 20.37 14.59ZM20.37 25.39C17.85 25.39 15.8 23.34 15.8 20.82C15.8 18.3 17.85 16.25 20.37 16.25C22.89 16.25 24.94 18.3 24.94 20.82C24.94 23.34 22.89 25.39 20.37 25.39Z" fill="black"/>
<path d="M36.91 10.59H31.54L26.1 6.19C25.95 6.07 25.77 6 25.58 6H15.17C14.98 6 14.79 6.07 14.65 6.19L9.21 10.59H3.83C3.37 10.59 3 10.96 3 11.42V32.17C3 32.63 3.37 33 3.83 33H36.91C37.37 33 37.74 32.63 37.74 32.17V11.42C37.74 10.96 37.37 10.59 36.91 10.59ZM36.08 31.34H4.67V12.25H9.51C9.7 12.25 9.89 12.18 10.03 12.06L15.47 7.66H25.29L30.73 12.06C30.88 12.18 31.06 12.25 31.25 12.25H36.09V31.33L36.08 31.34Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_829">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCameraPhoto24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_835)">
<path d="M11.68 17.15C9.48 17.15 7.68 15.36 7.68 13.15C7.68 10.94 9.47 9.15 11.68 9.15C13.89 9.15 15.68 10.94 15.68 13.15C15.68 15.36 13.89 17.15 11.68 17.15ZM11.68 10.67C10.31 10.67 9.19 11.79 9.19 13.16C9.19 14.53 10.3 15.65 11.68 15.65C13.06 15.65 14.17 14.53 14.17 13.16C14.17 11.79 13.05 10.67 11.68 10.67Z" fill="black"/>
<path d="M1.75 20.71C1.33 20.71 1 20.37 1 19.96V7.51C1 7.09 1.34 6.76 1.75 6.76H4.89L8.07 4.17C8.2 4.06 8.37 4 8.54 4H14.78C14.95 4 15.12 4.06 15.25 4.17L18.45 6.76H21.58C22 6.76 22.34 7.09 22.34 7.51V19.96C22.34 20.38 22 20.71 21.59 20.71H1.75ZM2.63 8.26C2.56 8.26 2.51 8.31 2.51 8.38V19.08C2.51 19.15 2.56 19.2 2.63 19.2H20.73C20.8 19.2 20.85 19.15 20.85 19.08V8.38C20.85 8.31 20.8 8.26 20.73 8.26H18.2C18.03 8.26 17.86 8.2 17.73 8.09L14.53 5.5H8.82L5.64 8.09C5.5 8.2 5.34 8.26 5.16 8.26H2.63Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_835">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderChatMessage40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_639)">
<path d="M25.32 33.36C25.19 33.36 25.07 33.33 24.95 33.27C24.67 33.13 24.49 32.84 24.49 32.52V30.02H3.58C3.12 30.02 2.75 29.65 2.75 29.19V7.02995C2.75 6.56995 3.12 6.19995 3.58 6.19995H36.58C37.04 6.19995 37.41 6.56995 37.41 7.02995V29.2C37.41 29.66 37.04 30.03 36.58 30.03H30.03L25.82 33.19C25.67 33.3 25.5 33.36 25.32 33.36ZM4.41 28.37H25.31C25.77 28.37 26.14 28.74 26.14 29.2V30.86L29.24 28.53C29.38 28.42 29.56 28.36 29.74 28.36H35.74V7.85995H4.41V28.37Z" fill="black"/>
<path d="M20.04 19.35C19.25 19.35 18.61 18.71 18.61 17.92C18.61 17.13 19.25 16.49 20.04 16.49C20.83 16.49 21.47 17.13 21.47 17.92C21.47 18.71 20.83 19.35 20.04 19.35Z" fill="black"/>
<path d="M12.48 19.35C11.69 19.35 11.05 18.71 11.05 17.92C11.05 17.13 11.69 16.49 12.48 16.49C13.27 16.49 13.91 17.13 13.91 17.92C13.91 18.71 13.27 19.35 12.48 19.35Z" fill="black"/>
<path d="M27.68 19.35C26.89 19.35 26.25 18.71 26.25 17.92C26.25 17.13 26.89 16.49 27.68 16.49C28.47 16.49 29.11 17.13 29.11 17.92C29.11 18.71 28.47 19.35 27.68 19.35Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_639">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

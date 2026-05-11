import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaInstagram16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1386)">
<path d="M12.22 5.18C11.75 5.18 11.36 4.79 11.36 4.32C11.36 3.85 11.74 3.46 12.22 3.46C12.7 3.46 13.08 3.84 13.08 4.32C13.08 4.8 12.69 5.18 12.22 5.18Z" fill="black"/>
<path d="M8.27 11.89C6.27 11.89 4.65 10.27 4.65 8.27C4.65 6.27 6.27 4.65 8.27 4.65C10.27 4.65 11.89 6.27 11.89 8.27C11.89 10.27 10.27 11.89 8.27 11.89ZM8.27 5.81C6.92 5.81 5.81 6.91 5.81 8.27C5.81 9.63 6.91 10.73 8.27 10.73C9.63 10.73 10.73 9.63 10.73 8.27C10.73 6.91 9.63 5.81 8.27 5.81Z" fill="black"/>
<path d="M5.3 15.54C2.93 15.54 1 13.61 1 11.24V5.3C1 2.93 2.93 1 5.3 1H11.24C13.61 1 15.54 2.93 15.54 5.3V11.24C15.54 13.61 13.61 15.54 11.24 15.54H5.3ZM5.3 2.17C3.57 2.17 2.17 3.57 2.17 5.3V11.24C2.17 12.97 3.57 14.37 5.3 14.37H11.24C12.97 14.37 14.37 12.97 14.37 11.24V5.3C14.37 3.57 12.96 2.17 11.24 2.17H5.3Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1386">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

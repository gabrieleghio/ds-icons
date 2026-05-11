import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaTiktok40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1470)">
<path d="M27.9656 0C28.6256 5.67583 31.7939 9.06 37.3022 9.42V15.8042C34.1097 16.1158 31.3139 15.0725 28.0622 13.1042V25.0442C28.0622 40.2125 11.5256 44.9525 4.87725 34.0808C0.604749 27.085 3.22058 14.8083 16.9247 14.3167V21.0492C15.8806 21.2175 14.7647 21.4808 13.7447 21.8292C10.6964 22.8608 8.96892 24.7933 9.44892 28.2017C10.3731 34.73 22.3497 36.6617 21.3531 23.9058V0.0116667H27.9656V0Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1470">
<rect width="40" height="39.9993" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

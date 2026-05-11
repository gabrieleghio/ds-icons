import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaLinkedInFilled16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1533)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2222 0.000244141C15.2041 0.000244141 16 0.796182 16 1.77802V14.2225C16 15.2043 15.2041 16.0002 14.2222 16.0002H1.77778C0.795938 16.0002 0 15.2043 0 14.2225V1.77802C0 0.796182 0.795938 0.000244141 1.77778 0.000244141H14.2222ZM2.45161 13.778H4.83767V6.07425H2.45161V13.778ZM10.974 5.839C9.33918 5.839 8.65104 7.11201 8.65104 7.11201V6.07425H6.36306V13.778H8.65104V9.73397C8.65107 8.65046 9.14994 8.00567 10.1046 8.00567C10.9822 8.00567 11.4034 8.62527 11.4034 9.73397V13.778H13.7778V8.90042C13.7777 6.83679 12.6079 5.83903 10.974 5.839ZM3.63325 2.22247C2.85385 2.22247 2.22222 2.85909 2.22222 3.64412C2.22228 4.42911 2.85388 5.06557 3.63325 5.06557C4.41258 5.06553 5.04378 4.42909 5.04384 3.64412C5.04384 2.85911 4.41262 2.2225 3.63325 2.22247Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1533">
<rect width="16" height="15.9997" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

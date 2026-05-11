import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaYoutubeFilled24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1398)">
<path d="M23.5 6.1002C23.2 5.0502 22.4 4.2502 21.4 3.9502C19.55 3.4502 12 3.4502 12 3.4502C12 3.4502 4.5 3.4502 2.6 3.9502C1.6 4.2502 0.8 5.0502 0.5 6.1002C0 7.9502 0 11.9002 0 11.9002C0 11.9002 0 15.8502 0.5 17.7002C0.8 18.7502 1.6 19.5502 2.6 19.8502C4.45 20.3502 12 20.3502 12 20.3502C12 20.3502 19.5 20.3502 21.4 19.8502C22.45 19.5502 23.25 18.7502 23.5 17.7002C24 15.8002 24 11.9002 24 11.9002C24 11.9002 24 7.9502 23.5 6.1002ZM9.55 15.4502V8.35019L15.8 11.9002L9.55 15.4502Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1398">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;

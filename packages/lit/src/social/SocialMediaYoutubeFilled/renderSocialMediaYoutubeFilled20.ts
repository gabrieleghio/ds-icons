import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSocialMediaYoutubeFilled20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1401)">
<path d="M19.5833 5.24984C19.3333 4.37484 18.6667 3.70817 17.8333 3.45817C16.2917 3.0415 10 3.0415 10 3.0415C10 3.0415 3.75 3.0415 2.16667 3.45817C1.33333 3.70817 0.666667 4.37484 0.416667 5.24984C0 6.7915 0 10.0832 0 10.0832C0 10.0832 0 13.3748 0.416667 14.9165C0.666667 15.7915 1.33333 16.4582 2.16667 16.7082C3.70833 17.1248 10 17.1248 10 17.1248C10 17.1248 16.25 17.1248 17.8333 16.7082C18.7083 16.4582 19.375 15.7915 19.5833 14.9165C20 13.3332 20 10.0832 20 10.0832C20 10.0832 20 6.7915 19.5833 5.24984ZM7.95833 13.0415V7.12484L13.1667 10.0832L7.95833 13.0415Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1401">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
